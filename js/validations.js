const lettersPattern = /^[a-zA-Z\ .]+$/;
const lettersAndNumbersPattern = /^[a-zA-Z0-9\s]+$/;
const numbersPattern = /\d+/;
const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const checkOnlyLettersSpaceAndDot = (name) => name.match(lettersPattern);
const checkLettersAndNumbers = (value) => value.match(lettersAndNumbersPattern);
const checkOnlyNumbers = (number) => number.match(numbersPattern); 
const checkEmail = (email) => email.match(emailPattern);
const checkMinLength = (value, length) => value.length >= length;

const validateName = (value, errorElement, lengthErrorMessage, lettersErrorMessage) => {	
  let error = true;
  
  if (!checkMinLength(value, 3)) {
		errorElement.textContent = lengthErrorMessage;
    error = false;
	} else if (!checkOnlyLettersSpaceAndDot(value)) {
		errorElement.textContent = lettersErrorMessage;
    error = false;
	}

  return error;
}

const validateEmail = (value, errorElement, lengthErrorMessage, formatErrorMessage) => {
	let error = true;

  if (!checkMinLength(value, 3)) {
		errorElement.textContent = lengthErrorMessage;
		error = false;
	} else if (!checkEmail(value)) {
		errorElement.textContent = formatErrorMessage;
		error = false;
	}

  return error;
}

const validatePhone = (value, errorElement, lengthErrorMessage, numbersErrorMessage) => {
	let error = true;

  if (value.length !== 9) {
		errorElement.textContent = lengthErrorMessage;
		error = false;
	} else if (!checkOnlyNumbers(value)) {
		errorElement.textContent = numbersErrorMessage;
		error = false;
	}

  return error;
}

const validatePassword = (value, errorElement, lengthErrorMessage, lettersNumbersErrorMessage) => {
	let error = true;

  if (!checkMinLength(value, 4)) {
		errorElement.textContent = lengthErrorMessage;
		error = false;
	} else if (!checkLettersAndNumbers(value)) {
		errorElement.textContent = lettersNumbersErrorMessage;
		error = false;
	}

  return error;
}

const validateMinLength = (value, errorElement, lengthErrorMessage) => {
  let error = true;

  if (value.length < length) {
    errorElement.textContent = lengthErrorMessage;
    error = false;
  }

  return error;
}

export { validateName, validateEmail, validatePhone, validatePassword, validateMinLength }