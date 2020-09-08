import { Component, OnInit } from '@angular/core';

import { DesignerService } from '@app/@core/services';
import _ from 'lodash-es';
import { NgxSpinnerService } from 'ngx-bootstrap-spinner';
import { ActivatedRoute } from '@angular/router';
import { SitePage } from '@app/@core/models';

@Component({
  selector: 'app-home',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss'],
})
export class DesignComponent implements OnInit {
  constructor(
    private spinner: NgxSpinnerService,
    private designService: DesignerService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe((x: SitePage) => { this.designService.CurrentPageId = x.id; })
    // this.spinner.show();
  }
}
