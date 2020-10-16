import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService, CredentialsService } from '@app/auth';
import { DesignerService } from '@app/@core/services';
import { SitePagesDropdownComponent } from '../components';
import { SitePage } from '@app/@core/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuHidden = true;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private credentialsService: CredentialsService,
    public designerService: DesignerService
  ) {}

  ngOnInit() {}

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  logout() {
    this.authenticationService.logout().subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
  }

  get username(): string | null {
    const credentials = this.credentialsService.credentials;
    return credentials ? credentials.username : null;
  }

  SelectPageChanged(sitePage: SitePage) {
    this.router.navigate(['/design/' + sitePage.id]);
  }

  changeViewMode(val: any) {
    this.designerService.IsMobile = val;
  }
  togglePreview() {
    this.designerService.InDesign = !this.designerService.InDesign;
  }
}
