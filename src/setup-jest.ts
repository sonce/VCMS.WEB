import 'jest-preset-angular';

// global mocks for jsdom
const storageMock = () => {
	let storage: { [key: string]: string } = {};
	return {
		getItem: (key: string) => (key in storage ? storage[key] : null),
		setItem: (key: string, value: string) => (storage[key] = value || ''),
		removeItem: (key: string) => delete storage[key],
		clear: () => (storage = {})
	};
};

Object.defineProperty(window, 'localStorage', { value: storageMock() });
Object.defineProperty(window, 'sessionStorage', { value: storageMock() });
Object.defineProperty(window, 'getComputedStyle', {
	value: () => ['-webkit-appearance']
});

Object.defineProperty(document.body.style, 'transform', {
	value: () => {
		return {
			enumerable: true,
			configurable: true
		};
	}
});

Object.defineProperty(window, 'getComputedStyle', {
	value: () => ({
		getPropertyValue: () => {
			return '';
		}
	})
});

Object.defineProperty(window, 'matchMedia', {
	value: (query: unknown) => ({
		matches: false,
		media: query,
		onchange: null,
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		addListener: () => {},
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		removeListener: () => {}
	})
});

/* output shorter and more meaningful Zone error stack traces */
// Error.stackTraceLimit = 2;
