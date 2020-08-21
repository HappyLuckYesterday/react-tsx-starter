import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { IsEmptyValidator } from './validators/IsEmptyValidator';
import { EmailValidator } from './validators/EmailValidtor';
import { FormLabel } from './FormLabel';
import { FormGroup } from './FormGroup';
import { FormInput } from './FormInput';
import { FormHint } from './FormHint';
import { FormError } from './FormError';

export const Form = ({ controls, validateOnBlur, onSubmit, renderSubmitButton, renderResetButton }) => {
	const [isFormValid, setIsFormValid] = useState(false);
	const [fields, setFields] = useState(controls);

	const validateField = (fieldValue, fieldValidators) => {
		const errors = [];

		for (const validator of fieldValidators) {
			switch (validator) {
				case 'required':
					if (IsEmptyValidator(fieldValue)) {
						errors.push({ validator, message: 'This field is required' });
					}
					break;

				case 'email':
					if (EmailValidator(fieldValue)) {
						errors.push({ validator, message: 'Email format is wrong' });
					}
					break;
				default:
					break;
			}
		}

		return errors;
	};

	const handleInputChange = e => {
		const { name, value, checked, type, files } = e.target;
		const field = fields[name];

		// TODO
		// let newValue;
		// if (e.target.type === "checkbox") {
		// 	newValue = checked;
		// } else if (e.target.type === "file") {
		// 	newValue = files;
		// } else {
		// 	newValue = value;
		// }
		// field.value = newValue;

		field.value = type === 'checkbox' ? checked : value;

		field.isDirty = true;
		field.errors = validateField(field.value, field.validators);
		field.isValid = field.errors.length === 0;

		setFields({ ...fields, [name]: field });
	};

	const handleOnBlur = e => {
		if (validateOnBlur) {
			const { name } = e.target; // value, checked, type
			const field = fields[name];
			field.isDirty = true;
			field.errors = validateField(field.value, field.validators);
			field.isValid = field.errors.length === 0;
			setFields({ ...fields, [name]: field });
		}
	};

	const isRequired = (fieldName) => {
		let result = false;
		result = fields[fieldName].validators.indexOf('required') >= 0;
		return result;
	};

	const isInvalid = (fieldName) => {
		let result = false;
		const field = fields[fieldName];
		result = field.isDirty && !field.isValid;
		return result;
	};

	const renderLabel = (fieldKey, label, labelClassName = '') => {
		const cssClasses = [labelClassName, isRequired(fieldKey) ? 'required' : undefined];
		return (
			<FormLabel htmlFor={fieldKey} className={cssClasses.join(' ')}>
				{label}
			</FormLabel>
		);
	};

	const handleFormSubmit = () => {
		for (const fieldKey of Object.keys(fields)) {
			const field = fields[fieldKey];
			field.isDirty = true;
			field.errors = validateField(field.value, field.validators);
			field.isValid = field.errors.length === 0;
		}
		setFields({ ...fields });

		const isValid = Object.keys(fields).map(f => fields[f].isValid).every(valid => valid === false);
		setIsFormValid(isValid);

		const keys = Object.keys(fields);
		const values = keys.reduce((obj, f) => ({
			...obj,
			[f]: fields[f].value
		}), {});

		if (onSubmit) {
			onSubmit(values);
		}
	};

	const handleFormReset = () => {
		for (const fieldKey of Object.keys(fields)) {
			const field = fields[fieldKey];
			field.value = '';
			field.isDirty = false;
			field.errors = [];
			field.isValid = field.errors.length === 0;
		}

		setFields({ ...fields });
		setIsFormValid(false);
	};

	return (

		<form>

			{Object.keys(fields).map((fieldKey) => {
				return (
					<FormGroup key={fieldKey} className={fields[fieldKey].config.formGroupClassName}>

						{
							fields[fieldKey].config.labelPosition !== 'behind' &&
							renderLabel(fieldKey, fields[fieldKey].config.label, fields[fieldKey].config.labelClassName)
						}

						{/* TODO - pass configObject instead of every single Config */}
						<FormInput
							name={fieldKey}
							type={fields[fieldKey].type}
							className={fields[fieldKey].config.formControlClassName}
							onChange={handleInputChange}
							value={fields[fieldKey].value}
							isValid={!isInvalid(fieldKey)}
							options={fields[fieldKey].config.options}
							textareaOptions={fields[fieldKey].config.textareaOptions}
							autoFocus={fields[fieldKey].config.autoFocus}
							onBlur={handleOnBlur}
							placeholder={fields[fieldKey].config.placeholder}
						/>

						{
							fields[fieldKey].config.labelPosition === 'behind' &&
							renderLabel(fieldKey, fields[fieldKey].config.label, fields[fieldKey].config.labelClassName)
						}

						<FormHint hint={fields[fieldKey].config.hint} />

						<FormError errors={fields[fieldKey].errors} />
					</FormGroup>
				);
			})}

			{(renderSubmitButton || renderResetButton) ?
				<div className="mt-3">
					{renderSubmitButton(handleFormSubmit)}
					{renderResetButton(handleFormReset)}
				</div>
				: undefined}

		</form>
	);
};

// Form.propTypes = {
// 	controls: PropTypes.object,
// 	validateOnBlur: PropTypes.bool,
// 	onSubmit: PropTypes.func
// };
