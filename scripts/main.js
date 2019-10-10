'use strict';
/* 
const toggleBurgerMenu = (event) => {
  //console.log(event.target.parentElement);
  const menu = document.getElementById("nav-menu");
  const burgerMenuIcon = event.target.parentElement;
  burgerMenuIcon.classList.toggle("burger-menu-icon-on");
  menu.classList.toggle("hide-menu");
} */



function classToggle() {
  const navs = document.querySelectorAll('.Navbar_Items')
  
  navs.forEach(nav => nav.classList.toggle('Navbar_ToggleShow'));
  }
  
  document.querySelector('.Navbar-small')
  .addEventListener('click', classToggle);