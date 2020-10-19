import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Logger, untilDestroyed } from '@core';
import { AuthenticationService } from './authentication.service';
import { Credentials } from './credentials.service';

const log = new Logger('Login');

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {
	version: string | null = environment.version;
	error: string | undefined;
	loginForm!: FormGroup;
	isLoading = false;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private formBuilder: FormBuilder,
		private authenticationService: AuthenticationService
	) {
		this.createForm();
	}

	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types,@typescript-eslint/no-empty-function
	ngOnDestroy() {}

	login(): void {
		this.isLoading = true;
		const login$ = this.authenticationService.login(this.loginForm.value);
		login$
			.pipe(
				finalize(() => {
					this.loginForm.markAsPristine();
					this.isLoading = false;
				}),
				untilDestroyed(this)
			)
			.subscribe(
				(credentials: Credentials) => {
					log.debug(`${credentials.username} successfully logged in`);
					this.router.navigate([this.route.snapshot.queryParams.redirect || '/'], { replaceUrl: true });
				},
				(error) => {
					log.debug(`Login error: ${error}`);
					this.error = error;
				}
			);
	}

	private createForm() {
		this.loginForm = this.formBuilder.group({
			username: ['', Validators.required],
			password: ['', Validators.required],
			remember: true
		});
	}
}
