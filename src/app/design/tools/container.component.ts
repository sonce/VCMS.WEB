import { Component } from '@angular/core';
import { HtmlDesignService } from './html-design.service';

@Component({
	selector: 'v-htmldesign-container',
	styleUrls: ['./hoverbox.component.scss'],
	template: ` <div
		class="container-hover-box"
		*ngIf="htmldeisngservice.InHover && htmldeisngservice.ContainerInfo"
		[ngStyle]="{
			left: htmldeisngservice.ContainerInfo.pos.left + 'px',
			top: htmldeisngservice.ContainerInfo.pos.top + 'px',
			width: htmldeisngservice.ContainerInfo.pos.width + 'px',
			height: htmldeisngservice.ContainerInfo.pos.height + 'px'
		}"
		data-bind="visible:inHover,style:{left:left,top:top,width:width,height:height},css:{draggable:canDrag,dragging:dragging}"
	></div>`
})
export class ContainerComponent {
	constructor(public htmldeisngservice: HtmlDesignService) {}
}
