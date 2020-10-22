import { Component, Input, QueryList, ContentChildren } from '@angular/core';
import { MultiLevelNavitemDirective } from './multilevelnavitem.directive';

@Component({
	selector: 'app-multilevelnav',
	templateUrl: './multilevelnav.component.html',
	styleUrls: ['./multilevelnav.component.scss']
})
export class MultiLevelNavComponent {
	@ContentChildren(MultiLevelNavitemDirective)
	public queryListNavItems: QueryList<MultiLevelNavitemDirective>;
	/** 菜单纵向 */
	@Input() public isVertical = false;
	/** 没有边框线 */
	@Input() public noBorder = false;
	// @ContentChildren(MultiLevelNavChildComponent) public childs: QueryList<MultiLevelNavChildComponent>;
	@Input() public item: MultiLevelNavitemDirective;
	/**
	 * 显示箭头
	 */
	@Input() public showArrow: boolean;
	// @Output() public execute: EventEmitter<{ event: MouseEvent | KeyboardEvent, item: any, menuItem: MultiLevelNavitemDirective }>
	//   = new EventEmitter();
	get visibleNavItems(): MultiLevelNavitemDirective[] {
		const items = this.queryListNavItems.filter((x) => x.isMenuItemVisible(x, this.item));
		return items;
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

	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types,@typescript-eslint/no-explicit-any
	public evaluateIfFunction(value: any): any {
		if (value instanceof Function) {
			return value(this.item) as boolean;
		}
		return value;
	}

	public convertToNavItemDirective(itemDirective: MultiLevelNavitemDirective): MultiLevelNavitemDirective {
		return itemDirective as MultiLevelNavitemDirective;
	}
}
