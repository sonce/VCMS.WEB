import { Injectable } from '@angular/core';

const credentialsKey = 'credentials';

export interface Credentials {
	// Customize received credentials here
	username: string;
	token: string;
}

@Injectable()
export class JwtService {
	private _credentials: Credentials | null = null;

	/**
	 * Checks is the user is authenticated.
	 * @return True if the user is authenticated.
	 */
	isAuthenticated(): boolean {
		return !!this.credentials;
	}
	/**
	 * Gets the user credentials.
	 * @return The user credentials or null if the user is not authenticated.
	 */
	get credentials(): Credentials | null {
		return this._credentials;
	}

	getToken(): string {
		return this.isAuthenticated() ? this._credentials.token : '';
	}

	/**
	 * Sets the user credentials.
	 * The credentials may be persisted across sessions by setting the `remember` parameter to true.
	 * Otherwise, the credentials are only persisted for the current session.
	 * @param credentials The user credentials.
	 * @param remember True to remember credentials across sessions.
	 */
	saveToken(credentials?: Credentials, remember?: boolean) {
		this._credentials = credentials || null;

		if (credentials) {
			const storage = remember ? localStorage : sessionStorage;
			storage.setItem(credentialsKey, JSON.stringify(credentials));
		} else {
			sessionStorage.removeItem(credentialsKey);
			localStorage.removeItem(credentialsKey);
		}
	}

	destroyToken() {
		this.saveToken();
	}
}
