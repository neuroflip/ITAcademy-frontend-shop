import CheckoutFormValidator from "./CheckoutFormValidator/CheckoutFormValidator.js";
import { validateNameAndShowError, validateEmailAndShowError, validatePhoneAndShowError, validatePasswordAndShowError,
  validateAdressAndShowError } from './CheckoutFormValidator/validators.js';


const formValidator = new CheckoutFormValidator();

const formSubmitEventHandler = () => {
	const submitButton = document.getElementById('btn');

	submitButton.addEventListener('click', (event) => {
		event.preventDefault();

		if (!formValidator.validateAndUpdateUI()) {
			submitButton.setAttribute('disabled', '');
		} else {
			submitButton.removeAttribute('disabled');
		}
	})
}

const addKeyupEventListenerToFormButton = (inputElement, isValidCallback) => {
	const submitButton = document.getElementById('btn');

	inputElement.addEventListener('keyup', () => {
		const isValid = isValidCallback(inputElement.value);

		if (!isValid) {
			submitButton.setAttribute('disabled', '');
			
		} else {
			submitButton.removeAttribute('disabled');
		}
	});
}

const formButtonDisabledStateManagement = () => {
	const fName = document.getElementById("fName");
	const fLastN = document.getElementById("fLastN");
	const fAddress = document.getElementById("fAddress");
	const fPassword = document.getElementById("fPassword");
	const fPhone = document.getElementById("fPhone");
	const fEmail = document.getElementById("fEmail");

	addKeyupEventListenerToFormButton(fName, validateNameAndShowError);
	addKeyupEventListenerToFormButton(fLastN, validateNameAndShowError);
	addKeyupEventListenerToFormButton(fAddress, validateAdressAndShowError);
	addKeyupEventListenerToFormButton(fPassword, validatePasswordAndShowError);
	addKeyupEventListenerToFormButton(fPhone, validatePhoneAndShowError);
	addKeyupEventListenerToFormButton(fEmail, validateEmailAndShowError);
}

formSubmitEventHandler();
formButtonDisabledStateManagement();
