/*
 * Extra typings definitions
 */

// Allow .json files imports
declare module '*.json';

// SystemJS module definition
// eslint-disable-next-line no-var
declare var module: NodeModule;

// declare let module: NodeModule;
interface NodeModule {
	id: string;
}
interface Window {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	define: (name: string, deps: string[], definitionFn: () => any) => void;

	System: {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		import: (path) => Promise<any>;
	};
}
