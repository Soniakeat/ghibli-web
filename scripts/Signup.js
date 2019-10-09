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
    //recoger todos los valores de los inputs:
    const name = this.nameInput.value;
    const email = this.emailInput.value;
    const password = this.passwordInput.value;

    //Instancia de "User" nueva
    const newUser = new User(name, email, password);

    //almacenar el usuario
    //localStorage.setItem('users', 'hola');
    //localStorage.setItem('users', JSON.stringify(newUser));


    //Recuperar datos de usuarios para añadir y no reemplazar:
    let usersDB = JSON.parse(localStorage.getItem('users'));
    //la defino como let porque si no hay usuarios, más tarde le reasignaré un valor
    console.log(usersDB)

    if (usersDB) { //si ya hay datos, añade el nuevo
      usersDB.push(newUser);
      localStorage.setItem('users', JSON.stringify(usersDB));
    } else { //si no los hay, crea el array con el user
      usersDB = [newUser];
      localStorage.setItem('users', JSON.stringify(usersDB));
      //guardar el nuevo user en localstorage
    }

    //vaciar formulario
    this.nameInput.value = '';
    this.emailInput.value = '';
    this.passwordInput.value = '';
    this.repeatPasswordInput.value = '';

    //volver a cargar los errores
    validator.checkErrors(true);
  }

  handleInputsValues = () => {
    //comprobar los datos de los inputs y validarlos

    //comprobar email válido
    //comprobar email único

    //comprobar password > 6 carácteres

    //comprobar que las dos passwords coinciden


    this.emailInput.addEventListener('input', event => { //input es un evento que comprueba cualquier cambio en los inputs
      //comprobar si errores tiene el error "invalidEmailError"
      // console.log(event.target.value);
      // console.log(validator.validateValidEmail(event.target.value));


      /*-- paso 1 --*/
      //let errors = validator.validateValidEmail(event.target.value)

      //console.log(errors);
      // this.handleIsValid();
      // this.handleErrorMessages();

      /* --paso 2 --*/
      let errors = validator.validateValidEmail(event.target.value);

      /*  ---Esperar a tener todo el flujo funcionando -- */
      if (!('invalidEmailError' in errors)) {
        errors = validator.validateUniqueEmail(event.target.value)
      }

      console.log(errors);
      this.handleIsValid();
      this.handleErrorMessages();

    });

    /*  ---Esperar a tener todo el flujo funcionando -- */
    this.repeatPasswordInput.addEventListener('input', event => {
      let errors = validator.validatePasswordRepeat(this.passwordInput.value, event.target.value)

      console.log(errors);
      this.handleIsValid();
      this.handleErrorMessages();
    });

    /*  ---Esperar a tener todo el flujo funcionando -- */
    this.passwordInput.addEventListener('input', event => {
      validator.validatePassword(event.target.value);
      validator.validatePasswordRepeat(this.repeatPasswordInput.value, event.target.value)
      this.handleErrorMessages();
      this.handleIsvalid();
    });
  }

  handleIsValid = () => {
    //activar o desactivar el botón en función de si hay o no errores
    if (Object.keys(validator.checkErrors()).length === 0) {
      //quitar "disable" al button
      //console.log("yeaaah")
      this.buttonInput.removeAttribute("disabled");
    } else {
      //console.log("noooooo")
      this.buttonInput.setAttribute("disabled", "");
    }
  }

  handleErrorMessages = () => {
    //mostrar mensajes de error en el HTML si los hay
    this.errorsWrapper.innerHTML = ''; // vacío los errores para que no vaya sumándolos
    const errors = validator.checkErrors()
    //console.log(errors);
    for (const prop in errors) {
      //console.log(errors[prop]);
      const error = document.createElement('p');
      error.innerHTML = errors[prop]
      this.errorsWrapper.appendChild(error);
    }
  }

/*   saveToLocalStorage = () => {
    let person = {
      name: this.nameInput ,
      email: this.emailInput,
      this.passwordInput = document.querySelector('#password');
      location: "Lagos",
    }
    window.localStorage.setItem('user', JSON.stringify(person));
    console.log(person);
  } */

}


const signup = new Signup();
const validator = new Validator();
window.addEventListener('load', signup.handleInputsValues);

console.log(signup);
