import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { AppContext } from '../AppContext';
import { ButtonCounter } from '../components/ButtonCounter/ButtonCounter';
import { Button } from '../shared/components/Button/Button';

export const Home = () => {

	const { loggerService, httpService, languageService } = React.useContext(AppContext);
	const { t } = useTranslation();

	const changeLanguage = (lang: string) => {
		loggerService.debug('changeLanguage', lang);
		languageService.setLang(lang);
	};

	useEffect(() => {
		// TODO - move to sidebar
		httpService.get('./public/test.json').then(d => console.warn(d)).catch(err => console.warn(err));
	}, []);

	return (
		<div>
			<h2>Home</h2>
			<h1>{t('welcomeMsg')}</h1>

			<button type="button" className="btn btn-secondary" onClick={() => changeLanguage('de')}>de</button>
			<button type="button" className="btn btn-secondary" onClick={() => changeLanguage('en')}>en</button>

			<ButtonCounter name="some name" />

			<ul>
				<li>Different Components (Basic, Interactive, Functional)</li>
				<li>React Router Dom</li>
				<li>Twitter Bootstrap</li>
			</ul>

			<Button onClick={() => alert('clicked')}>
				click me
			</Button>
		</div>
	);
};
