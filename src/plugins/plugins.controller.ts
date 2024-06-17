import { Body, Controller, Get, Post } from '@nestjs/common';
import { PluginsService } from 'src/plugins/plugins.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { PluginFilterRequest } from 'src/plugins/dto/request.dto';

@ApiTags('Plugin')
@Controller('plugins')
export class PluginsController {
  constructor(private readonly pluginsService: PluginsService) {}

  @Get('query')
  queryPlugins(): string[] {
    return this.pluginsService.queryPlugins();
  }

  @ApiBody({
    type: PluginFilterRequest,
    required: true,
    examples: {
      plugin: {
        summary: 'Plugin filter',
        description: 'Filter for a specific plugin',
        value: {
          keyword: 'test',
        },
      },
    },
  })
  @Post('filter')
  async filterPlugins(@Body() pluginFilterRequest: PluginFilterRequest) { 
    return this.pluginsService.filterPlugins(pluginFilterRequest); 
  }
}
