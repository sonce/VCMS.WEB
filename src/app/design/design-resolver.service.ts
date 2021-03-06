import { SitePage } from '@app/@core/models';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SitePageService } from '@app/@core/services';
import { map, tap, catchError } from 'rxjs/operators';
import _ from 'lodash-es';
import { Title } from '@angular/platform-browser';

@Injectable()
export class DesignResolver implements Resolve<SitePage> {
	constructor(private router: Router, private pageServiceService: SitePageService, private titleService: Title) {}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	resolve(route: ActivatedRouteSnapshot): Observable<any> {
		return this.pageServiceService.AllPages.pipe(map((x) => x.find((x) => x.id == route.params['slug'])))
			.pipe(
				tap((x) => {
					if (_.isNil(x)) throw new Error('No the page!');
					else {
						this.titleService.setTitle(x.name);
					}
				})
			)
			.pipe(catchError(() => this.router.navigateByUrl('/home')));
	}
}
