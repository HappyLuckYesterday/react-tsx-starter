import React, { useEffect } from 'react';
import { COLOR } from '../component.enums';

interface IAppBarProps {
	children: React.ReactNode;
	color?: COLOR;
}

export const AppBar = ({
	children,
	color = COLOR.primary,
}: IAppBarProps) => {

	useEffect(() => {
		console.warn('init');
	}, []);

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(`navbar navbar-expand`);
		cssClasses.push(`bg-${color}`);
		return cssClasses.join(' ');
	};

	return (
		<nav className={getCssClasses()}>
			{children}
		</nav>
	);
};
