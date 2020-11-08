import React, { useState } from 'react';
import { useTranslation, withTranslation } from 'react-i18next';
import { Route, Switch } from 'react-router-dom';
import { SideBar } from './components';
import { ISideBarItem } from './components/SideBar/SideBar.interfaces';
import { About, Home, ShowcaseButton } from './pages';
import { AppBar } from './shared/components/AppBar/AppBar';

export const App = () => {
	const [name] = useState('Brosmos');
	const [menuItems] = useState<Array<ISideBarItem>>([{ label: 'Test' }]);

	// const { t, i18n } = useTranslation();

	// const changeLanguage = (lng) => {
	// 	i18n.changeLanguage(lng);
	// };

	return (
		<>
			<AppBar>
				<div className="container">
					<a className="navbar-brand">
						asdf
						</a>
				</div>
			</AppBar>

			<div className="main">
				<SideBar items={menuItems} />

				<Switch>
					<Route exact path="/">
						<Home />
					</Route>

					<Route
						path="/components"
						render={({ match: { url } }) => (
							<>
								<Route path={`${url}/button`} component={ShowcaseButton} exact />
							</>
						)}
					/>

					<Route exact path="/about">
						<About />
					</Route>

					<Route render={() => <div>404 - Missing!</div>} />
				</Switch>

			</div>

			{/* <div className="p-2">
				<div>
					<h1>{t('welcomeMsg')}</h1>
					<button type="button" className="btn btn-secondary" onClick={() => changeLanguage('de')}>de</button>
					<button type="button" className="btn btn-secondary" onClick={() => changeLanguage('en')}>en</button>
				</div>

				<Switch>
					<Route
						path="/showcase"
						render={({ match: { url } }) => (
							<>
								<Route path={`${url}/`} component={ShowcaseButton} exact />
							</>
						)}
					/>

					<Route render={() => <div>404 - Missing!</div>} />
				</Switch>
			</div> */}
		</>
	);
};

export default withTranslation()(App);
