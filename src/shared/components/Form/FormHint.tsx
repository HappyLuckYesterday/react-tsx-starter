import React from 'react';

export const FormHint = ({ hint, className = "form-text text-muted" }) => {
	return <small className={className}>{hint}</small>;
}
