import { Injectable } from '@nestjs/common';
import { PluginsModule } from 'src/plugins/plugins.module';

@Injectable()
export class PluginsService {
  queryPlugins(): string[] {
    return PluginsModule.pluginsArray.map((plugin) => plugin.name);
  }
}
