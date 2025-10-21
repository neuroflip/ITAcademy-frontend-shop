import CheckoutFormValidator from "./CheckoutFormValidator/CheckoutFormValidator.js";

const formValidator = new CheckoutFormValidator();

const formSubmitEventHandler = () => {
	const button = document.getElementById('btn');

	button.addEventListener('click', (event) => {
		event.preventDefault();

		formValidator.validate();
	})
}

const formButtonDisabledStateManagement = () => {
	const inputs = document.querySelectorAll('input[required]');
	const button = document.getElementById('btn');

	inputs.forEach((input) => {
		input.addEventListener('keyup', () => {
			const isValid = formValidator.validate();

			if (!isValid) {
				button.setAttribute('disabled', '');
			} else {
				button.removeAttribute('disabled');
			}
		})
	})
}

formSubmitEventHandler();
formButtonDisabledStateManagement();
