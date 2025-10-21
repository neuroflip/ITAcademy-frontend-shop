import { validateName, validateEmail, validatePhone, validateMinLength, validatePassword } from "./validators.js";

const INVALIDCLASS = 'is-invalid';
const VALIDCLASS = 'is-valid';

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
		fName.classList.add(INVALIDCLASS);
		fName.classList.remove(VALIDCLASS);
		error++;
	} else {
		fName.classList.remove(INVALIDCLASS);
		fName.classList.add(VALIDCLASS);
	}

	if (!validateName(fLastN.value, errorLastName, "The last name must have at least 3 characters", "The last name must contain only letters, spaces or dots")) {
		fLastN.classList.add(INVALIDCLASS);
		fLastN.classList.remove(VALIDCLASS);
		error++;
	} else {
		fLastN.classList.remove(INVALIDCLASS);
		fLastN.classList.add(VALIDCLASS);
	}

	if (!validateEmail(fEmail.value, errorEmail, "The email must have at least 3 characters", "The email is not a correct email")) {
		fEmail.classList.add(INVALIDCLASS);
		fEmail.classList.remove(VALIDCLASS);
		error++;
	} else {
		fEmail.classList.remove(INVALIDCLASS);
		fEmail.classList.add(VALIDCLASS);
	}	

	if (!validatePhone(fPhone.value, errorPhone, "The phone number must be 9 digits with no letters", "The phone must contain only numbers")) {
		fPhone.classList.add(INVALIDCLASS);
		fPhone.classList.remove(VALIDCLASS);
		error++;
	} else {
		fPhone.classList.remove(INVALIDCLASS);
		fPhone.classList.add(VALIDCLASS);
	}

	if (!validateMinLength(fAddress.value, errorAddress, "The address must have at least 3 characters")) {
		fAddress.classList.add(INVALIDCLASS);
		fAddress.classList.remove(VALIDCLASS);
		error++;
	} else {
		fAddress.classList.remove(INVALIDCLASS);
		fAddress.classList.add(VALIDCLASS);
	}
	
	if (!validatePassword(fPassword.value, errorPassword, "The password must have at least 4 characters", "The password must contain only numbers or letters")) {
		fPassword.classList.add(INVALIDCLASS);
		fPassword.classList.remove(VALIDCLASS);
		error++;
	} else {
		fPassword.classList.remove(INVALIDCLASS);
		fPassword.classList.add(VALIDCLASS);
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

	button.addEventListener('click', (event) => {
		event.preventDefault();

		validate();
	})
}

formSubmitEventHandler();
