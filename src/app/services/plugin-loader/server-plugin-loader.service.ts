import { Injectable } from '@angular/core';
import { PluginLoaderService } from './plugin-loader.service';
import { PLUGIN_EXTERNALS_MAP } from './plugin-externals';
import { PluginsConfigProvider } from '../plugins-config.provider';
import { ObjectUtil } from 'js-dom-utility';

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

	load(pluginName: string): Promise<{ ownPlugin: PluginConfig; entry: IAddon }> {
		const { config } = this.configProvider;
		if (!config[pluginName]) {
			// throw Error(`Can't find appropriate plugin`);
			return Promise.reject(`Can't find appropriate plugin`);
		}

		const factory = global['require'](`./browser${config[pluginName].path}`).default;
		if (ObjectUtil.isNull(factory.entry)) throw Error('The Plugin no entry:IAddon property');
		factory.ownPlugin = config[pluginName];
		return Promise.resolve(factory);
	}
}
