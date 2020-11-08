
import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';
import { Route, Switch } from 'react-router-dom';
import { AppContext } from './AppContext';
import { ISideBarItem, SideBar } from './components';
import { About, Home, ShowcaseButton } from './pages';
import { AppBar, HttpService, LoggerService } from './shared';

export const App = () => {
	const [name] = useState('Brosmos');
	const [menuItems] = useState<Array<ISideBarItem>>([{ label: 'Test' }]);

	const services = {
		httpService: new HttpService(),
		loggerService: new LoggerService()
	}

	// const { t, i18n } = useTranslation();

	// const changeLanguage = (lng) => {
	// 	i18n.changeLanguage(lng);
	// };

	return (
		<AppContext.Provider value={services}>

			<AppBar>
				<div className="container">
					<a className="navbar-brand">{name}</a>
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

		</AppContext.Provider>
	);
};

export default withTranslation()(App);
