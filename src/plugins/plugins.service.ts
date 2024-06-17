import { Injectable } from '@nestjs/common';
import { PluginFilterRequest } from 'src/plugins/dto/request.dto';
import { PluginsModule } from 'src/plugins/plugins.module';

@Injectable()
export class PluginsService {
  queryPlugins(): string[] {
    return PluginsModule.pluginsArray.map((plugin) => plugin.name);
  }
  async filterPlugins(pluginFilterRequest: PluginFilterRequest): Promise<string[]> {
    const Fuse = (await import('fuse.js')).default;
    const fuse = new Fuse(PluginsModule.pluginsArray, {
      keys: ['name', 'description'],
    });

    return fuse
      .search(pluginFilterRequest.keyword)
      .map((result) => result.item.name);
  }
}
