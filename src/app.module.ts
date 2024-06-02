import { Module } from '@nestjs/common';
import { PluginsModule } from './plugins/plugins.module';
import { MangaModule } from './manga/manga.module';

@Module({
  imports: [PluginsModule.registerPluginsAsync(), MangaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
