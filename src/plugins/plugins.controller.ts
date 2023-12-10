import { Controller, Get, Param } from '@nestjs/common';
import { PluginsService } from 'src/plugins/plugins.service';

@Controller('plugins')
export class PluginsController {
  constructor(private readonly pluginsService: PluginsService) {}

  @Get()
  plugins(): string[] {
    return this.pluginsService.getPlugins();
  }
}
