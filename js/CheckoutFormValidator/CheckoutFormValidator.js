
import { validateNameAndShowError, validateLastNameAndShowError, validateEmailAndShowError, validatePhoneAndShowError, validatePasswordAndShowError,
  validateAdressAndShowError,isValidNameLength, isValidNameContent, isValidEmailLength, isValidEmailFormat, isValidPhoneLength, isValidPhoneContent,
	isValidPasswordLength, isValidPasswordContent, isValidAdressLength } from './validators.js';

class CheckoutFormValidator {
  isValid () {
    const fName = document.getElementById("fName").value;
    const fLastN = document.getElementById("fLastN").value;
    const fAddress = document.getElementById("fAddress").value;
    const fPassword = document.getElementById("fPassword").value;
    const fPhone = document.getElementById("fPhone").value;
    const fEmail = document.getElementById("fEmail").value;

    return isValidNameLength(fName) && isValidNameContent(fName) && isValidNameLength(fLastN) && 
      isValidNameContent(fLastN) && isValidEmailLength(fEmail) && isValidEmailFormat(fEmail) && 
      isValidPhoneLength(fPhone) && isValidPhoneContent(fPhone) && isValidPasswordLength(fPassword) &&
      isValidPasswordContent(fPassword) && isValidAdressLength(fAddress);
  }

  validateAllAndUpdateUI() {
    let error = 0;
    const formElement = document.querySelector(".form");

    if (!validateNameAndShowError()) {
      error++;
    }

    if (!validateLastNameAndShowError()) {
      error++;
    }

    if (!validateEmailAndShowError()) {
      error++;
    }

    if (!validatePhoneAndShowError()) {
      error++;
    }

    if (!validateAdressAndShowError()) {
      error++;
    }

    if (!validatePasswordAndShowError()) {
      error++;
    }

    formElement.classList.add('was-validated');

    return error === 0;
  }
}

export default CheckoutFormValidator;