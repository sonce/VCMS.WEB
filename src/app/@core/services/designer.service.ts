import { Injectable, EventEmitter } from '@angular/core';
import { SitePage } from '../models';
import _ from 'lodash-es';

@Injectable()
export class DesignerService {
  /** 是否手机模式 */
  IsMobile = false;
  /** 是否在设计 */
  InDesign = true;
  /** 当前页面ID */
  get CurrentPageId(): string {
    if (_.isNil(this.CurrentPage)) return undefined;
    return this.CurrentPage.id;
  }

  /** 当前的站点 */
  SiteId: string = '1';

  /** 当页面改变 */
  onPageChanged: EventEmitter<SitePage> = new EventEmitter();
  private currentPage: SitePage;
  /** 当前页面 */
  get CurrentPage(): SitePage {
    return this.currentPage;
  }
  /** 当前页面 */
  set CurrentPage(val: SitePage) {
    this.currentPage = val;
    this.onPageChanged.emit(this.currentPage);
  }

  /**
   * Header的margin-bottom=0
   */
  HeaderNoMarginBottom: boolean = false;

  /**
   * 不显示滚动条
   */
  NoScroll: boolean = false;

  /** 修改设计器的显示模式 */
  changeViewMode(isMobile: boolean) {
    this.IsMobile = isMobile;
  }
}
