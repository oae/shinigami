import { PartialType } from '@nestjs/swagger';
import { CreateMangaDto } from './create-manga.dto';

export class UpdateMangaDto extends PartialType(CreateMangaDto) {}
