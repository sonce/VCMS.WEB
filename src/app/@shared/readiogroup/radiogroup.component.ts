import { Component, OnInit, Input, ViewChild, ContentChildren, QueryList, ContentChild, TemplateRef, ElementRef, Renderer2, ViewChildren, AfterViewInit, ChangeDetectionStrategy, AfterContentInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { NgbDropdown, NgbDropdownItem, NgbDropdownMenu } from '@ng-bootstrap/ng-bootstrap';
import { Button } from 'protractor';
import { fromEvent, Observable, BehaviorSubject, Subject } from 'rxjs';
import { RadiogroupItemComponent } from './radiogroupitem.component';
import { RadioGroupOption } from './radiogroupitemoptions';
import _ from 'lodash-es';
import { map, takeUntil } from 'rxjs/operators';

type RadiogroupSkin = "bg" | "bg-radius"|"bottomline";
@Component({
  selector: 'v-radiogroup',
  template: `
            <div class="btn-group btn-group-toggle radio-toggle-group d-flex" [ngClass]="classes" data-toggle="buttons" *ngIf="isInit">
              <ng-template *ngFor="let r of radios; let i = index" [ngTemplateOutlet]="r.childComponentTemplate"
                [ngTemplateOutletContext]="{ $implicit: {name:name,value:value}}">
              </ng-template>
            </div>
              `,
  styleUrls: ['./radiogroup.component.scss'],
})
export class RadiogroupComponent implements OnInit, AfterContentInit, AfterViewInit, OnDestroy {
  @ContentChildren(RadiogroupItemComponent) radios: QueryList<RadiogroupItemComponent> = null

  @Input() name: string;
  @Input() value: string;

  @Input() set skin(val: RadiogroupSkin) {
    this.spinnerObservable.next(val);
  }
  get skin(): RadiogroupSkin {
    return this.spinnerObservable.value;
  }
  private spinnerObservable = new BehaviorSubject<RadiogroupSkin>('bg');
  classes: string[];
  /**
 * Unsubscribe from spinner's observable
 *
 * @memberof NgxSpinnerComponent
**/
  ngUnsubscribe: Subject<void> = new Subject();

  isInit: boolean = false;
  constructor(private changeDetector: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.getClasses().pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((x: string[]) => {
        debugger
        this.classes = x;
        this.changeDetector.markForCheck();
      })
  }

  ngAfterContentInit() {
  }

  ngAfterViewInit() {
    Promise.resolve(null).then(() => this.isInit = true);
    this.radios.forEach(x => x.onToggleCheck.subscribe(this.toggleCheck.bind(this)));
  }

  private getClasses(): Observable<string[]> {
    return this.spinnerObservable.asObservable().pipe(map(x => x.split('-')));
  }

  toggleCheck(data: { groupItem: RadiogroupItemComponent, value: string }) {
    this.value = data.value;
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
