import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ChapterQueryDto, MangaQueryDto, PageQueryDto } from './dto/manga-query.dto';
import { UpdateMangaDto } from './dto/update-manga.dto';
import { MangaService } from './manga.service';

@Controller('manga')
export class MangaController {
  constructor(private readonly mangaService: MangaService) {}

  // @Post()
  // create(@Body() createMangaDto: CreateMangaDto) {
  //   return this.mangaService.create(createMangaDto);
  // }

  @Post()
  async findAll(@Body() mangaQueryDto: MangaQueryDto) {
    return this.mangaService.findAll(mangaQueryDto);
  }

  @Post('chapter')
  async findChapter(@Body() chapterQueryDto: ChapterQueryDto) {
    return this.mangaService.findChapters(chapterQueryDto);
  }

  @Post('page')
  async findPage(@Body() pageQueryDto: PageQueryDto) {
    return this.mangaService.findPages(pageQueryDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mangaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMangaDto: UpdateMangaDto) {
    return this.mangaService.update(+id, updateMangaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mangaService.remove(+id);
  }
}
