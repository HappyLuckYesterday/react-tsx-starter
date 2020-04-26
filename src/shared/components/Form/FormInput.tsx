import React from 'react';
import PropTypes from 'prop-types';

export const FormInput = ({
	value,
	name,
	type,
	placeholder,
	className = "form-control",
	isValid,
	options = [],
	textareaOptions,
	autoFocus,
	onChange,
	onBlur
}) => {

	return (
		<>
			{/*
				'multiselect' |
				'autocomplete' |
				'checkboxgroup' |
				'toggle' */}

			{
				(
					type === 'text' ||
					type === 'date' ||
					type === 'email' ||
					type === 'number' ||
					type === 'password' ||
					type === 'color' ||
					type === 'time' ||
					type === 'file'
				)

				&&

				<input
					id={name}
					name={name}
					type={type}
					className={className + (!isValid ? " is-invalid" : "")}
					value={value}
					autoComplete="new-password"
					autoFocus={autoFocus}
					onChange={onChange}
					onBlur={onBlur}
					placeholder={placeholder}
				/>
			}

			{type === 'textarea' &&
				<textarea
					id={name}
					name={name}
					className={className + (!isValid ? " is-invalid" : "")}
					value={value}
					autoFocus={autoFocus}
					onChange={onChange}
					placeholder={placeholder}
					rows={textareaOptions.rows}
					style={textareaOptions.resize !== false ? null : { resize: 'none' }}
				/>
			}

			{type === 'select' ?
				<select
					id={name}
					name={name}
					className={className + (!isValid ? " is-invalid" : "")}
					value={value}
					autoFocus={autoFocus}
					onChange={onChange}
				>
					<option value="">choose</option>
					{options.map((option, index) =>
						<option key={index} value={option.value}>
							{option.label}
						</option>
					)}
				</select>
				: undefined}

			{type === 'checkbox' ?
				<input
					id={name}
					name={name}
					type="checkbox"
					className={className + (!isValid ? " is-invalid" : "")}
					onChange={onChange}
					checked={value}
				/>
				: undefined}

			{type === 'radio' ?
				<>
					{options.map((option, index) =>
						<div className="form-check" key={index}>
							<input
								id={option.id}
								name={name}
								type="radio"
								className="form-check-input"
								onChange={onChange}
								value={option.value}
								checked={value === option.value}
							/>
							<label className="form-check-label" htmlFor={option.id}>
								{option.label}
							</label>
						</div>
					)}
				</>
				: undefined}

		</>
	);
};


FormInput.propTypes = {
	value: PropTypes.string,
	name: PropTypes.string,
	type: PropTypes.string,
	placeholder: PropTypes.string,
	className: PropTypes.string,
	isValid: PropTypes.bool,
	options: PropTypes.array,
	autoFocus: PropTypes.bool,
	onChange: PropTypes.func,
	onBlur: PropTypes.func
};
