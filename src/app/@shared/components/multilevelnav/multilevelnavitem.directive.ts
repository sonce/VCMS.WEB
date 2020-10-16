import {
  ElementRef,
  EventEmitter,
  Input,
  Output,
  Directive,
  TemplateRef,
  ViewChild,
  AfterViewInit,
  AfterContentInit,
  ContentChild,
  ContentChildren,
  QueryList,
  ViewChildren,
  HostListener,
} from '@angular/core';

@Directive({
  /* tslint:disable:directive-selector-type */
  selector: '[multiLevelNavItem]',
  /* tslint:enable:directive-selector-type */
})
export class MultiLevelNavitemDirective {
  @Input() public fullTemplate: boolean = false;
  @Input() public subMenu: any;
  @Input() public divider = false;
  @Input() public enabled: boolean | ((item: any) => boolean) = true;
  @Input() public passive = false;
  @Input() public visible: boolean | ((item: any) => boolean) = true;
  @Output() public execute: EventEmitter<{ event: Event; item: any }> = new EventEmitter();

  public currentItem: any;
  public isActive = false;
  public get disabled() {
    return this.passive || this.divider || !this.evaluateIfFunction(this.enabled, this.currentItem);
  }

  constructor(public template: TemplateRef<{ item: any }>, public elementRef: ElementRef) {}

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

  public triggerExecute(item: any, $event?: MouseEvent | KeyboardEvent): void {
    if (!this.evaluateIfFunction(this.enabled, item)) {
      return;
    }
    this.execute.emit({ event: $event, item });
  }

  public isMenuItemVisible(menuItem: MultiLevelNavitemDirective, item: any): boolean {
    return this.evaluateIfFunction(menuItem.visible, item);
  }
}
