import { Test, TestingModule } from '@nestjs/testing';
import { MangaController } from './manga.controller';
import { MangaService } from './manga.service';

describe('MangaController', () => {
  let controller: MangaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MangaController],
      providers: [MangaService],
    }).compile();

    controller = module.get<MangaController>(MangaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
