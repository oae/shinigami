import { Body, Controller, Post } from '@nestjs/common';
import {
  ChapterQueryRequest,
  MangaQueryRequest,
  PageQueryRequest,
} from './dto/request.dto';
import { MangaService } from './manga.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('Manga')
@Controller('manga')
export class MangaController {
  constructor(private readonly mangaService: MangaService) {}

  @ApiBody({
    type: MangaQueryRequest,
    required: true,
    examples: {
      manga: {
        summary: 'Manga query',
        description: 'Query for a specific manga',
        value: {
          pluginId: 'plugin-id',
        },
      },
    },
  })
  @Post('query')
  async queryMangasByPlugin(@Body() mangaQueryRequest: MangaQueryRequest) {
    return this.mangaService.queryMangasByPlugin(mangaQueryRequest);
  }

  @ApiBody({
    type: ChapterQueryRequest,
    required: true,
    examples: {
      chapter: {
        summary: 'Chapter query',
        description: 'Query for a specific chapter',
        value: {
          pluginId: 'plugin-id',
          mangaId: 'manga-id',
        },
      },
    },
  })
  @Post('query-chapters')
  async queryChaptersByManga(@Body() chapterQueryRequest: ChapterQueryRequest) {
    return this.mangaService.queryChaptersByManga(chapterQueryRequest);
  }

  @ApiBody({
    type: PageQueryRequest,
    required: true,
    examples: {
      page: {
        summary: 'Page query',
        description: 'Query for pages of a specific chapter',
        value: {
          pluginId: 'plugin-id',
          chapterId: 'chapter-id',
        },
      },
    },
  })
  @Post('query-pages')
  async queryPagesByChapter(@Body() pageQueryRequest: PageQueryRequest) {
    return this.mangaService.queryPagesByChapter(pageQueryRequest);
  }
}
