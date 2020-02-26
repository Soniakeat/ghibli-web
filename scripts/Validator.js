'use strict';

class Validator {
  constructor() { 
    this.invalidEmailError = "Introduce un email válido";
    this.repeatEmailError = "Este email ya está en uso";
    this.passwordError = "Introduce una contraseña de, almenos, 6 carácteres";
    this.repeatPassError = "Los campos no coinciden";

    this.errors = {
      invalidEmailError: this.invalidEmailError,
      passwordError: this.passwordError,
      repeatPassError: this.repeatPassError,
    }
  }

  validateValidEmail = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)) { 
    } else {
      this.errors.invalidEmailError = this.invalidEmailError;
    }
    return this.errors;
  }

  validateUniqueEmail = (newEmail) => {
    const usersDB = JSON.parse(localStorage.getItem('users'));
    console.log(usersDB)
    if (!usersDB) { 
      delete this.errors.repeatEmailError;
      return this.errors;
    }

    let mailUnique = true;
    usersDB.forEach(user => {
      if (user.email === newEmail) {
        mailUnique = false;
      }
    });
    if (mailUnique) {
      delete this.errors.repeatEmailError;
    } else {
      this.errors.repeatEmailError = this.repeatEmailError;
    }
    return this.errors;
  }

  validatePassword = (password) => {
    if (password.length > 5) {
      delete this.errors.passwordError;
    } else {
      this.errors.passwordError = this.passwordError;
    }
    return this.errors;
  }

  validatePasswordRepeat = (password, repeatPassword) => {
    if (password === repeatPassword) {
      delete this.errors.repeatPassError;
    } else {
      this.errors.repeatPassError = this.repeatPassError;
    }
    return this.errors;
  }

  checkErrors = (isSubmitted) => {
    if (isSubmitted) {
      this.errors = {
        invalidEmailError: this.invalidEmailError,
        passwordError: this.passwordError,
        repeatPassError: this.repeatPassError,
      }
    }
    return this.errors;
  }
}