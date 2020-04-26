import React from 'react';
import PropTypes from 'prop-types';

export const FormGroup = ({ children, className = 'form-group' }) => {
	return (
		<div className={className}>
			{children}
		</div>
	);
};

FormGroup.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired,
	className: PropTypes.string
};
