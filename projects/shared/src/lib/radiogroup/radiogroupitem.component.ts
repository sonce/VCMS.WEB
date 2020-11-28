import { Component, Input, ViewChild, TemplateRef, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'lib-radiogroup-item,[lib-radiogroup-item]',
	// encapsulation: ViewEncapsulation.None,
	template: `
		<ng-template #childComponentTemplate let-data>
			<div
				class="btn btn-secondary d-flex justify-content-center"
				[class.active]="data.value == value"
				(click)="onToggleCheck()"
			>
				<input type="radio" [name]="data.name" autocomplete="off" [value]="value" [ngModel]="data.value" />
				<div class="align-self-center">
					<ng-content></ng-content>
				</div>
			</div>
		</ng-template>
	`
})
export class RadiogroupItemComponent {
	@ViewChild('childComponentTemplate') childComponentTemplate: TemplateRef<unknown>;
	// name: string;
	@Input() value: unknown;

	@Output() public toggleCheck: EventEmitter<{
		source: RadiogroupItemComponent;
		value: unknown;
	}> = new EventEmitter();

	onToggleCheck(): void {
		this.toggleCheck.emit({ source: this, value: this.value });
	}
}
