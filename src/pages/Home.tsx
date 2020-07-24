import React from 'react';
import { ButtonCounter } from '../components/ButtonCounter/ButtonCounter';

export const Home = () => {
	const handleClick = () => {
		console.warn('button clicked');
	};

	return (
		<div>
			<h2>Home</h2>
			<ul>
				<li>Different Components (Basic, Interactive, Functional)</li>
				<li>React Router Dom</li>
				<li>Twitter Bootstrap</li>
			</ul>

			<ButtonCounter name="Hello ButtonCounter" onClick={handleClick} />

		</div>
	);
};
