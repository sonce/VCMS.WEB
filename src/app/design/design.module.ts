import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-bootstrap-spinner';
import { DesignComponent } from './design.component';
import { DesignRoutingModule } from './design-routing.module';
import { DesignResolver } from './design-resolver.service';
import { PluginsConfigProvider } from '@app/services/plugins-config.provider';
import {
	HTMLDesignComponent,
	ContainerComponent,
	ContainerResizerComponent,
	ContentElementComponent,
	HtmlDesignService,
	RootContainerComponent
} from './tools';

@NgModule({
	imports: [CommonModule, TranslateModule, NgbModule, SharedModule, DesignRoutingModule, NgxSpinnerModule],
	declarations: [
		DesignComponent,
		HTMLDesignComponent,
		ContainerComponent,
		ContainerResizerComponent,
		ContentElementComponent,
		RootContainerComponent
	],
	providers: [DesignResolver, HtmlDesignService]
})
export class DesignModule {
	constructor(private provider: PluginsConfigProvider) {
		provider
			.loadConfig()
			.toPromise()
			.then((config) => {
				provider.config = config;
			});
	}
}
