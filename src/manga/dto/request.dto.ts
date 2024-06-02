export class MangaQueryRequest {
  pluginId: string;
}

export class ChapterQueryRequest {
  pluginId: string;
  mangaId: string;
}

export class PageQueryRequest {
  pluginId: string;
  chapterId: string;
}
