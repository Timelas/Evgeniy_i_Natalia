const validationConfig = {
  formSelector: '.form__container',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled'
};

const hasInvalidInput = (inputs) => {
  return Array.from(inputs).some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButton = (button, validationConfig, inputs) => {
  if (hasInvalidInput(inputs)) {
    button.classList.add(validationConfig.inactiveButtonClass);
    button.disabled = true;
  }
  else {
    button.classList.remove(validationConfig.inactiveButtonClass);
    button.disabled = false;
  }
};

const inputListeners = (formElement, validationConfig) => {
  const inputs = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
  const button = formElement.querySelector(validationConfig.submitButtonSelector);
  toggleButton(button, validationConfig, inputs);
  inputs.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      toggleButton(button, validationConfig, inputs);
    });
  });
};

const enableValidation = (validationConfig) => {
  const forms = document.querySelectorAll(validationConfig.formSelector);
  forms.forEach(formElement => {
    formElement.addEventListener('submit', preventFormSubmit);
    inputListeners(formElement, validationConfig);
    });
};

function preventFormSubmit(evt) {
  evt.preventDefault();
};


const disableSubmitButton = () => {
  const button = document.querySelector(validationConfig.submitButtonSelector);
  button.setAttribute('disabled', 'true');
  button.classList.add('popup__button_disabled');
};

enableValidation(validationConfig);
