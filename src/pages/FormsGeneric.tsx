import React from 'react';
import { FormControl } from '../shared/components/Form/form.models';
import { Form } from '../shared/components/Form/Form';

export const FormsGeneric = () => {
	const controls = {
		gender: new FormControl('', [], 'select', { label: 'Gender', options: [{ label: 'female', value: 'female' }, { label: 'male', value: 'male' }] }),
		firstName: new FormControl('', ['required'], 'text', { label: 'Firstname', autoFocus: true, placeholder: 'Firstname' }),
		lastName: new FormControl('', [], 'text', { label: 'Lastname' }),
		birthdate: new FormControl('', [], 'date', { label: 'Birthdate' }),
		email: new FormControl('', ['email', 'required'], 'text', { label: 'E-Mail', hint: 'We will never share your email with anyone else' }),
		options: new FormControl('', [], 'radio', { label: 'Options', options: [{ id: 'option1', label: 'Option 1', value: 'option1' }, { id: 'option2', label: 'Option 2', value: 'option2' }] }),
		notes: new FormControl('', [], 'textarea', { label: 'Notes', placeholder: 'some notes', textareaOptions: { rows: 3, resize: false } }),
		yearsOfExperience: new FormControl('', [], 'number', { label: 'Years of Experience' }),
		password: new FormControl('', ['required'], 'password', { label: 'Password' }),
		color: new FormControl('#FFFFFF', [], 'color', { label: 'Favourite color' }),
		time: new FormControl('', [], 'time', { label: 'Time' }),
		file: new FormControl('', [], 'file', { label: 'File' }),
		agb: new FormControl('', ['required'], 'checkbox', {
			label: 'AGB', labelPosition: 'behind', formControlClassName: 'form-check-input', formGroupClassName: 'form-check', labelClassName: 'form-check-label'
		}),
	};

	const onFormSubmit = (values) => {
		console.warn(JSON.stringify(values, null, 2));
	};

	return (
		<div className="container-fluid py-3">
			<h1>React - Form Validation</h1>

			<Form
				controls={controls}
				validateOnBlur
				onSubmit={onFormSubmit}

				renderSubmitButton={onClick => (
					<button type="button" onClick={onClick} className="btn btn-sm btn-primary">
						submit
					</button>
				)}

				renderResetButton={onClick => (
					<button onClick={onClick} type="button" className="btn btn-sm btn-danger ml-2">
						reset
					</button>
				)}
			/>

		</div>
	);
};
