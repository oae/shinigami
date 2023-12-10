import { Inject, Injectable } from '@nestjs/common';
import { CreateMangaDto } from './dto/create-manga.dto';
import { UpdateMangaDto } from './dto/update-manga.dto';
import { ChapterQueryDto, MangaQueryDto, PageQueryDto } from 'src/manga/dto/manga-query.dto';
import { PluginsModule } from 'src/plugins/plugins.module';

@Injectable()
export class MangaService {
  create(createMangaDto: CreateMangaDto) {
    return 'This action adds a new manga';
  }

  async findAll(mangaQueryDto: MangaQueryDto) {
    if (!mangaQueryDto.pluginId) {
      return [];
    }
    const Plugin: any = PluginsModule.pluginsArray.find(
      (plugin) => plugin.name === mangaQueryDto.pluginId,
    )?.module;
    if (!Plugin) {
      return [];
    }

    const plugin = new Plugin();

    return plugin._getMangas();
  }

  async findChapters(chapterQueryDto: ChapterQueryDto) {
    if (!chapterQueryDto.pluginId) {
      return [];
    }
    const Plugin: any = PluginsModule.pluginsArray.find(
      (plugin) => plugin.name === chapterQueryDto.pluginId,
    )?.module;
    if (!Plugin) {
      return [];
    }

    const plugin = new Plugin();

    return plugin._getChapters({ id: chapterQueryDto.mangaId });
  }

  async findPages(pageQueryDto: PageQueryDto) {
    if (!pageQueryDto.pluginId) {
      return [];
    }
    const Plugin: any = PluginsModule.pluginsArray.find(
      (plugin) => plugin.name === pageQueryDto.pluginId,
    )?.module;
    if (!Plugin) {
      return [];
    }

    const plugin = new Plugin();

    return plugin._getPages({ id: pageQueryDto.chapterId });
  }

  findOne(id: number) {
    return `This action returns a #${id} manga`;
  }

  update(id: number, updateMangaDto: UpdateMangaDto) {
    return `This action updates a #${id} manga`;
  }

  remove(id: number) {
    return `This action removes a #${id} manga`;
  }
}
