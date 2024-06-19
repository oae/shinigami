import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {
  ChapterQueryRequest,
  MangaQueryRequest,
  PageQueryRequest,
} from 'src/manga/dto/request.dto';
import { PluginsModule } from 'src/plugins/plugins.module';

@Injectable()
export class MangaService {
  async queryMangasByPlugin(mangaQueryRequest: MangaQueryRequest) {
    const plugin = this.getPlugin(mangaQueryRequest.pluginId);

    let mangas = await plugin.getMangas();

    if (mangas.length === 0) {
      mangas = await plugin.updateMangas();
    }

    const mangasById = mangas.reduce((byId: any, manga: any) => {
      byId[manga.id] = manga;
      return byId;
    }, {});

    const MiniSearch = (await import('minisearch')).default;
    const suffixes = (term: string, minLength: number) => {
      if (term == null) {
        return [];
      }
      const tokens = [];
      for (let i = 0; i <= term.length - minLength; i++) {
        tokens.push(term.slice(i));
      }
      return tokens;
    };
    const miniSearch = new MiniSearch({
      fields: ['title'],
      storeFields: ['id'],
      processTerm: (term) => suffixes(term, 3),
      searchOptions: {
        boost: { title: 2 },
        fuzzy: 0.1,
      },
    });
    miniSearch.addAll(mangas);

    const results = miniSearch.search(mangaQueryRequest.keyword);

    return results.map((result) => {
      const manga = mangasById[result.id];
      return {
        id: manga.id,
        title: manga.title,
        status: manga.status,
        connector: manga.connector.label,
      };
    });
  }

  async queryChaptersByManga(chapterQueryRequest: ChapterQueryRequest) {
    const plugin = this.getPlugin(chapterQueryRequest.pluginId);

    return plugin._getChapters({ id: chapterQueryRequest.mangaId });
  }

  async queryPagesByChapter(pageQueryRequest: PageQueryRequest) {
    const plugin = this.getPlugin(pageQueryRequest.pluginId);

    return plugin._getPages({ id: pageQueryRequest.chapterId });
  }

  private getPlugin(pluginId: string): any {
    if (pluginId === undefined || pluginId === null) {
      throw new HttpException('Plugin ID is required', HttpStatus.BAD_REQUEST);
    }
    const FoundPlugin: any = PluginsModule.pluginsArray.find(
      (plugin) => plugin.name === pluginId,
    )?.module;

    if (!FoundPlugin) {
      throw new HttpException(
        `Plugin with ID ${pluginId} not found`,
        HttpStatus.BAD_REQUEST,
      );
    }

    return new FoundPlugin();
  }
}
