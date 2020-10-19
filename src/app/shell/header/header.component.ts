import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService, CredentialsService } from '@app/auth';
import { DesignerService } from '@app/@core/services';
import { SitePage } from '@app/@core/models';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	menuHidden = true;
	constructor(
		private router: Router,
		private authenticationService: AuthenticationService,
		private credentialsService: CredentialsService,
		public designerService: DesignerService
	) {}

	toggleMenu(): void {
		this.menuHidden = !this.menuHidden;
	}

	logout(): void {
		this.authenticationService.logout().subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
	}

	get username(): string | null {
		const credentials = this.credentialsService.credentials;
		return credentials ? credentials.username : null;
	}

	SelectPageChanged(sitePage: SitePage): void {
		this.router.navigate(['/design/' + sitePage.id]);
	}

	changeViewMode(val: boolean): void {
		this.designerService.IsMobile = val;
	}
	togglePreview(): void {
		this.designerService.InDesign = !this.designerService.InDesign;
	}
}
