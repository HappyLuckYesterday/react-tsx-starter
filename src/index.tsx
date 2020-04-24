import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from "react-router-dom";

import { App } from './App';
import './style.scss';

render(
	<Router>
		<App />
	</Router>,
	document.getElementById("root")
);

if (module.hot) {
	module.hot.accept();
}
