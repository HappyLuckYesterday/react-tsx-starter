import React, { useState } from "react";
import { ButtonCounter } from './components/ButtonCounter';

export const App = () => {
	const [name] = useState('Hello React Button');

	const onChildClicked = (e) => {
		console.warn("callback from parent triggered", e);
	};

	return (
		<div>
			<p>Simple React Typescript Starter</p>
			<ButtonCounter
				name={name}
				onClicked={e => onChildClicked(e)}
			/>
		</div>
	);
};
