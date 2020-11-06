import { Injectable, Type } from '@angular/core';
import { PluginLoaderService } from './plugin-loader.service';
import { PLUGIN_EXTERNALS_MAP } from './plugin-externals';
import { PluginsConfigProvider } from '../plugins-config.provider';
import { ObjectUtil } from 'js-dom-utility';

const SystemJs = window.System;

@Injectable()
export class ClientPluginLoaderService extends PluginLoaderService {
	constructor(private configProvider: PluginsConfigProvider) {
		super();
	}

	provideExternals(): void {
		Object.keys(PLUGIN_EXTERNALS_MAP).forEach((externalKey) => {
			window.define(externalKey, [], () => PLUGIN_EXTERNALS_MAP[externalKey]);
		});
	}

	load<T>(pluginName: string): Promise<Type<T>> {
		const { config } = this.configProvider;
		if (!config[pluginName]) {
			return Promise.reject(`Can't find ${pluginName} plugin`);
			// throw Error(`Can't find appropriate plugin`);
		}

		const depsPromises = (config[pluginName].deps || []).map((dep) => {
			return SystemJs.import(config[dep].path).then((m) => {
				window['define'](dep, [], () => m.default);
			});
		});

		if (typeof PLUGIN_EXTERNALS_MAP.shared === 'string') {
			depsPromises.push(
				SystemJs.import(PLUGIN_EXTERNALS_MAP.shared).then((m) => {
					PLUGIN_EXTERNALS_MAP.shared = m.default;
					window['define']('shared', [], () => m.default);
				})
			);
		}

		return Promise.all(depsPromises).then(() => {
			return SystemJs.import(config[pluginName].path).then((module) => {
				if (ObjectUtil.isNull(module.default.default.config))
					throw Error(`The Plugin ${pluginName} no Config:IAddon property`);

				(module.default.default.config as IAddon).OwnPlugin = config[pluginName];
				return module.default.default;
			});
		});
	}
}
