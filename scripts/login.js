'use strict';

const login = (event) => {
  event.preventDefault();
  //recoger los datos de nuestra "base de datos" de localstorage
  const usersDB = JSON.parse(localStorage.getItem('users'));
  //console.log(usersDB)

  //recoger los datos de los inputs
  const emailInput = document.querySelector('#email');
  const passwordInput = document.querySelector('#password');
  //console.log(emailInput.value, passwordInput.value)

  //filtrar base de datos. Find funciona como un filter, pero devuelve el primer elemento que coincide, y no un array de todos los elementos que cumplen la expresión
  const user = usersDB.find(element => element.email === emailInput.value && element.password === passwordInput.value);
  //console.log(user);
  handleMessages(user);
}

const handleMessages = user => {
  const messageContainer = document.querySelector(".errors-container");
  messageContainer.innerHTML = '';

  const message = document.createElement('p');
  if (user) {
    message.classList.add('correct-message')
    message.innerHTML = `Welcome, ${user.name}`
  } else {
    message.innerHTML = "the email and/or password are wrong"
  }
  messageContainer.appendChild(message);
}