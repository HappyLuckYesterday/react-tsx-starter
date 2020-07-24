export class FormControlConfig {
	// formGroupClassName
	// formControlClassName
	// labelClassName
	// label
	// options
	// hint
	// placeHolder
	// disabled
	// readonly
	// fileOptions
	// autofocus
	// fileOptions { accept, size }
	// textAreaOption - rows, resize
}

export class FormControl {
	constructor(value, validators = [], type, config = {}) {
		this.value = value;
		this.validators = validators;
		this.type = type;
		this.config = config;
	}

	type = '';
	value = '';
	errors = [];
	isValid = false;
	isDirty = false;
	validators = [];

	config = new FormControlConfig();
}
