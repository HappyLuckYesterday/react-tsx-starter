import { IsEmptyValidator } from './IsEmptyValidator';

export const EmailValidator = (value) => {
	const isInvalidEmailFormat = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) === null;
	const isInvalid = !IsEmptyValidator(value) && isInvalidEmailFormat;
	return isInvalid;
};
