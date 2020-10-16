import { Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient, HttpRequest } from '@angular/common/http';

import { environment } from '@env/environment';
import { ApiPrefixInterceptor } from './api-prefix.interceptor';
import { JwtService } from '../services';

describe('ApiPrefixInterceptor', () => {
  let http: HttpClient;
  let httpMock: HttpTestingController;
  const oldResetTestingModule = TestBed.resetTestingModule;

  beforeAll((done) =>
    (async () => {
      TestBed.resetTestingModule();

      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [
          JwtService,
          {
            provide: HTTP_INTERCEPTORS,
            useClass: ApiPrefixInterceptor,
            multi: true,
          },
        ],
      });

      http = TestBed.inject(HttpClient);
      httpMock = TestBed.inject(HttpTestingController as Type<HttpTestingController>);

      // prevent Angular from resetting testing module
      TestBed.resetTestingModule = () => TestBed;
    })()
      .then(done)
      .catch(done.fail)
  );

  afterEach(() => {
    httpMock.verify();
  });

  it('should prepend environment.serverUrl to the request url', () => {
    // Act
    http.get('/toto').subscribe();
    // Assert
    httpMock.expectOne({ url: environment.serverUrl + '/toto' });
  });

  it('should not prepend environment.serverUrl to request url', () => {
    // Act
    http.get('hTtPs://domain.com/toto').subscribe();

    // Assert
    httpMock.expectOne((req: HttpRequest<any>) => req.url.includes('hTtPs://domain.com/toto'));
  });

  afterAll(() => {
    TestBed.resetTestingModule = oldResetTestingModule;
    TestBed.resetTestingModule();
  });
});
