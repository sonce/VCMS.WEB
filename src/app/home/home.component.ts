import {
	Component,
	ComponentFactoryResolver,
	Injector,
	OnInit,
	Type,
	ViewChild,
	ViewContainerRef
} from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';
import { SitePage } from '@app/@core/models';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { MultiLevelNavitemDirective } from '@app/@shared';
import { NgxSpinnerService } from 'ngx-bootstrap-spinner';
import { PluginLoaderService } from '@app/services/plugin-loader/plugin-loader.service';
import { TestService } from 'shared';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
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
		private cfr: ComponentFactoryResolver,
		private ts: TestService
	) {}

	data = { name: 'love' };

	ngOnInit(): void {
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

	toggleWithGreeting(popover: NgbPopover, greeting: string, language: string): void {
		if (popover.isOpen()) {
			popover.close();
		} else {
			popover.open({ greeting, language });
		}
	}

	test(info: string): void {
		alert(info);
	}

	testExcute(event: {
		event: MouseEvent | KeyboardEvent;
		item: { name: string };
		menuItem: MultiLevelNavitemDirective;
	}): void {
		console.log('Hi, ' + event.item.name);
	}

	loadPlugin(pluginName: string): void {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		this.pluginLoader.load(pluginName).then((moduleType: any) => {
			const entry = moduleType.config as IAddon;
			const componentFactory = this.cfr.resolveComponentFactory(entry.indexComponent as Type<unknown>);
			this.vcRef.createComponent(componentFactory, undefined, this.injector);
		});
	}
}
