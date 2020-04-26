const CNAME = 'FormService';
class FormService {
	handleInputChange = (e, values) => {
		let result;
		const { name, value, checked, files } = e.target;
		let control = values[name];
		if (e.target.type === "checkbox") {
			control.value = checked;
			result = { ...values, [name]: control };
		} else if (e.target.type === "file") {
			control.value = files[0];
			result = { ...values, [name]: control };
		} else {
			control.value = value;
			result = { ...values, [name]: control };
		}
		return result;
	}
}

export default new FormService();
