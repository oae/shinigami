import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {
  ChapterQueryRequest,
  MangaQueryRequest,
  PageQueryRequest,
} from 'src/manga/dto/manga-query.dto';
import { PluginsModule } from 'src/plugins/plugins.module';

@Injectable()
export class MangaService {
  async queryMangasByPlugin(mangaQueryRequest: MangaQueryRequest) {
    const plugin = this.getPlugin(mangaQueryRequest.pluginId);

    let mangas = await plugin.getMangas();

    if (mangas.length === 0) {
      mangas = await plugin.updateMangas();
    }

    return mangas.map((manga: any) => ({
      id: manga.id,
      title: manga.title,
      status: manga.status,
      connector: manga.connector.label,
    }));
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
