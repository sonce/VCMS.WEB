import { Component, Input, ViewChild, TemplateRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'v-radiogroup-item,[v-radiogroup-item]',
  // encapsulation: ViewEncapsulation.None,
  template: `
    <ng-template #childComponentTemplate let-data>
      <div
        class="btn btn-secondary d-flex justify-content-center"
        [class.active]="data.value == value"
        (click)="toggleCheck()"
      >
        <input type="radio" [name]="data.name" autocomplete="off" [value]="value" [ngModel]="data.value" />
        <div class="align-self-center">
          <ng-content></ng-content>
        </div>
      </div>
    </ng-template>
  `,
})
export class RadiogroupItemComponent {
  @ViewChild('childComponentTemplate') childComponentTemplate: TemplateRef<any>;
  // name: string;
  @Input() value: any;

  @Output() public onToggleCheck: EventEmitter<{ source: RadiogroupItemComponent; value: any }> = new EventEmitter();

  constructor() {}

  toggleCheck() {
    this.onToggleCheck.emit({ source: this, value: this.value });
  }
}
