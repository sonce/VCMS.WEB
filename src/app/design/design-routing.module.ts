import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesignComponent } from './design.component';
import { Shell } from '@app/shell/shell.service';
import { DesignResolver } from './design-resolver.service';

const routes: Routes = [
	Shell.childRoutes([
		{
			path: ':slug',
			component: DesignComponent,
			resolve: {
				page: DesignResolver
			}
		}
	])
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DesignRoutingModule {}
