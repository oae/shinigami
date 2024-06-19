import { Controller, Get } from '@nestjs/common';
import { PluginsService } from 'src/plugins/plugins.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('Plugin')
@Controller('plugins')
export class PluginsController {
  constructor(private readonly pluginsService: PluginsService) {}

  @Get('query')
  queryPlugins(): string[] {
    return this.pluginsService.queryPlugins();
  }
}
