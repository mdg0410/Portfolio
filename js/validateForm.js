/* eslint-disable no-param-reassign */
const nameEl = document.querySelector('#name');
const emailEl = document.querySelector('#e-mail');
const textEl = document.querySelector('#message');
const btnSubmit = document.querySelector('#formSubmit');
const form = document.querySelector('#formContact');

const isRequired = (value) => (value !== '');
const isBetween = (length, min, max) => (!(length < min || length > max));
const isEmailValid = (email) => {
  const re = /^(([a-z]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/;
  return re.test(email);
};

const showError = (input, message) => {
  // get the form-field element
  const formField = input.parentElement;
  // add the error class
  input.classList.remove('success');
  input.classList.add('error');

  // show the error message
  const error = formField.querySelector('small');
  error.textContent = message;
};

const showSuccess = (input) => {
  // get the form-field element
  const formField = input.parentElement;
  // add the error class
  input.classList.remove('error');
  input.classList.add('success');

  // show the error message
  const error = formField.querySelector('small');
  error.textContent = '';
};

const showErrorbtn = (input, message) => {
  // get the form-field element
  const formField = input.parentElement;
  // show the error message
  const error = formField.querySelector('small');
  input.style.border = 'red solid 1px';
  error.textContent = message;
};

const btnSuccess = (input) => {
  // get the form-field element
  const formField = input.parentElement;
  // show the error message
  input.style.border = 'none';
  const error = formField.querySelector('small');
  error.textContent = '';
};

const checkName = () => {
  let valid = false;
  const min = 3; const max = 30;
  const name = nameEl.value.trim();

  if (!isRequired(name)) {
    showError(nameEl, 'Username cannot be blank.');
  } else if (!isBetween(name.length, min, max)) {
    showError(nameEl, `Name must be between ${min} and ${max} characters.`);
  } else {
    showSuccess(nameEl);
    valid = true;
  }
  return valid;
};

const checkEmail = () => {
  let valid = false;
  const email = emailEl.value.trim();
  if (!isRequired(email)) {
    showError(emailEl, 'Email cannot be blank.');
  } else if (!isEmailValid(email)) {
    showError(emailEl, 'The email is invalid, try to write it in lowercase.');
  } else {
    showSuccess(emailEl);
    valid = true;
  }
  return valid;
};

const checkText = () => {
  let valid = false;
  const min = 3; const max = 250;
  const text = textEl.value.trim();

  if (!isRequired(text)) {
    showError(textEl, 'Text cannot be blank.');
  } else if (!isBetween(text.length, min, max)) {
    showError(textEl, `Text must be between ${min} and ${max} characters.`);
  } else {
    showSuccess(textEl);
    valid = true;
  }
  return valid;
};

form.addEventListener('click', (e) => {
  // prevent the form from submitting

  // validate fields
  const isUsernameValid = checkName();
  const isEmailValid = checkEmail();
  const isTextValid = checkText();

  const isFormValid = isUsernameValid
        && isEmailValid
        && isTextValid;

  // submit to the server if the form is valid
  if (!isFormValid) {
    e.preventDefault();
    if (!isUsernameValid) {
      showErrorbtn(btnSubmit, 'Error in name');
    } else if (!isEmailValid) {
      showErrorbtn(btnSubmit, 'Error in email');
    } else if (!isTextValid) {
      showErrorbtn(btnSubmit, 'Error in text');
    }
  } else {
    btnSuccess(btnSubmit);
  }
});

const debounce = (fn, delay = 500) => {
  let timeoutId;
  return (...args) => {
    // cancel the previous timer
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    // setup a new timer
    timeoutId = setTimeout(() => {
      // eslint-disable-next-line prefer-spread
      fn.apply(null, args);
    }, delay);
  };
};

form.addEventListener('input', debounce((e) => {
  switch (e.target.id) {
    case 'name':
      checkName();
      break;
    case 'e-mail':
      checkName();
      break;
    case 'message':
      checkText();
      break;
    default:
      break;
  }
}));
