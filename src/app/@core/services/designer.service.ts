import { Injectable } from '@angular/core';

@Injectable()
export class DesignerService {
  /** 是否手机模式 */
  IsMobile = true;

  /** 当前页面ID */
  CurrentPageId: string;

  /** 修改设计器的显示模式 */
  changeViewMode(isMobile: boolean) {
    this.IsMobile = isMobile;
  }
}
