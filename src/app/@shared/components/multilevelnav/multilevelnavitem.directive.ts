/* eslint-disable @typescript-eslint/no-explicit-any */
import { ElementRef, EventEmitter, Input, Output, Directive, TemplateRef } from '@angular/core';

@Directive({
	/* tslint:disable:directive-selector-type */
	selector: '[multiLevelNavItem]'
	/* tslint:enable:directive-selector-type */
})
export class MultiLevelNavitemDirective {
	@Input() public fullTemplate = false;
	@Input() public subMenu: any;
	@Input() public divider = false;
	@Input() public enabled: boolean | ((item: any) => boolean) = true;
	@Input() public passive = false;
	@Input() public visible: boolean | ((item: any) => boolean) = true;
	@Output() public execute: EventEmitter<{ event: Event; item: any }> = new EventEmitter();

	public currentItem: any;
	public isActive = false;
	public get disabled(): boolean {
		return this.passive || this.divider || !this.evaluateIfFunction(this.enabled, this.currentItem);
	}

	constructor(public template: TemplateRef<{ item: any }>, public elementRef: ElementRef) {}

	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	public evaluateIfFunction(value: any, item: any): any {
		if (value instanceof Function) {
			return value(item);
		}
		return value;
	}

	public setActiveStyles(): void {
		this.isActive = true;
	}
	public setInactiveStyles(): void {
		this.isActive = false;
	}

	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	public triggerExecute(item: any, $event?: MouseEvent | KeyboardEvent): void {
		if (!this.evaluateIfFunction(this.enabled, item)) {
			return;
		}
		this.execute.emit({ event: $event, item });
	}

	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	public isMenuItemVisible(menuItem: MultiLevelNavitemDirective, item: any): boolean {
		return this.evaluateIfFunction(menuItem.visible, item);
	}
}
