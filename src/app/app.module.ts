import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { environment } from '@env/environment';
import { CoreModule } from '@core';
import { SharedModule } from '@shared';
import { AuthModule } from '@app/auth';
import { HomeModule } from './home/home.module';
import { ShellModule } from './shell/shell.module';
import { AboutModule } from './about/about.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PluginLoaderService } from './services/plugin-loader/plugin-loader.service';
import { ClientPluginLoaderService } from './services/plugin-loader/client-plugin-loader.service';
import { PluginsConfigProvider } from './services/plugins-config.provider';
// import { DesignModule } from './design/design.module';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserTransferStateModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    TranslateModule.forRoot(),
    FormsModule,
    NgbModule,
    CoreModule,
    SharedModule,
    ShellModule,
    HomeModule,
    AboutModule,
    AuthModule,
    // DesignModule,
    AppRoutingModule, // must be imported as the last module as it contains the fallback route
  ],
  declarations: [AppComponent],
  providers: [
    { provide: PluginLoaderService, useClass: ClientPluginLoaderService },
    PluginsConfigProvider,
    {
      provide: APP_INITIALIZER,
      useFactory: (provider: PluginsConfigProvider) => () =>
        provider
          .loadConfig()
          .toPromise()
          .then((config) => (provider.config = config)),
      multi: true,
      deps: [PluginsConfigProvider],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
