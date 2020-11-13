import { Component } from '@angular/core';
import { HtmlDesignService } from './html-design.service';

@Component({
	selector: 'v-htmldesign-contentelement',
	styleUrls: ['./hoverbox.component.scss'],
	template: `
		<div
			class="hover-box components-background-color components-ui-color-orange"
			*ngIf="htmldeisngservice.InHover && htmldeisngservice.ContainerInfo"
			[ngStyle]="{
				left: htmldeisngservice.ContainerInfo.pos.left + 'px',
				top: htmldeisngservice.ContainerInfo.pos.top + 'px',
				width: htmldeisngservice.ContainerInfo.pos.width + 'px',
				height: htmldeisngservice.ContainerInfo.pos.height + 'px'
			}"
			[ngClass]="{ draggable: htmldeisngservice.ContainerInfo.addon.CanDrag }"
			data-bind="css:{resizable:canResize}"
		>
			<span
				class="component-labels label-small label-top"
				data-bind="css:{dragable:canDrag,'label-top':labelIsTop,'label-bottom':!labelIsTop()}"
			>
				<span
					style="width: 130px; word-wrap: break-word; display: block"
					class="text-truncate text-center text-capitalize"
					>{{ htmldeisngservice.ContentElementInfo.type }}
				</span>
				<div class="card-actions">
					<a
						(click)="htmldeisngservice.delElement($event, htmldeisngservice.ContentElementInfo, true)"
						class="card-action iconfont icon-del"
						*ngIf="htmldeisngservice.ContentElementInfo.addon.CanDel"
						title="{{ ('Del' | translate) + htmldeisngservice.ContentElementInfo.addon.Title }}"
					></a>
				</div>
			</span>

			<span class="top-resize top-resize-cursor handle handle-resize-side top" data-bind="visible:resizeTop"></span>
			<span
				class="bottom-resize bottom-resize-cursor handle handle-resize-side bottom"
				data-bind="visible:resizeBottom"
			></span>
			<span class="left-resize left-resize-cursor handle handle-resize-side left" data-bind="visible:resizeLeft"></span>
			<span
				class="right-resize right-resize-cursor handle handle-resize-side right"
				data-bind="visible:resizeRight"
			></span>

			<span
				class="top-resize left-resize top-left-resize-cursor handle handle-resize-corner top left"
				data-bind="visible:resizeTopLeft"
			></span>
			<span
				class="top-resize right-resize top-right-resize-cursor handle handle-resize-corner top right"
				data-bind="visible:resizeTopRight"
			></span>
			<span
				class="bottom-resize left-resize bottom-left-resize-cursor handle handle-resize-corner bottom left"
				data-bind="visible:resizeBottomLeft"
			></span>
			<span
				class="bottom-resize right-resize bottom-right-resize-cursor handle handle-resize-corner bottom right"
				data-bind="visible:resizeBottomRight"
			></span>

			<ng-container *ngIf="htmldeisngservice.ContentElementInfo.addon.CanDrag">
				<div class="dragHandle top"></div>
				<div class="dragHandle bottom"></div>
				<div class="dragHandle left"></div>
				<div class="dragHandle right"></div>
			</ng-container>
		</div>
	`
})
export class ContentElementComponent {
	constructor(public htmldeisngservice: HtmlDesignService) {}
}
