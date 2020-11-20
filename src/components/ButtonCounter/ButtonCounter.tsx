import React, { useState } from 'react';


interface IButtonCounterProps {
	name: string;
	onClicked?: (e: number) => void;
}

export const ButtonCounter = ({ name, onClicked }: IButtonCounterProps) => {
	const [count, setCount] = useState(0)

	const handleClick = () => {
		setCount(count + 1);
		onClicked && onClicked(count);
	}

	return (
		<button onClick={() => handleClick()} className='btn btn-outline-secondary'>
			{name} - You clicked me {count} times
		</button>
	);
}
