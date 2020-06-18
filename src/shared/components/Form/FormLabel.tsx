import React from 'react';

export const FormLabel = ({ children, className, htmlFor }) => {
	return (
		<label htmlFor={htmlFor} className={className}>
			{children}
		</label>
	);
};
