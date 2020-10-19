import { Injectable, NgModuleFactory } from '@angular/core';
import { PluginLoaderService } from './plugin-loader.service';
import { PLUGIN_EXTERNALS_MAP } from './plugin-externals';
import { PluginsConfigProvider } from '../plugins-config.provider';

declare let global: unknown;

@Injectable()
export class ServerPluginLoaderService extends PluginLoaderService {
	constructor(private configProvider: PluginsConfigProvider) {
		super();
	}

	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	provideExternals() {
		const self = this;
		const Module = global['require']('module');
		const originalRequire = Module.prototype.require;
		Module.prototype.require = function (name: string) {
			if (self.configProvider.config[name]) {
				return global['require'](`./browser${self.configProvider.config[name].path}`);
			}
			// eslint-disable-next-line prefer-rest-params
			return PLUGIN_EXTERNALS_MAP[name] || originalRequire.apply(this, arguments);
		};
	}

	load<T>(pluginName: string): Promise<NgModuleFactory<T>> {
		const { config } = this.configProvider;
		if (!config[pluginName]) {
			throw Error(`Can't find appropriate plugin`);
		}

		const factory = global['require'](`./browser${config[pluginName].path}`).default;
		return Promise.resolve(factory);
	}
}
