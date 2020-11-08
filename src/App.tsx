import React, { useState } from 'react';
import { useTranslation, withTranslation } from 'react-i18next';
import { Route, Switch } from 'react-router-dom';
import { SideBar } from './components';
import { ISideBarItem } from './components/SideBar/SideBar.interfaces';
import { About, Home, ShowcaseButton } from './pages';

export const App = () => {
	const [name] = useState('Brosmos');
	const [menuItems] = useState<Array<ISideBarItem>>([{ label: 'Test' }]);

	// const { t, i18n } = useTranslation();

	// const changeLanguage = (lng) => {
	// 	i18n.changeLanguage(lng);
	// };

	return (
		<>
			<SideBar items={menuItems} />
			<ShowcaseButton />

			{/* <div className="p-2">
				<div>
					<h1>{t('welcomeMsg')}</h1>
					<button type="button" className="btn btn-secondary" onClick={() => changeLanguage('de')}>de</button>
					<button type="button" className="btn btn-secondary" onClick={() => changeLanguage('en')}>en</button>
				</div>

				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/about">
						<About />
					</Route>

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
