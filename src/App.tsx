import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { withTranslation, useTranslation } from "react-i18next";
import { Menu } from './components';
import { Home, About, FormsSimple, FormsService } from './pages';

export const App = () => {
	const [name] = useState('React Starter Template');

	const { t, i18n } = useTranslation();

	const changeLanguage = lng => {
		i18n.changeLanguage(lng);
	};

	return (
		<>
			<Menu title={name} />

			<div>
				<h1>{t("welcomeMsg")}</h1>
				<button onClick={() => changeLanguage("de")}>de</button>
				<button onClick={() => changeLanguage("en")}>en</button>
			</div>

			<div className="p-2">
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/about">
						<About />
					</Route>
					<Route exact path="/forms-simple">
						<FormsSimple />
					</Route>
					<Route exact path="/forms-service">
						<FormsService />
					</Route>

					<Route render={() => <div>404 - Missing!</div>} />
				</Switch>
			</div>
		</>
	);
};

export default withTranslation()(App);
