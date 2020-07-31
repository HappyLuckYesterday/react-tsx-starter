import React from 'react';

interface IButtonProps {
	children: React.ReactNode;
}

export const Button = ({ children }: IButtonProps) => {

	const getCssClasses = () => {
		return '';
	};

	const disabled = false;

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		alert(e);
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
