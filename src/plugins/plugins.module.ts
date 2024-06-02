import { DynamicModule, Global, Logger, Module } from '@nestjs/common';
import * as fs from 'fs';
import { JSDOM } from 'jsdom';
import * as path from 'path';
import { PluginsService } from 'src/plugins/plugins.service';
import OAuth from 'oauth-1.0a';
import { PluginsController } from 'src/plugins/plugins.controller';

export const PLUGIN_PATH = path.normalize(
  path.join(process.cwd(), 'dist/src/plugins/connectors'),
);

@Global()
@Module({})
export class PluginsModule {
  public static pluginsArray: Plugin[] = [];

  public static async registerPluginsAsync(): Promise<DynamicModule> {
    const dom = new JSDOM('<!DOCTYPE html>');
    const { document } = dom.window;
    globalThis.document = document;
    const EngineRequest = (await import('./engine/Request.mjs')).default;
    const Blacklist = (await import('./engine/Blacklist.mjs')).default;
    const Settings = (await import('./engine/Settings.mjs')).default;
    const Storage = (await import('./engine/Storage.mjs')).default;
    const er = new EngineRequest();
    await er.setup();
    (globalThis as any).OAuth = OAuth;
    (globalThis as any).Engine = {
      Request: er,
      Blacklist: new Blacklist(),
      Settings: new Settings(),
      Storage: new Storage(),
    };
    return this.loadPlugins();
  }

  private static loadPlugins(): Promise<DynamicModule> {
    Logger.log(`Loading plugins from ${PLUGIN_PATH}`, 'loadPlugins');
    const loadedPlugins: unknown[] = [];
    this.searchPluginsInFolder(PLUGIN_PATH).forEach((filePath) => {
      loadedPlugins.push(
        this.loadPlugin(filePath).then((module) => {
          return {
            module,
            name: path.basename(filePath, path.extname(filePath)),
          };
        }),
      );
    });

    return Promise.all(loadedPlugins).then((allPlugins: any[]) => {
      if (allPlugins.length > 0) {
        allPlugins.forEach(({ module, name }) => {
          Logger.log(`Plugin '${name}' loaded`, 'LoadPlugins');
          this.pluginsArray.push({
            name,
            module: module.default,
          });
        });
      }
      const result = {
        module: PluginsModule,
        controllers: [PluginsController],
        providers: [
          PluginsService,
          ...PluginsModule.pluginsArray.map((plugin) => ({
            provide: plugin.name,
            useValue: plugin.module,
          })),
        ],
        exports: [
          PluginsService,
          ...PluginsModule.pluginsArray.map((plugin) => ({
            provide: plugin.name,
            useValue: plugin.module,
          })),
        ],
      } as DynamicModule;

      return result;
    });
  }

  private static loadPlugin(pluginPath: string): Promise<DynamicModule> {
    return import(pluginPath);
  }

  private static searchPluginsInFolder(folder: string): string[] {
    return this.recFindByExt(folder, 'mjs');
  }

  private static recFindByExt(
    base: string,
    ext: string,
    files?: string[],
    result?: string[],
  ): any[] {
    files = files || fs.readdirSync(base);
    result = result || [];

    files.forEach((file) => {
      const newbase = path.join(base, file);
      if (fs.statSync(newbase).isDirectory()) {
        result = this.recFindByExt(
          newbase,
          ext,
          fs.readdirSync(newbase),
          result,
        );
      } else {
        if (file.substr(-1 * (ext.length + 1)) === '.' + ext) {
          if (result) {
            result.push(newbase);
          }
        }
      }
    });
    return result;
  }
}

export interface PluginConfig {
  name: string;
  version: string;
  description: string;
  file: string;
  entryClass: string;
}

interface Plugin {
  name: string;
  module: DynamicModule;
}
