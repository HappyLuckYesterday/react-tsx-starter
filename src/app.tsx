import React, { useState } from "react";
import { Route, Switch, Link } from "react-router-dom";
import { Menu } from './components/Menu';
import { Home } from './pages/Home';
import { About } from './pages/About';

export const App = () => {
	const [name] = useState('React Starter Template');

	return (
		<>
			<Menu title={name} />

			<div className="p-2">
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/about">
						<About />
					</Route>
					<Route render={() => <div>Miss</div>} />
				</Switch>
			</div>
		</>
	);
};
