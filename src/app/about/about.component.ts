import { Component } from '@angular/core';

import { environment } from '@env/environment';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss']
})
export class AboutComponent {
	version: string | null = environment.version;
}
