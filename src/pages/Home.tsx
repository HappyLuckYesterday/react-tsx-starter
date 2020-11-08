import React, { useEffect } from 'react';
import { AppContext } from '../AppContext';
import { Button } from '../shared/components/Button/Button';

export const Home = () => {

	const { httpService } = React.useContext(AppContext);

	useEffect(() => {
		// TODO - move to sidebar
		httpService.get('./public/test.json').then(d => console.warn(d)).catch(err => console.warn(err));
	}, []);

	return (
		<div>
			<h2>Home</h2>
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
