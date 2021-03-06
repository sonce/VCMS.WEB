import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouteReuseStrategy } from '@angular/router';

import { RouteReusableStrategy } from './route-reusable-strategy';
import { ApiPrefixInterceptor } from './http/api-prefix.interceptor';
import { ErrorHandlerInterceptor } from './http/error-handler.interceptor';

import { DesignerService, SitePageService, JwtService, TestService, ApiService } from './services';

@NgModule({
	// imports: [CommonModule, HttpClientModule, TranslateModule, RouterModule],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: ApiPrefixInterceptor,
			multi: true
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: ErrorHandlerInterceptor,
			multi: true
		},
		{
			provide: RouteReuseStrategy,
			useClass: RouteReusableStrategy
		},
		DesignerService,
		SitePageService,
		JwtService,
		TestService,
		ApiService
	]
})
export class CoreModule {
	constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
		// Import guard
		if (parentModule) {
			throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
		}
	}
}
