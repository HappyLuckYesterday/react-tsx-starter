
import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';
import { Route, Switch } from 'react-router-dom';
import { AppContext } from './AppContext';
import { ISideBarItem, SideBar } from './components';
import { About, Home, ShowcaseButton } from './pages';
import { AppBar, HttpService, LoggerService } from './shared';
import { LanguageService } from './shared/services/language.service';

export const App = () => {
	const [name] = useState('Brosmos');
	const [menuItems] = useState<Array<ISideBarItem>>([{ label: 'Test' }]);

	const context = {
		httpService: new HttpService(),
		loggerService: new LoggerService(),
		languageService: new LanguageService()
	}

	return (
		<AppContext.Provider value={context}>

			<AppBar>
				<a className="navbar-brand">{name}</a>
			</AppBar>

			<div className="main">
				<SideBar items={menuItems} />

				<Switch>
					<Route exact path="/"><Home /></Route>

					<Route
						path="/components"
						render={({ match: { url } }) => (
							<>
								<Route path={`${url}/button`} component={ShowcaseButton} exact />
							</>
						)}
					/>

					<Route exact path="/about"><About /></Route>
					<Route render={() => <div>404 - Missing!</div>} />
				</Switch>

			</div>
		</AppContext.Provider>
	);
};

export default withTranslation()(App);
