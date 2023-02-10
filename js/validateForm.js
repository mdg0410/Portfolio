const nameEl = document.querySelector('#name');
const textEl = document.querySelector('#message');
const addSmall = document.createElement('small');

const form = document.querySelector('#formContact');

const isRequired = (value) => (value !== '');
const isBetween = (length, min, max) => (!(length < min || length > max));

const showError = (input, message) => {
  // get the form-field element
  const formField = input.parentElement;
  // add the error class
  input.classList.remove('success');
  input.classList.add('error');

  // show the error message
  formField.appendChild(addSmall);
  const error = formField.querySelector('small');
  error.textContent = message;
};

const showSuccess = (input) => {
  // get the form-field element
  const formField = input.parentElement;

  // remove the error class
  input.classList.add('success');
  input.classList.remove('error');

  if (formField.querySelector('small' !== '')) {
    const deleteSmall = formField.querySelector('small');
    deleteSmall.remove();
  }
};

const checkName = () => {
  let valid = false;

  const min = 3; const max = 25;

  const name = nameEl.value.trim();

  if (!isRequired(name)) {
    showError(nameEl, 'Username cannot be blank.');
  } else if (!isBetween(name.length, min, max)) {
    showError(nameEl, `Username must be between ${min} and ${max} characters.`);
  } else {
    showSuccess(nameEl);
    valid = true;
  }
  return valid;
};

const checkText = () => {
  let valid = false;

  const min = 3; const max = 250;

  const text = textEl.value.trim();

  if (!isRequired(text)) {
    showError(textEl, 'Username cannot be blank.');
  } else if (!isBetween(text.length, min, max)) {
    showError(textEl, `Username must be between ${min} and ${max} characters.`);
  } else {
    showSuccess(textEl);
    valid = true;
  }
  return valid;
};

form.addEventListener('click', (e) => {
  // validate fields
  const isUsernameValid = checkName();
  const isTextValid = checkText();

  const isFormValid = isUsernameValid
        && isTextValid;

  // submit to the server if the form is valid
  if (isFormValid === false) {
    // prevent the form from submitting
    e.preventDefault();
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
    case 'message':
      checkText();
      break;
    default:
      break;
  }
}));
