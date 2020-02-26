'use strict';

class Signup {
  constructor() {
    this.nameInput = document.querySelector('#name');
    this.emailInput = document.querySelector('#email');
    this.passwordInput = document.querySelector('#password');
    this.repeatPasswordInput = document.querySelector('#repeat-password');
    this.buttonInput = document.querySelector('#signup-button');
    this.errorsWrapper = document.querySelector('.errors-container');
  }

  saveData = (event) => {
    event.preventDefault()
    const name = this.nameInput.value;
    const email = this.emailInput.value;
    const password = this.passwordInput.value;

    const newUser = new User(name, email, password);

    let usersDB = JSON.parse(localStorage.getItem('users'));
    console.log(usersDB)

    if (usersDB) { 
      usersDB.push(newUser);
      localStorage.setItem('users', JSON.stringify(usersDB));
    } else { 
      usersDB = [newUser];
      localStorage.setItem('users', JSON.stringify(usersDB));
    }

    this.nameInput.value = '';
    this.emailInput.value = '';
    this.passwordInput.value = '';
    this.repeatPasswordInput.value = '';

    validator.checkErrors(true);
  }

  handleInputsValues = () => {
    this.emailInput.addEventListener('input', event => { 
      let errors = validator.validateValidEmail(event.target.value);
      if (!('invalidEmailError' in errors)) {
        errors = validator.validateUniqueEmail(event.target.value)
      }
      console.log(errors);
      this.handleIsValid();
      this.handleErrorMessages();

    });

    this.repeatPasswordInput.addEventListener('input', event => {
      let errors = validator.validatePasswordRepeat(this.passwordInput.value, event.target.value)
      console.log(errors);
      this.handleIsValid();
      this.handleErrorMessages();
    });

    this.passwordInput.addEventListener('input', event => {
      validator.validatePassword(event.target.value);
      validator.validatePasswordRepeat(this.repeatPasswordInput.value, event.target.value)
      this.handleErrorMessages();
      this.handleIsvalid();
    });
  }

  handleIsValid = () => {
    if (Object.keys(validator.checkErrors()).length === 0) {
      this.buttonInput.removeAttribute("disabled");
    } else {
      this.buttonInput.setAttribute("disabled", "");
    }
  }

  handleErrorMessages = () => {
    this.errorsWrapper.innerHTML = ''; 
    const errors = validator.checkErrors()
    for (const prop in errors) {
      const error = document.createElement('p');
      error.innerHTML = errors[prop]
      this.errorsWrapper.appendChild(error);
    }
  }
}


const signup = new Signup();
const validator = new Validator();
window.addEventListener('load', signup.handleInputsValues);

console.log(signup);
