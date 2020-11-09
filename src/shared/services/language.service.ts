import i18n from '../../i18n/i18n';

export class LanguageService {
	// TODO
	init() {

	}

	setLang(lang: string) {
		i18n.changeLanguage(lang);
	}

	getLang(): string {
		return i18n.language;
	}
}
