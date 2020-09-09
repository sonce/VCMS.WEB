import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, Renderer2 } from '@angular/core';

import { DesignerService } from '@app/@core/services';
import _ from 'lodash-es';
import { NgxSpinnerService } from 'ngx-bootstrap-spinner';
import { ActivatedRoute } from '@angular/router';
import { SitePage } from '@app/@core/models';

@Component({
  selector: 'app-home',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss'],
})
export class DesignComponent implements OnInit, OnDestroy {
  constructor(
    private spinner: NgxSpinnerService,
    public designService: DesignerService,
    private route: ActivatedRoute,
    private render:Renderer2
  ) { }

  ngOnInit() {
    this.designService.HeaderNoMarginBottom = true;
    // this.render.addClass(document.body,"overflow-hidden");
    this.route.data.subscribe((x: any) => {
      this.designService.CurrentPage = x.page as SitePage;
    })
    // this.spinner.show();
  }

  ngOnDestroy() {
    this.designService.HeaderNoMarginBottom = false;
    // this.render.removeClass(document.body,"overflow-hidden");
  }
}
