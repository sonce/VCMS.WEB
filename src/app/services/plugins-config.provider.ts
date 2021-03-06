import { Inject, Injectable, Optional, PLATFORM_ID } from '@angular/core';
import { preserveServerState } from './transfer-state.service';
import { isPlatformBrowser } from '@angular/common';
import { Observable } from 'rxjs';
import { ApiService } from '@app/@core/services';
import { tap } from 'rxjs/operators';

interface PluginsConfig {
	[key: string]: PluginConfig;
}

@Injectable()
export class PluginsConfigProvider {
	config: PluginsConfig;

	constructor(
		private apiService: ApiService,
		// eslint-disable-next-line @typescript-eslint/ban-types
		@Inject(PLATFORM_ID) private platformId: {},
		@Inject('APP_BASE_URL') @Optional() private readonly baseUrl: string
	) {
		if (isPlatformBrowser(platformId)) {
			this.baseUrl = document.location.origin;
		}
	}

	@preserveServerState('PLUGIN_CONFIGS')
	loadConfig(): Observable<PluginsConfig> {
		return this.apiService
			.get<PluginsConfig>(`${this.baseUrl}/assets/plugins/plugins-config.json`, null, {
				ignoreCheck: true
			})
			.pipe(
				tap((config: PluginsConfig) => {
					const pluginsName: string[] = Object.getOwnPropertyNames(config);
					pluginsName.forEach((pname) => {
						config[pname].name = pname;
					});
				})
			);
		// return this.http.get<PluginsConfig>(`${this.baseUrl}/assets/plugins-config.json`);
	}
}
