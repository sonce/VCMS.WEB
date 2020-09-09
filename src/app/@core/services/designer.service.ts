import { Injectable } from '@angular/core';
import { SitePage } from '../models';
import _ from 'lodash-es';

@Injectable()
export class DesignerService {
  /** 是否手机模式 */
  IsMobile = true;

  /** 当前页面ID */
  get CurrentPageId(): string {
    if (_.isNil(this.CurrentPage))
      return undefined;
    return this.CurrentPage.id;
  }

  /** 当前的站点 */
  SiteId: string = "1";

  CurrentPage: SitePage;

  /**
   * Header的margin-bottom=0
   */
  HeaderNoMarginBottom: boolean = false;

  /** 修改设计器的显示模式 */
  changeViewMode(isMobile: boolean) {
    this.IsMobile = isMobile;
  }
}
