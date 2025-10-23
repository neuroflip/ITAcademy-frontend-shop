const INVALIDCLASS = 'is-invalid';
const VALIDCLASS = 'is-valid';

const lettersPattern = /^[a-zA-Z\ .]+$/;
const lettersAndNumbersPattern = /^[a-zA-Z0-9\s]+$/;
const numbersPattern = /\d+/;
const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const checkOnlyLettersSpaceAndDot = (name) => name.match(lettersPattern);
const checkLettersAndNumbers = (value) => value.match(lettersAndNumbersPattern);
const checkOnlyNumbers = (number) => number.match(numbersPattern);
const checkEmail = (email) => email.match(emailPattern);
const checkMinLength = (value, length) => value.length >= length;

const isValidNameLength = (value) => checkMinLength(value, 3);
const isValidNameContent = (value) => Boolean(checkOnlyLettersSpaceAndDot(value));
const isValidEmailLength = (value) => checkMinLength(value, 3);
const isValidEmailFormat = (value) => Boolean(checkEmail(value));
const isValidPhoneLength = (value) => value.length === 9;
const isValidPhoneContent = (value) => Boolean(checkOnlyNumbers(value));
const isValidPasswordLength = (value) => checkMinLength(value, 4);
const isValidPasswordContent = (value) => Boolean(checkLettersAndNumbers(value));
const isValidAdressLength = (value) => checkMinLength(value, 3);

const updateBootstrapValidClasses = (input, isValid) => {
	if (!isValid) {
		input.classList.add(INVALIDCLASS);
		input.classList.remove(VALIDCLASS);
	} else {
		input.classList.remove(INVALIDCLASS);
		input.classList.add(VALIDCLASS);
	}
}

const validateInputAndShowError = (inputElement, errorElement, check1,
	errorLabel1, check2, errorLabel2) => {
	let isValid = true;

	if (!check1(inputElement.value)) {
			errorElement.textContent = errorLabel1;
    	isValid = false;
	} else if (!check2(inputElement.value)) {
			errorElement.textContent = errorLabel2;
    	isValid = false;
	}

	updateBootstrapValidClasses(inputElement, isValid);

  return isValid;

}

const validateNameAndShowError = () => {
	const input = document.getElementById("fName");
	const errorElement = document.getElementById("errorName");
	const lengthErrorMessage = "The name must have at least 3 characters";
	const lettersErrorMessage = "The name must contain only letters, spaces or dots";

	return validateInputAndShowError(input, errorElement, isValidNameLength, 
		lengthErrorMessage, isValidNameContent, lettersErrorMessage);
}

const validateLastNameAndShowError = () => {
	const input = document.getElementById("fLastN");
	const errorElement = document.getElementById("errorLastN");
	const lengthErrorMessage = "The last name must have at least 3 characters";
	const lettersErrorMessage = "The last name must contain only letters, spaces or dots";

	return validateInputAndShowError(input, errorElement, isValidNameLength, 
		lengthErrorMessage, isValidNameContent, lettersErrorMessage);
}

const validateEmailAndShowError = () => {
	const input = document.getElementById("fEmail");
	const errorElement = document.getElementById("errorEmail");
	const lengthErrorMessage = "The email must have at least 3 characters";
	const formatErrorMessage = "The email is not a correct email";

	return validateInputAndShowError(input, errorElement, isValidEmailLength, 
		lengthErrorMessage, isValidEmailFormat, formatErrorMessage);
}

const validatePhoneAndShowError = () => {
	const input = document.getElementById("fPhone");
	const errorElement = document.getElementById("errorPhone");
	const lengthErrorMessage = "The phone number must be 9 digits with no letters";
	const formatErrorMessage = "The phone must contain only numbers";
	
	return validateInputAndShowError(input, errorElement, isValidPhoneLength, 
		lengthErrorMessage, isValidPhoneContent, formatErrorMessage);
}

const validatePasswordAndShowError = () => {
	const input = document.getElementById("fPassword");
	const errorElement = document.getElementById("errorPassword");
	const lengthErrorMessage = "The password must have at least 4 characters";
	const formatErrorMessage = "The password must contain only numbers or letters";

	return validateInputAndShowError(input, errorElement, isValidPasswordLength, 
		lengthErrorMessage, isValidPasswordContent, formatErrorMessage);
}

const validateAdressAndShowError = () => {
	const input = document.getElementById("fAddress");
	const errorElement = document.getElementById("errorAddress");
	const lengthErrorMessage = "The address must have at least 3 characters";

	return validateInputAndShowError(input, errorElement, isValidAdressLength, 
		lengthErrorMessage, () => true , '');
}

export { validateNameAndShowError, validateLastNameAndShowError, validateEmailAndShowError, validatePhoneAndShowError,
	validatePasswordAndShowError, validateAdressAndShowError, isValidNameLength, isValidNameContent, isValidEmailLength,
	isValidEmailFormat, isValidPhoneLength, isValidPhoneContent, isValidPasswordLength, isValidPasswordContent, 
	isValidAdressLength };