import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import { App } from './App';
import './i18n/i18n';
import './style.scss';

render(
	<Suspense fallback={<div>Loading...</div>}>
		<Router>
			<App />
		</Router>
	</Suspense>,
	document.getElementById('app'),
);

// if (module.hot) {
// 	module.hot.accept();
// }
