export class MangaQueryDto {
  pluginId: string;
}

export class ChapterQueryDto {
  pluginId: string;
  mangaId: string;
}

export class PageQueryDto {
  pluginId: string;
  chapterId: string;
}
