import { Get, Inject, Injectable, Logger } from '@nestjs/common';
import { PluginsModule } from 'src/plugins/plugins.module';

@Injectable()
export class PluginsService {
  getPlugins(): string[] {
    return PluginsModule.pluginsArray.map((plugin) => plugin.name);
  }
}
