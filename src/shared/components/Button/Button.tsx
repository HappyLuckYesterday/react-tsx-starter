import React, { useEffect } from 'react';
import { COLOR, VARIANT } from '../component.enums';

interface IButtonProps {
	block?: boolean;
	children: React.ReactNode;
	color?: COLOR;
	disabled?: boolean;
	isRounded?: boolean;
	isActive?: boolean;
	onClick?: (e: React.MouseEvent) => void;
	variant?: VARIANT;
}

export const Button = ({
	children,
	block,
	color = COLOR.primary,
	disabled,
	isRounded,
	isActive,
	onClick,
	variant
}: IButtonProps) => {

	useEffect(() => {
		console.warn('init');
	}, []);

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(`btn`);
		if (variant !== 'outline' && variant !== 'text') {
			cssClasses.push(`btn-${color}`);
		}
		if (variant === 'outline') {
			cssClasses.push(`btn-outline-${color}`);
		}
		if (variant === 'text') {
			cssClasses.push(`btn-link`);
			cssClasses.push(`btn-link-${color}`);
		}
		if (isRounded && variant !== 'text') {
			cssClasses.push(`rounded-pill`);
		}
		if (block) {
			cssClasses.push('btn-block');
		}
		if (isActive) {
			cssClasses.push('active');
		}
		return cssClasses.join(' ');
	};

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		onClick ? onClick(e) : undefined;
	};

	return (
		<button
			type="button"
			className={getCssClasses()}
			disabled={disabled}
			onClick={(e) => handleClick(e)}
		>
			{children}
		</button>
	);
};
