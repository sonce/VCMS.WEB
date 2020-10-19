import { Component } from '@angular/core';
import { DesignerService } from '@app/@core/services';

@Component({
	selector: 'app-shell',
	templateUrl: './shell.component.html',
	styleUrls: ['./shell.component.scss']
})
export class ShellComponent {
	constructor(public designerService: DesignerService) {}
}
