import {
  Component,
  OnInit,
  Input,
  QueryList,
  EventEmitter,
  Output,
  AfterViewInit,
  ContentChildren,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core';
import { MultiLevelNavitemDirective } from './multilevelnavitem.directive';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-multilevelnavitem',
  encapsulation: ViewEncapsulation.None,
  // template: `<li #li class="dropdown"
  //             [class.dropdown]="!isSubMenu"
  //             [class.dropdown-submenu]="isSubMenu"
  //             [class.disabled]="!isMenuItemEnabled(menuItem)"
  //             [class.divider]="menuItem.divider" [class.dropdown-divider]="menuItem.divider"
  //             [class.active]="menuItem.isActive && isMenuItemEnabled(menuItem)"
  //             [class.dropdown-mega]="menuItem.passive"
  //             [attr.role]="menuItem.divider ? 'separator' : undefined">
  //               <a class="dropdown-item" [class.hasSubMenu]="!!menuItem.subMenu" href
  //               *ngIf="!menuItem.divider">
  //                 <ng-template [ngTemplateOutlet]="menuItem.template" [ngTemplateOutletContext]="{ $implicit: item }">
  //                 </ng-template>
  //               </a>
  //               <ul *ngIf="!!menuItem.subMenu" class="dropdown-menu">
  //                 <ng-container *ngFor="let childMenuItem of menuItem.subMenu.visibleNavItems; let i = index">
  //                   <ng-container *ngTemplateOutlet="li; context:{ $implicit: childMenuItem }"></ng-container>
  //                 </ng-container>
  //               </ul>
  //             </li>
  // `
  template: `
    <ng-template #li let-menuItem>
      <li
        class="dropdown"
        [class.dropdown]="!isSubMenu"
        [class.dropdown-submenu]="isSubMenu"
        [class.disabled]="!isMenuItemEnabled(menuItem)"
        [class.divider]="menuItem.divider"
        [class.dropdown-divider]="menuItem.divider"
        [class.active]="menuItem.isActive && isMenuItemEnabled(menuItem)"
        [class.dropdown-mega]="menuItem.passive"
        [attr.role]="menuItem.divider ? 'separator' : undefined"
      >
        <a class="dropdown-item" [class.hasSubMenu]="!!menuItem.subMenu" href *ngIf="!menuItem.divider">
          <ng-template [ngTemplateOutlet]="menuItem.template" [ngTemplateOutletContext]="{ $implicit: item }">
          </ng-template>
        </a>
        <ul *ngIf="!!menuItem.subMenu" class="dropdown-menu">
          <ng-container *ngFor="let childMenuItem of menuItem.subMenu.visibleNavItems; let i = index">
            <ng-template *ngTemplateOutlet="li; context: { $implicit: childMenuItem }"></ng-template>
          </ng-container>
        </ul>
      </li>
    </ng-template>
    <ng-container *ngTemplateOutlet="li; context: { $implicit: menuItem }"></ng-container>
  `,
})
export class MultiLevelNavItemComponent implements OnInit {
  @Input() public menuItem: MultiLevelNavitemDirective;
  @Input() public item: any;
  @Input() public isSubMenu: boolean = false;

  ngOnInit(): void {
    // this.navItems.forEach((navItem: NavItemDirective) => {
    //   navItem.currentItem = this.item;
    //   this.subscription.add(navItem.execute.subscribe((event: Event) => this.execute.emit({ ...event, navItem })));
    // });
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
}
