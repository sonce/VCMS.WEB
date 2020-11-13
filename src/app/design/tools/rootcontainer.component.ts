import { Component } from '@angular/core';
import { HtmlDesignService } from './html-design.service';

@Component({
	selector: 'v-htmldesign-rootcontainer',
	styleUrls: ['./rootcontainer.component.scss'],
	template: `<div
		class="root-container-hover-box"
		*ngIf="htmldeisngservice.InHover && htmldeisngservice.RootContainerInfo"
		[ngStyle]="{
			left: htmldeisngservice.RootContainerInfo.pos.left + 'px',
			top: htmldeisngservice.RootContainerInfo.pos.top + 'px',
			width: htmldeisngservice.RootContainerInfo.pos.width + 'px',
			height: htmldeisngservice.RootContainerInfo.pos.height + 'px'
		}"
	>
		<div class="control-button-wrapper rootContainer" data-bind="visible:shown">
			<div class="control-buttons">
				<div
					class="icon-page-section-control-button iconfont icon-exit"
					data-bind="click:handle.bind($data,event,$root),clickBubble: false,visible:shown,attr: {title: tip },css:icon"
					title="退出"
					style="display: none"
				></div>

				<div
					class="icon-page-section-control-button iconfont icon-edit"
					data-bind="click:handle.bind($data,event,$root),clickBubble: false,visible:shown,attr: {title: tip },css:icon"
					title="编辑"
				></div>

				<div
					class="icon-page-section-control-button iconfont icon-level-up"
					data-bind="click:handle.bind($data,event,$root),clickBubble: false,visible:shown,attr: {title: tip },css:icon"
					title="向上移"
				></div>

				<div
					class="icon-page-section-control-button iconfont icon-leveldown"
					data-bind="click:handle.bind($data,event,$root),clickBubble: false,visible:shown,attr: {title: tip },css:icon"
					title="向下移"
				></div>

				<div
					class="icon-page-section-control-button iconfont icon-del"
					data-bind="click:handle.bind($data,event,$root),clickBubble: false,visible:shown,attr: {title: tip },css:icon"
					title="删除容器100%"
				></div>
			</div>
		</div>
	</div>`
})
export class RootContainerComponent {
	constructor(public htmldeisngservice: HtmlDesignService) {}
}
