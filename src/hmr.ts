import { NgModuleRef, ApplicationRef } from '@angular/core';
import { createNewHosts } from '@angularclass/hmr';

// eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/explicit-module-boundary-types
export function hmrBootstrap(module: any, bootstrap: () => Promise<NgModuleRef<any>>): void {
	let ngModule: NgModuleRef<unknown>;
	module.hot.accept();

	bootstrap()
		.then((mod) => (ngModule = mod))
		.catch((err) => console.error(err));

	module.hot.dispose(() => {
		const appRef: ApplicationRef = ngModule.injector.get(ApplicationRef);
		const elements = appRef.components.map((c) => c.location.nativeElement);
		const makeVisible = createNewHosts(elements);
		ngModule.destroy();
		makeVisible();
	});
}
