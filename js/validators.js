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
  let validates = true;

  if (!checkMinLength(value, 3)) {
		errorElement.textContent = lengthErrorMessage;
    validates = false;
	} else if (!checkOnlyLettersSpaceAndDot(value)) {
		errorElement.textContent = lettersErrorMessage;
    validates = false;
	}

  return validates;
}

const validateEmail = (value, errorElement, lengthErrorMessage, formatErrorMessage) => {
	let validates = true;

  if (!checkMinLength(value, 3)) {
		errorElement.textContent = lengthErrorMessage;
		validates = false;
	} else if (!checkEmail(value)) {
		errorElement.textContent = formatErrorMessage;
		validates = false;
	}

  return validates;
}

const validatePhone = (value, errorElement, lengthErrorMessage, numbersErrorMessage) => {
	let validates = true;

  if (value.length !== 9) {
		errorElement.textContent = lengthErrorMessage;
		validates = false;
	} else if (!checkOnlyNumbers(value)) {
		errorElement.textContent = numbersErrorMessage;
		validates = false;
	}

  return validates;
}

const validatePassword = (value, errorElement, lengthErrorMessage, lettersNumbersErrorMessage) => {
	let validates = true;

  if (!checkMinLength(value, 4)) {
		errorElement.textContent = lengthErrorMessage;
		validates = false;
	} else if (!checkLettersAndNumbers(value)) {
		errorElement.textContent = lettersNumbersErrorMessage;
		validates = false;
	}

  return validates;
}

const validateMinLength = (value, errorElement, lengthErrorMessage) => {
  let validates = true;

  if (value.length < length) {
    errorElement.textContent = lengthErrorMessage;
    validates = false;
  }

  return validates;
}

export { validateName, validateEmail, validatePhone, validatePassword, validateMinLength }