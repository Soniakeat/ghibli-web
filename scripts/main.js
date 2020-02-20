'use strict';

function classToggle() {
  const navs = document.querySelectorAll('.Navbar_Items')
  
  navs.forEach(nav => nav.classList.toggle('Navbar_ToggleShow'));
  }
  
  document.querySelector('.Navbar-small')
  .addEventListener('click', classToggle);