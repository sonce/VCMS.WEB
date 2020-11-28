import { Component } from '@angular/core';
import { HtmlDesignService } from './html-design.service';

@Component({
	selector: 'v-htmldesign-rootcontainer',
	styleUrls: ['./rootcontainer.component.scss'],
	template: `<div
		class="root-container-hover-box"
		*ngIf="htmldeisngservice.InHover && htmldeisngservice.RootContainerInfo as CurrentElementInfo"
		[ngStyle]="{
			left: CurrentElementInfo.pos.left + 'px',
			top: CurrentElementInfo.pos.top + 'px',
			width: CurrentElementInfo.pos.width + 'px',
			height: CurrentElementInfo.pos.height + 'px'
		}"
	>
		<div class="control-button-wrapper rootContainer" *ngIf="convertAddon(CurrentElementInfo.addon) as currentAddon">
			<div class="control-buttons">
				<div
					class="icon-page-section-control-button iconfont icon-exit"
					data-bind="attr: {title: tip },css:icon"
					title="退出"
					style="display: none"
				></div>

				<div
					class="icon-page-section-control-button iconfont icon-edit"
					(click)="currentAddon.config()"
					data-bind="attr: {title: tip },css:icon"
					title="编辑"
				></div>

				<div
					class="icon-page-section-control-button iconfont icon-level-up"
					(click)="currentAddon.moveup(CurrentElementInfo)"
					[hidden]="CurrentElementInfo.parent.inParentIndex == 0"
					data-bind="attr: {title: tip },css:icon"
					title="向上移"
				></div>

				<div
					class="icon-page-section-control-button iconfont icon-leveldown"
					(click)="currentAddon.movedown(CurrentElementInfo)"
					[hidden]="CurrentElementInfo.parent.inParentIndex == CurrentElementInfo.parent.childCount - 1"
					data-bind="attr: {title: tip },css:icon"
					title="向下移"
				></div>

				<div
					class="icon-page-section-control-button iconfont icon-del"
					data-bind="attr: {title: tip },css:icon"
					(click)="currentAddon.del(CurrentElementInfo)"
					title="删除容器100%"
				></div>
			</div>
		</div>
	</div>`
})
export class RootContainerComponent {
	constructor(public htmldeisngservice: HtmlDesignService) {}

	public convertAddon(
		eleInfo: IAddon
	): IAddon & {
		moveup: () => boolean;
		movedown: () => boolean;
		config: () => void;
	} {
		return eleInfo as IAddon & {
			moveup: () => boolean;
			movedown: () => boolean;
			config: () => void;
		};
	}
}
