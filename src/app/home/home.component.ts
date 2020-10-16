import { Component, ComponentFactoryResolver, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { finalize, tap, map } from 'rxjs/operators';

import { QuoteService } from './quote.service';
import { SitePage } from '@app/@core/models';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { MultiLevelNavitemDirective } from '@app/@shared';
import { NgxSpinnerService } from 'ngx-bootstrap-spinner';
import { PluginLoaderService } from '@app/services/plugin-loader/plugin-loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  quote: string | undefined;

  SitePages: SitePage[];
  @ViewChild('targetRef', { read: ViewContainerRef, static: true })
  vcRef: ViewContainerRef;

  constructor(
    private quoteService: QuoteService,
    private spinner: NgxSpinnerService,
    private injector: Injector,
    private pluginLoader: PluginLoaderService,
    private cfr: ComponentFactoryResolver
  ) {}

  data = { name: 'love' };

  ngOnInit() {
    this.spinner.show();
    this.quoteService
      .getRandomQuote({ category: 'dev' })
      .pipe(
        finalize(() => {
          this.spinner.hide();
        })
      )
      .subscribe((quote: string) => {
        this.quote = quote;
      });
  }

  toggleWithGreeting(popover: NgbPopover, greeting: string, language: string) {
    if (popover.isOpen()) {
      popover.close();
    } else {
      popover.open({ greeting, language });
    }
  }

  test(info: string) {
    alert(info);
  }

  testExcute(event: { event: MouseEvent | KeyboardEvent; item: any; menuItem: MultiLevelNavitemDirective }) {
    console.log('Hi, ' + event.item.name);
  }

  loadPlugin(pluginName: string) {
    this.pluginLoader.load(pluginName).then((moduleType: any) => {
      const entry = moduleType.entry;
      const componentFactory = this.cfr.resolveComponentFactory(entry);
      this.vcRef.createComponent(componentFactory, undefined, this.injector);
    });
  }
}
