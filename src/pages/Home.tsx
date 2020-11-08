import React from 'react';
import { Button } from '../shared/components/Button/Button';

export const Home = () => {
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
