import React, { useState } from 'react';

export const FormsSimple = () => {

	const [values, setValues] = useState({
		gender: '',
		firstName: '',
		lastName: '',
		birthdate: '',
		email: '',
		agb: false,
		options: ''
	});

	const [formErrors, setFormErrors] = useState({
		firstNameRequired: '',
		lastNameRequired: '',
		emailRequired: '',
		emailValid: '',
		agbRequired: ''
	});

	const validateField = (fieldName, value, checked) => {
		switch (fieldName) {
			case 'firstName':
				formErrors.firstNameRequired = value === '' ? 'Firstname is required' : '';
				break;
			case 'lastName':
				formErrors.lastNameRequired = value === '' ? 'Lastname is required' : '';
				break;
			case 'email':
				formErrors.emailRequired = !value ? 'E-Mail is required' : '';
				formErrors.emailValid = value && !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? 'E-Mail format is invalid' : '';
				break;
			case 'agb':
				formErrors.agbRequired = !checked ? 'AGB is required' : '';
				break;
			default:
				break;
		}
		setFormErrors({ ...formErrors });
	};

	const validateFields = () => {
		const keys = Object.keys(values);
		keys.map(k => validateField(k, values[k], values[k]));
		// for (let key of keys) {
		// 	validateField(key, values[key], values[key]);
		// }
	};

	const handleInputChange = e => {
		const { name, value, checked } = e.target;
		if (e.target.type === 'checkbox') {
			setValues({ ...values, [name]: checked });
		} else {
			setValues({ ...values, [name]: value });
		}

		validateField(name, value, checked);
	};

	const handleFormSubmit = () => {
		validateFields();
	};

	return (
		<div className="p-4">
			<h1>React - Forms starter</h1>
			<p>Simple form with Functional Component</p>

			<div className="text-danger">
				<h3>WIP - TODO</h3>
				<ul>
					<li>add validators</li>
					<li>add form errors</li>
					<li>disable button if form !valid</li>
				</ul>
			</div>

			<form>
				<div className="form-group">
					<label htmlFor="gender">Gender</label>
					<select
						id="gender"
						name="gender"
						className="form-control"
						onChange={handleInputChange}
					>
						<option value="">choose</option>
						<option value="female">female</option>
						<option value="male">male</option>
					</select>
				</div>

				<div className="form-group">
					<label htmlFor="firstName">First Name</label>
					<input
						type="text"
						className={
							'form-control' + (formErrors.firstNameRequired ? ' is-invalid' : '')
						}
						id="firstName"
						name="firstName"
						onChange={handleInputChange}
						value={values.firstName}
					/>
					<div className="invalid-feedback">
						{formErrors.firstNameRequired}
					</div>
				</div>

				<div className="form-group">
					<label htmlFor="lastName">Last Name</label>
					<input
						type="text"
						className={
							'form-control' + (formErrors.lastNameRequired ? ' is-invalid' : '')
						}
						name="lastName"
						onChange={handleInputChange}
						value={values.lastName}
					/>
					<div className="invalid-feedback">
						{formErrors.lastNameRequired}
					</div>
				</div>

				<div className="form-group">
					<label htmlFor="birthdate">
						Birthdate
					</label>
					<input
						type="date"
						className="form-control"
						id="birthdate"
						name="birthdate"
						onChange={handleInputChange}
						value={values.birthdate}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="email">Email address</label>
					<input
						type="email"
						className={
							'form-control' + (formErrors.emailRequired || formErrors.emailValid
								? ' is-invalid'
								: '')
						}
						id="email"
						name="email"
						onChange={handleInputChange}
						value={values.email}
					/>
					<div className="invalid-feedback">
						{formErrors.emailRequired}
						{formErrors.emailValid}
					</div>
				</div>

				<div className="form-check">
					<input
						type="checkbox"
						className={
							'form-check-input' + (formErrors.agbRequired ? ' is-invalid' : '')
						}
						id="agb"
						name="agb"
						onChange={handleInputChange}
						checked={values.agb}
					/>
					<label className="form-check-label" htmlFor="agb">
						AGB?
					</label>
					<div className="invalid-feedback">{formErrors.agbRequired}</div>
				</div>

				<div className="form-group">
					<label className="form-check-label">Options</label>
					<div className="form-check">
						<input
							className="form-check-input"
							type="radio"
							name="options"
							id="option1"
							onChange={handleInputChange}
							value="option1"
						/>
						<label className="form-check-label" htmlFor="inlineRadio1">
							1
						</label>
					</div>
					<div className="form-check">
						<input
							className="form-check-input"
							type="radio"
							name="options"
							id="option2"
							onChange={handleInputChange}
							value="option2"
						/>
						<label className="form-check-label" htmlFor="inlineRadio2">
							2
						</label>
					</div>
				</div>

				<button
					type="button"
					className="btn btn-primary"
					onClick={handleFormSubmit}
				>
					submit
				</button>
			</form>

			<h3 className="mt-4">Form Result</h3>
			<pre>{JSON.stringify(values, null, 2)}</pre>
		</div>
	);
};
