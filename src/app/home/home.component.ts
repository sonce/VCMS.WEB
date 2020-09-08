import { Component, OnInit } from '@angular/core';
import { finalize, tap, map } from 'rxjs/operators';

import { QuoteService } from './quote.service';
import { SitePageService } from '@app/@core/services';
import { SitePage } from '@app/@core/models';
import _ from 'lodash';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { MultiLevelNavitemDirective } from '@app/@shared';
import { NgxSpinnerService } from 'ngx-bootstrap-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  quote: string | undefined;

  SitePages: SitePage[]
  constructor(private quoteService: QuoteService,
    private spinner: NgxSpinnerService
  ) { }

  data = { name: 'love' }

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


  testExcute(event: { event: MouseEvent | KeyboardEvent, item: any, menuItem: MultiLevelNavitemDirective }) {
    console.log('Hi, ' + event.item.name)
  }
}
