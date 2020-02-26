'use strict';

const login = (event) => {
  event.preventDefault();
  const usersDB = JSON.parse(localStorage.getItem('users'));

  const emailInput = document.querySelector('#email');
  const passwordInput = document.querySelector('#password');

  const user = usersDB.find(element => element.email === emailInput.value && element.password === passwordInput.value);
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