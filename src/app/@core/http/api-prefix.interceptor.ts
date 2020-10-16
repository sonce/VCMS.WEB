import { Injectable, SkipSelf, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import { JwtService, TestService } from '../services';
import { filter, tap } from 'rxjs/operators';
import { Logger } from '../logger.service';

const log = new Logger('ApiPrefixInterceptor');

/**
 * Prefixes all requests not starting with `http[s]` with `environment.serverUrl`.
 */
@Injectable({
  providedIn: 'root',
})
export class ApiPrefixInterceptor implements HttpInterceptor {
  constructor(private jwtService: JwtService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headersConfig = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    const token = this.jwtService.getToken();
    if (token) {
      headersConfig['Authorization'] = `Token ${token}`;
    }

    let requestUrl = request.url;
    if (!/^(http|https):/i.test(request.url)) {
      requestUrl = environment.serverUrl + requestUrl;
    }

    request = request.clone({ setHeaders: headersConfig, url: requestUrl });

    return next.handle(request).pipe(
      filter((event) => event instanceof HttpResponse),
      tap((event: HttpResponse<any>) => {})
    );
  }
}
