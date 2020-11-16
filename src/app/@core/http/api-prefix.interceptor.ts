import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import { JwtService } from '../services';
import { filter } from 'rxjs/operators';
import { Logger } from '../logger.service';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const log = new Logger('ApiPrefixInterceptor');

/**
 * Prefixes all requests not starting with `http[s]` with `environment.serverUrl`.
 */
@Injectable({
	providedIn: 'root'
})
export class ApiPrefixInterceptor implements HttpInterceptor {
	constructor(private jwtService: JwtService) {}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const headersConfig = {};

		const token = this.jwtService.getToken();
		if (token) {
			headersConfig['Authorization'] = `Token ${token}`;
		}

		let requestUrl = request.url;
		if (!/^(http|https):/i.test(request.url)) {
			requestUrl = environment.serverUrl + requestUrl;
		}

		request = request.clone({ setHeaders: headersConfig, url: requestUrl });

		return next.handle(request).pipe(filter((event) => event instanceof HttpResponse));
	}
}
