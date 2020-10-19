import { TestBed } from '@angular/core/testing';

type CompilerOptions = Partial<{
	providers: unknown[];
	useJit: boolean;
	preserveWhitespaces: boolean;
}>;
export type ConfigureFn = (testBed: typeof TestBed) => void;

export const configureTests = (configure: ConfigureFn, compilerOptions: CompilerOptions = {}): Promise<unknown> => {
	const compilerConfig: CompilerOptions = {
		preserveWhitespaces: false,
		...compilerOptions
	};

	const configuredTestBed = TestBed.configureCompiler(compilerConfig);

	configure(configuredTestBed);

	return configuredTestBed.compileComponents().then(() => configuredTestBed);
};
