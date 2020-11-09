import i18n from '../../i18n/i18n';

export class LanguageService {
	constructor() {
		// TODO - use with own context?
		i18n.on('languageChanged', (lang) => {
			console.warn('languageChanged', lang);
		});
	}

	// TODO
	init() {
		// i18n.addResource()
	}

	setLang(lang: string) {
		i18n.changeLanguage(lang);
	}

	getLang(): string {
		return i18n.language;
	}

	translate(key: string) {
		return i18n.t(key);
	}
}
