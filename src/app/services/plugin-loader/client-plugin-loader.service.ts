import { Injectable, Type } from '@angular/core';
import { PluginLoaderService } from './plugin-loader.service';
import { PLUGIN_EXTERNALS_MAP } from './plugin-externals';
import { PluginsConfigProvider } from '../plugins-config.provider';

const SystemJs = window.System;

@Injectable()
export class ClientPluginLoaderService extends PluginLoaderService {
	constructor(private configProvider: PluginsConfigProvider) {
		super();
	}

	provideExternals(): void {
		Object.keys(PLUGIN_EXTERNALS_MAP).forEach((externalKey) => {
			debugger;
			window.define(externalKey, [], () => PLUGIN_EXTERNALS_MAP[externalKey]);
		});
	}

	load<T>(pluginName: string): Promise<Type<T>> {
		const { config } = this.configProvider;
		if (!config[pluginName]) {
			throw Error(`Can't find appropriate plugin`);
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
			return SystemJs.import(config[pluginName].path).then((module) => module.default.default);
		});
	}
}