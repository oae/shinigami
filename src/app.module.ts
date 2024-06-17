import { BullModule } from '@nestjs/bullmq';
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';

import { ExpressAdapter } from '@bull-board/express';
import { BullBoardModule } from '@bull-board/nestjs';
import { LoggerMiddleware } from 'src/middleware/logger.middleware';
import { MangaModule } from './manga/manga.module';
import { PluginsModule } from './plugins/plugins.module';

@Module({
  imports: [
    PluginsModule.registerPluginsAsync(),
    MangaModule,
    BullModule.forRoot({
      connection: {
        host: 'localhost',
        port: 6379,
      },
    }),
    BullBoardModule.forRoot({
      route: '/admin/queues',
      adapter: ExpressAdapter,
      boardOptions: {
        uiConfig: {
          boardTitle: 'Shinigami Queues',
        },
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '**', method: RequestMethod.ALL });
  }
}
