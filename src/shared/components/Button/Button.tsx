import React from 'react';

interface IButtonProps {
	children: React.ReactNode;
	onClick?: (e: React.MouseEvent) => void;
}

export const Button = ({ children, onClick }: IButtonProps) => {

	const getCssClasses = () => {
		return '';
	};

	const disabled = false;

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		onClick(e);
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
