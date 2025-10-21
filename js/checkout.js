import CheckoutFormValidator from "./CheckoutFormValidator/CheckoutFormValidator.js";

const formSubmitEventHandler = () => {
	const button = document.getElementById('btn');

	button.addEventListener('click', (event) => {
		event.preventDefault();

		formValidator.validate();
	})
}

const formValidator = new CheckoutFormValidator();
formSubmitEventHandler();
