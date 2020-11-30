import { Component, ComponentFactoryResolver, Injector, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	template: ` <div class="modal-header">
			<h4 class="modal-title">{{ title }}</h4>
			<button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
				<span aria-hidden="true">&times;</span>
			</button>
		</div>
		<div class="modal-body">
			<ng-template #contentHtml>
				{{ content }}
			</ng-template>
			<ng-template #content></ng-template>
			<ng-container *ngTemplateOutlet="showHtml ? contentHtml : content"></ng-container>
		</div>
		<div class="modal-footer">
			<button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Save click')">Ok</button>
		</div>`
})
export class CommonModalComponent {
	@ViewChild('content', { static: true, read: ViewContainerRef }) vcRef: ViewContainerRef;
	@Input() showHtml = true;
	@Input() content = 'Loading content...';
	@Input() title = '';

	constructor(
		public activeModal: NgbActiveModal,
		private factoryResolver: ComponentFactoryResolver,
		private injector: Injector
	) {}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/explicit-module-boundary-types
	loadContent(content: any): void {
		this.showHtml = false;
		const compFactory = this.factoryResolver.resolveComponentFactory(content);
		this.vcRef.createComponent(compFactory, undefined, this.injector);
	}
}
