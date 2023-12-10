import { Module, forwardRef } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PluginsModule } from './plugins/plugins.module';
import { MangaModule } from './manga/manga.module';

@Module({
  imports: [PluginsModule.registerPluginsAsync(), MangaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
