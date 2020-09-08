import { Component, OnInit, Input, QueryList, EventEmitter, Output, AfterViewInit, ContentChildren, ChangeDetectionStrategy } from '@angular/core';
import { MultiLevelNavitemDirective } from './multilevelnavitem.directive';
import { Subscription } from 'rxjs';
import { MultiLevelNavChildComponent } from './multilevelnavchild.component';
import _ from 'lodash';

@Component({
  selector: 'app-multilevelnav',
  templateUrl: './multilevelnav.component.html',
  styleUrls: ['./multilevelnav.component.scss']
})
export class MultiLevelNavComponent implements OnInit, AfterViewInit {
  @ContentChildren(MultiLevelNavitemDirective) public queryListNavItems: QueryList<MultiLevelNavitemDirective>;
  /** 菜单纵向 */
  @Input() public isVertical: boolean = false;
  /** 没有边框线 */
  @Input() public noBorder:boolean=false;
  // @ContentChildren(MultiLevelNavChildComponent) public childs: QueryList<MultiLevelNavChildComponent>;
  @Input() public item: any;
  /**
   * 显示箭头
   */
  @Input() public showArrow:boolean;
  // @Output() public execute: EventEmitter<{ event: MouseEvent | KeyboardEvent, item: any, menuItem: MultiLevelNavitemDirective }>
  //   = new EventEmitter();
  get visibleNavItems() {
    let items = this.queryListNavItems.filter(x => x.isMenuItemVisible(x, this.item));
    return items;
  }
  // private subscription: Subscription = new Subscription();
  constructor() { }

  ngOnInit(): void {


  }

  ngAfterViewInit() {
    // this.childs.forEach((child: MultiLevelNavChildComponent) => {
    //   child.item = this.item;
    // });

    // this.queryListNavItems.forEach((navItem: MultiLevelNavitemDirective) => {
    //   navItem.currentItem = this.item;
    //   this.subscription.add(navItem.execute.subscribe((event: any) => this.execute.emit({ ...event, item: this.item, menuItem: navItem })));
    // });
  }

  public onMenuItemSelect(menuItem: MultiLevelNavitemDirective, event: MouseEvent | KeyboardEvent): void {
    event.preventDefault();
    event.stopPropagation();
    // this.onOpenSubMenu(menuItem, event);
    // if (!menuItem.subMenu) {
    menuItem.triggerExecute(this.item, event);
    // }
  }

  public isMenuItemEnabled(menuItem: MultiLevelNavitemDirective): boolean {
    return this.evaluateIfFunction(menuItem && menuItem.enabled);
  }

  public isMenuItemVisible(menuItem: MultiLevelNavitemDirective): boolean {
    return this.evaluateIfFunction(menuItem && menuItem.visible);
  }

  public evaluateIfFunction(value: any): any {
    if (value instanceof Function) {
      return value(this.item);
    }
    return value;
  }

  public convertToNavItemDirective(itemDirective: any): MultiLevelNavitemDirective {
    return itemDirective as MultiLevelNavitemDirective;
  }

}
