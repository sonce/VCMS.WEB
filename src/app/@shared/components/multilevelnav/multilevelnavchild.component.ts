import { Component, OnInit, ContentChildren, QueryList, ViewEncapsulation, Input } from '@angular/core';
import { MultiLevelNavitemDirective } from './multilevelnavitem.directive';
@Component({
  selector: 'app-multilevelnavchild',
  encapsulation: ViewEncapsulation.None,
  template: `<ng-content></ng-content>`,
})
export class MultiLevelNavChildComponent {
  @ContentChildren(MultiLevelNavitemDirective) public queryListNavItems: QueryList<MultiLevelNavitemDirective>;
  get visibleNavItems() {
    let items = this.queryListNavItems.filter((x) => x.isMenuItemVisible(x, this.item));
    return items;
  }
  @Input() public item: any;
}
