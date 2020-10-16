import { Injectable } from '@angular/core';
import { SitePage } from '../models';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { tap, map, shareReplay } from 'rxjs/operators';
import _ from 'lodash-es';
import { DesignerService } from './designer.service';

@Injectable()
export class SitePageService {
  /**
   * 首页
   */
  HomePage: SitePage;

  private cacheSitePages$: Observable<Array<SitePage>>;
  get AllPages() {
    if (!this.cacheSitePages$) {
      this.cacheSitePages$ = this.getPages(this.designService.SiteId).pipe(shareReplay(1));
    }
    return this.cacheSitePages$;
  }

  constructor(private apiService: ApiService, private designService: DesignerService) {}

  /**
   * 获取网站页面
   * @param siteId 网站ID
   */
  private getPages(siteId: string): Observable<SitePage[]> {
    return this.apiService
      .get<SitePage[]>('/sites/getpages', { id: siteId })
      .pipe(
        tap((item) => {
          this.HomePage = item.find((x) => x.IsHomePage);
        })
      );
  }

  getPagesTree(): Observable<SitePage[]> {
    return this.AllPages.pipe(
      map((pages) => {
        let sortByOrder = _.sortBy<SitePage>(pages, (page) => page.Order);
        let groupResult = _.groupBy<SitePage>(sortByOrder, (page) => page.ParentId);
        Object.keys(groupResult).forEach((key) => {
          if (key != '0' && key != '') {
            const parentPage = pages.find((x) => x.id == key);
            groupResult[key].forEach((x) => (x.ParentPage = parentPage));
            parentPage.children = groupResult[key];
          }
        });
        return groupResult[0];
      })
    );
  }

  updateHomePage(sitePage: SitePage) {
    this.HomePage.IsHomePage = false;
    this.HomePage = sitePage;
    this.HomePage.IsHomePage = true;
  }
}
