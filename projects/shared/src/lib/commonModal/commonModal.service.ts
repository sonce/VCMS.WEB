/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { CommonModalComponent } from './commonModal.component';

@Injectable()
export class CommonModalService {
	constructor(private modalService: NgbModal) {}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/explicit-module-boundary-types
	open(content: any, option?: NgbModalOptions & { dragable: boolean; title: string }): void {
		debugger;
		const modalRef = this.modalService.open(CommonModalComponent, option);
		const commonComponent = modalRef.componentInstance as CommonModalComponent;
		commonComponent.title = option.title;
		if (typeof content === 'string') {
			commonComponent.content = content;
		} else commonComponent.loadContent(content);
	}
}
