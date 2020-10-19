import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

let isBrowser: boolean;
let isServer: boolean;
let transferState: TransferState;

@Injectable({
	providedIn: 'root'
})
export class TransferStateService {
	constructor(private state: TransferState, @Inject(PLATFORM_ID) private platformId: unknown) {
		transferState = state;
		isBrowser = isPlatformBrowser(this.platformId);
		isServer = isPlatformServer(this.platformId);
	}
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const preserveServerState = (keyName: string, emptyResult = null): any => {
	const key = makeStateKey(keyName);
	return (target: unknown, propertyKey: string, descriptor: PropertyDescriptor) => {
		// eslint-disable-next-line @typescript-eslint/ban-types
		const method = descriptor.value as Function;
		descriptor.value = function () {
			if (isBrowser && transferState.hasKey(key)) {
				const state = transferState.get(key, emptyResult);
				return of(state);
			}

			// eslint-disable-next-line prefer-rest-params
			return method.apply(this, arguments).pipe(
				tap((res) => {
					if (isServer) {
						transferState.set(key, res);
					}
				})
			);
		};
	};
};
