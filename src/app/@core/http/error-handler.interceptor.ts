/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Logger } from '../logger.service';

const log = new Logger('ErrorHandlerInterceptor');

/**
 * Adds a default error handler to all requests.
 */
@Injectable({
	providedIn: 'root'
})
export class ErrorHandlerInterceptor implements HttpInterceptor {
	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return next.handle(request).pipe(
			catchError((error: HttpErrorResponse) => {
				return this.errorHandler(error);
			})
		);
	}

	// Customize the default error handler here if needed
	private errorHandler(response: HttpErrorResponse): Observable<HttpEvent<any>> {
		/*
        const { ok, error, status, statusText } = errorResponse;
        let { message = null } = error || {};

        if (ok) {
          return;
        }

        switch (status) {
          case 503:
            message = '服务器错误[503]';
            break;
          case 502:
            message = '服务器错误[502]';
            break;
          case 501:
            message = '服务器错误[501]';
            break;
          case 500:
            message = '服务器错误[500]';
            break;
          case 400:
            message = `请求参数错误[400]!(${message || statusText})`;
            break;
          case 401:
            message = `非法用户登录[401]!(${message || statusText})`;
            break;
          case 403:
            message = `没有访问权限[403]!(${message || statusText})`;
            break;
          case 404:
            message = `请求资源不存在[404]!(${message || statusText})`;
            break;
          case 415:
            message = `请求方式错误[415]!(${message || statusText})`;
            break;
          default:
            message = `未知错误[${status}]!(${message || statusText})`;
        }

        handleAlert.call(null, message);
        */
		if (!environment.production) {
			// Do something with the error
			log.error('Request error', response);
		}
		throw response;
	}
}
