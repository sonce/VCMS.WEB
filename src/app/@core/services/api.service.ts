import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpHeaders, HttpClient, HttpParams, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import _ from 'lodash-es';

import { catchError, switchMap, tap } from 'rxjs/operators';

export interface IResponseBody<T = any> {
  code: number;
  message: string;
  data: T;
}

export interface IHttpClientServiceOptions {
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  observe?: 'response' | 'events' | 'body';
  params?:
    | HttpParams
    | {
        [param: string]: string | string[];
      };
  reportProgress?: boolean;
  responseType?: 'json' | 'arraybuffer' | 'blob' | 'text' | 'arraybuffer';
  withCredentials?: boolean;
  /** 不检查API的数据格式 */
  ignoreCheck?: boolean;
  ignoreErrorCheck?: boolean;
  timeStamp?: boolean;
}

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  private formatErrors(error: any) {
    return throwError(error.error);
  }

  get<T = any>(path: string, data?: object, options?: IHttpClientServiceOptions): Observable<T | null> {
    let params = new HttpParams();
    if (_.isObjectLike(data)) {
      Object.keys(data).forEach((key) => {
        params = params.append(`${key}`, `${data[key]}`);
      });
    }

    const isUseTimeStamp = _.get(options, 'timeStamp');
    if ((isUseTimeStamp !== false && !environment.production) || isUseTimeStamp === true) {
      // 开发环境默认添加时间戳
      params = params.append('_t', new Date().getTime().toString());
    }

    let currentOptions = _.merge(
      {
        reportProgress: true,
        observe: 'events' as 'events',
        responseType: 'json' as 'json',
        withCredentials: false,
        params: params,
      },
      options
    );
    return this.http.get(`${path}`, currentOptions).pipe(
      switchMap((response: HttpResponse<IResponseBody>) => {
        if (_.get(options, 'ignoreCheck')) {
          return of(response.body.data);
        }

        return ApiService.handleSuccess<T>(response.body, this.errorMsg);
      })
    );
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(`${path}`, JSON.stringify(body)).pipe(catchError(this.formatErrors));
  }

  post<T = any>(path: string, data?: Object, options?: IHttpClientServiceOptions): Observable<T | null> {
    return this.http
      .post(
        `${path}`,
        data,
        _.merge(
          {
            reportProgress: true,
            observe: 'response' as 'response',
            responseType: 'json' as 'json',
            withCredentials: false,
          },
          options
        )
      )
      .pipe(
        switchMap((response: HttpResponse<IResponseBody>) => {
          if (_.get(options, 'ignoreCheck')) {
            return of(response.body.data);
          }

          return ApiService.handleSuccess<T>(response.body, this.errorMsg);
        })
      );
  }

  delete(path: string): Observable<any> {
    return this.http.delete(`${path}`).pipe(catchError(this.formatErrors));
  }

  static handleSuccess<T = any>(response: IResponseBody, handleAlert = alert): Observable<T | null> {
    // 此处根据你项目后端返回数据结构自行修改
    if (!(_.has(response, 'message') && _.has(response, 'code'))) {
      handleAlert.call(null, '服务器数据格式错误！');
      return of(null);
    }

    if (response.code !== 0) {
      handleAlert.call(null, response.message || '请求成功，但服务器遭遇未知错误！');
      return of(null);
    }

    return of(response.data);
  }

  errorMsg(msg: string, times = 2000) {
    // 此处使用你项目使用UI库的弹窗提示错误信息
  }
}
