import { TestBed } from '@angular/core/testing';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Subject } from 'rxjs';

import { extract, I18nService } from './i18n.service';

const defaultLanguage = 'en-US';
const supportedLanguages = ['eo', 'en-US', 'fr-FR'];

class MockTranslateService {
	currentLang = '';
	onLangChange = new Subject();

	use(language: string) {
		this.currentLang = language;
		this.onLangChange.next({
			lang: this.currentLang,
			translations: {}
		});
	}

	getBrowserCultureLang() {
		return 'en-US';
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-function
	setTranslation(lang: string, translations: unknown, shouldMerge?: boolean) {}
}

describe('I18nService', () => {
	let i18nService: I18nService;
	let translateService: TranslateService;
	let onLangChangeSpy: jasmine.Spy;
	const oldResetTestingModule = TestBed.resetTestingModule;

	beforeAll((done) =>
		(async () => {
			TestBed.resetTestingModule();

			TestBed.configureTestingModule({
				providers: [I18nService, { provide: TranslateService, useClass: MockTranslateService }]
			});

			i18nService = TestBed.inject(I18nService);
			translateService = TestBed.inject(TranslateService);

			// Create spies
			onLangChangeSpy = jasmine.createSpy('onLangChangeSpy');
			translateService.onLangChange.subscribe((event: LangChangeEvent) => {
				onLangChangeSpy(event.lang);
			});
			spyOn(translateService, 'use').and.callThrough();

			TestBed.resetTestingModule = () => TestBed;
		})()
			.then(done)
			.catch(done.fail)
	);

	afterEach(() => {
		// Cleanup
		localStorage.removeItem('language');
	});

	afterAll(() => {
		TestBed.resetTestingModule = oldResetTestingModule;
		TestBed.resetTestingModule();
	});

	describe('extract', () => {
		it('should not modify string', () => {
			expect(extract('Hello world !')).toEqual('Hello world !');
		});
	});

	describe('init', () => {
		it('should init with default language', () => {
			// Act
			i18nService.init(defaultLanguage, supportedLanguages);

			// Assert
			expect(translateService.use).toHaveBeenCalledWith(defaultLanguage);
			expect(onLangChangeSpy).toHaveBeenCalledWith(defaultLanguage);
		});

		it('should init with save language', () => {
			// Arrange
			const savedLanguage = 'eo';
			localStorage.setItem('language', savedLanguage);

			// Act
			i18nService.init(defaultLanguage, supportedLanguages);

			// Assert
			expect(translateService.use).toHaveBeenCalledWith(savedLanguage);
			expect(onLangChangeSpy).toHaveBeenCalledWith(savedLanguage);
		});
	});

	describe('set language', () => {
		it('should change current language', () => {
			// Arrange
			const newLanguage = 'eo';
			i18nService.init(defaultLanguage, supportedLanguages);

			// Act
			i18nService.language = newLanguage;

			// Assert
			expect(translateService.use).toHaveBeenCalledWith(newLanguage);
			expect(onLangChangeSpy).toHaveBeenCalledWith(newLanguage);
		});

		it('should change current language without a region match', () => {
			// Arrange
			const newLanguage = 'fr-CA';
			i18nService.init(defaultLanguage, supportedLanguages);

			// Act
			i18nService.language = newLanguage;

			// Assert
			expect(translateService.use).toHaveBeenCalledWith('fr-FR');
			expect(onLangChangeSpy).toHaveBeenCalledWith('fr-FR');
		});

		it('should change current language to default if unsupported', () => {
			// Arrange
			const newLanguage = 'es';
			i18nService.init(defaultLanguage, supportedLanguages);

			// Act
			i18nService.language = newLanguage;

			// Assert
			expect(translateService.use).toHaveBeenCalledWith(defaultLanguage);
			expect(onLangChangeSpy).toHaveBeenCalledWith(defaultLanguage);
		});
	});

	describe('get language', () => {
		it('should return current language', () => {
			// Arrange
			i18nService.init(defaultLanguage, supportedLanguages);

			// Act
			const currentLanguage = i18nService.language;

			// Assert
			expect(currentLanguage).toEqual(defaultLanguage);
		});
	});
});
