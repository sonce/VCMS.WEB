import { Component, EventEmitter, Output } from '@angular/core';
import { Tab } from './tab.interface';

@Component({
	selector: 'lib-shared-tabs',
	templateUrl: './tabs.component.html',
	styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
	tabs: Tab[] = [];

	@Output() selected = new EventEmitter();

	addTab(tabComponent: Tab): void {
		if (!this.tabs.length) {
			tabComponent.hidden = false;
		}
		this.tabs.push(tabComponent);
	}

	selectTab(tabComponent: Tab): void {
		this.tabs.map((tab) => (tab.hidden = true));
		tabComponent.hidden = false;
		this.selected.emit(tabComponent);
	}
}
