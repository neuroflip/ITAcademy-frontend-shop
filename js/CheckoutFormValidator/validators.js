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

const validateNameAndShowError = (value, errorElement, lengthErrorMessage, lettersErrorMessage) => {
  	let validates = true;

  	if (!isValidNameLength(value)) {
			errorElement.textContent = lengthErrorMessage;
    	validates = false;
	} else if (!isValidNameContent(value)) {
			errorElement.textContent = lettersErrorMessage;
    	validates = false;
	}

  return validates;
}

const validateEmailAndShowError = (value, errorElement, lengthErrorMessage, formatErrorMessage) => {
	let validates = true;

  	if (!isValidEmailLength(value)) {
		errorElement.textContent = lengthErrorMessage;
		validates = false;
	} else if (!isValidEmailFormat(value)) {
		errorElement.textContent = formatErrorMessage;
		validates = false;
	}

  return validates;
}

const validatePhoneAndShowError = (value, errorElement, lengthErrorMessage, numbersErrorMessage) => {
	let validates = true;

  	if (!isValidPhoneLength(value)  ) {
		errorElement.textContent = lengthErrorMessage;
		validates = false;
	} else if (!isValidPhoneContent(value)) {
		errorElement.textContent = numbersErrorMessage;
		validates = false;
	}

  return validates;
}

const validatePasswordAndShowError = (value, errorElement, lengthErrorMessage, lettersNumbersErrorMessage) => {
	let validates = true;

  if (!isValidPasswordLength(value)) {
		errorElement.textContent = lengthErrorMessage;
		validates = false;
	} else if (!isValidPasswordContent(value)) {
		errorElement.textContent = lettersNumbersErrorMessage;
		validates = false;
	}

  return validates;
}

const validateAdressAndShowError = (value, errorElement, lengthErrorMessage) => {
  let validates = true;

  if (!isValidAdressLength(value)) {
    errorElement.textContent = lengthErrorMessage;
    validates = false;
  }

  return validates;
}

export { validateNameAndShowError, validateEmailAndShowError, validatePhoneAndShowError, validatePasswordAndShowError, validateAdressAndShowError,
	isValidNameLength, isValidNameContent, isValidEmailLength, isValidEmailFormat, isValidPhoneLength, isValidPhoneContent,
	isValidPasswordLength, isValidPasswordContent, isValidAdressLength };