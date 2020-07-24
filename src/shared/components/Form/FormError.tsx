import React from 'react';
// import PropTypes from 'prop-types';

export const FormError = ({ className = 'invalid-feedback', errors = [] }) => {
	return (
		<>
			{
				errors &&
				<div className={className}>
					{errors.map(e => <div key={e.validator}>{e.message}</div>)}
				</div>
			}
		</>
	);
};

// FormError.propTypes = {
// 	className: PropTypes.string,
// 	errors: PropTypes.arrayOf(
// 		PropTypes.shape({
// 			validator: PropTypes.string,
// 			message: PropTypes.string
// 		})
// 	)
// };
