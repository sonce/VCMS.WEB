import { Component } from '@angular/core';

@Component({
	selector: 'v-htmldesign-containerresizer',
	template: `<div class="container-resizers" data-bind="foreach:resizers">
		<div
			class="v-resizer"
			data-bind="style:{left:left,top:top,height:height},event: { mouseover: $root.hoverResizer.bind($data,event)}"
		>
			<div class="line"></div>
		</div>
	</div> `
})
export class ContainerResizerComponent {}
