import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';

import { DesignerService } from '@app/@core/services';
import { NgxSpinnerService } from 'ngx-bootstrap-spinner';
import { ActivatedRoute, Data } from '@angular/router';
import { SitePage } from '@app/@core/models';

@Component({
	// selector: 'app-home',
	// changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './design.component.html',
	styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit, OnDestroy {
	constructor(
		private spinner: NgxSpinnerService,
		public designService: DesignerService,
		private route: ActivatedRoute,
		private render: Renderer2
	) {
		this.designService.HeaderNoMarginBottom = true;
		this.designService.NoScroll = true;
	}

	ngOnInit(): void {
		// this.render.addClass(document.body,"overflow-hidden");
		this.route.data.subscribe((x: Data) => {
			this.designService.CurrentPage = x.page as SitePage;
			console.log(this.designService.CurrentPage.Url);
		});
		// this.designService.onPageChanged.subscribe((x: SitePage) => this.spinner.show());
		// this.spinner.show();
	}

	ngOnDestroy(): void {
		this.designService.HeaderNoMarginBottom = false;
		this.designService.NoScroll = false;
		// this.render.removeClass(document.body,"overflow-hidden");
	}
	pageStartLoad(): void {
		this.spinner.show();
	}
	pageEndLoaded(): void {
		this.spinner.hide();
	}
}
