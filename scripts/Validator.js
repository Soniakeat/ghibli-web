'use strict';

class Validator {

  //Cómo va a funcionar?
  /*
  Validaré el email y el password. Cada vez que modifiquemos esos campos (sin necesidad de darle al botón) irá comprobando las diferentes validaciones y añadiendo, menteniendo o quitando los errores en un objeto. Después, desde signup, veremos qué errores hay en el objeto y actuaremos en consecuencia. El botón de signup estará desactivado hasta que todo esté correctamente validado.
  */

  constructor() { //errors será un objeto de errores
    this.invalidEmailError = "Introduce un email válido";
    this.repeatEmailError = "Este email ya está en uso";
    this.passwordError = "Introduce una contraseña de, almenos, 6 carácteres";
    this.repeatPassError = "Los campos no coinciden";

    this.errors = {
      invalidEmailError: this.invalidEmailError,
      //no añado repeat email porque aparecerá si es necesario, una vez validado el email válido
      passwordError: this.passwordError,
      repeatPassError: this.repeatPassError,
    }
  }

  validateValidEmail = (email) => {
    //comprobar el formato del email. Si es correcto, quitar el error de this.errors, si no lo es, añadirlo
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)) { //valida los carácteres del email https://davidburgos.blog/expresion-regular-para-validar-emails-en-javascript/
      delete this.errors.invalidEmailError;
    } else { //aquí entra si el correo no es válido.
      this.errors.invalidEmailError = this.invalidEmailError;
    }
    return this.errors;
  }

  validateUniqueEmail = (newEmail) => {
    //comprobar que el email no esté en la base de datos
    //recoger datos del localstorage
    const usersDB = JSON.parse(localStorage.getItem('users')); //devuelve un array de objetos de usuarios
    console.log(usersDB)
    if (!usersDB) { //si no hay ningún usuario registrado validamos directamente
      delete this.errors.repeatEmailError;
      return this.errors;
    }
    //no pongo el else porque el if ya tiene un return y directamente parará la función
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
    //validar que el password tenga menos de 6 caracterers
    if (password.length > 5) {
      delete this.errors.passwordError;
    } else {
      this.errors.passwordError = this.passwordError;
    }
    return this.errors;
  }

  validatePasswordRepeat = (password, repeatPassword) => {
    //validar que los passwords sean iguales
    if (password === repeatPassword) {
      delete this.errors.repeatPassError;
    } else {
      this.errors.repeatPassError = this.repeatPassError;
    }
    return this.errors;
  }

  checkErrors = (isSubmitted) => {
    //comprobar el estado de los errores y, si se ha registrado un usuario, resetear los errores
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