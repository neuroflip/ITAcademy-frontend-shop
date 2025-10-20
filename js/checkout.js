import { validateName, validateEmail, validatePhone, validateMinLength, validatePassword } from "./validators.js";

const validate = () => {
	let error = 0;
	const fName = document.getElementById("fName");
	const fLastN = document.getElementById("fLastN");
	const fAddress = document.getElementById("fAddress");
	const fPassword = document.getElementById("fPassword");
	const fPhone = document.getElementById("fPhone");
	const fEmail = document.getElementById("fEmail");

	const errorName = document.getElementById("errorName");
	const errorLastName = document.getElementById("errorLastN");
	const errorPhone = document.getElementById("errorPhone");
	const errorEmail = document.getElementById("errorEmail");  
	const errorAddress = document.getElementById("errorAddress");
	const errorPassword = document.getElementById("errorPassword");
	const formElement = document.querySelector(".form");

	//const submitButton = document.getElementById('btn');

	if (!validateName(fName.value, errorName, "The name must have at least 3 characters", "The name must contain only letters, spaces or dots")) {
		fName.classList.add('is-invalid');
		fName.classList.remove('is-valid');
		error++;
	} else {
		fName.classList.remove('is-invalid');
		fName.classList.add('is-valid');
	}

	if (!validateName(fLastN.value, errorLastName, "The last name must have at least 3 characters", "The last name must contain only letters, spaces or dots")) {
		fLastN.classList.add('is-invalid');
		fLastN.classList.remove('is-valid');
		error++;
	} else {
		fLastN.classList.remove('is-invalid');
		fLastN.classList.add('is-valid');
	}

	if (!validateEmail(fEmail.value, errorEmail, "The email must have at least 3 characters", "The email is not a correct email")) {
		fEmail.classList.add('is-invalid');
		fEmail.classList.remove('is-valid');
		error++;
	} else {
		fEmail.classList.remove('is-invalid');
		fEmail.classList.add('is-valid');
	}	

	if (!validatePhone(fPhone.value, errorPhone, "The phone number must be 9 digits with no letters", "The phone must contain only numbers")) {
		fPhone.classList.add('is-invalid');
		fPhone.classList.remove('is-valid');
		error++;
	} else {
		fPhone.classList.remove('is-invalid');
		fPhone.classList.add('is-valid');
	}

	if (!validateMinLength(fAddress.value, errorAddress, "The address must have at least 3 characters")) {
		fAddress.classList.add('is-invalid');
		fAddress.classList.remove('is-valid');
		error++;
	} else {
		fAddress.classList.remove('is-invalid');
		fAddress.classList.add('is-valid');
	}
	
	if (!validatePassword(fPassword.value, errorPassword, "The password must have at least 4 characters", "The password must contain only numbers or letters")) {
		fPassword.classList.add('is-invalid');
		fPassword.classList.remove('is-valid');
		error++;
	} else {
		fPassword.classList.remove('is-invalid');
		fPassword.classList.add('is-valid');
	}
 
	/*
	if (error > 0) {
		submitButton.disabled = true;
	} else {
		submitButton.disabled = false;
	} */

	formElement.classList.add('was-validated');

	return false;
}

const formSubmitEventHandler = () => {
	const button = document.getElementById('btn');

	button && button.addEventListener('click', (event) => {
		event.preventDefault();
		validate();
	})
}

formSubmitEventHandler();
