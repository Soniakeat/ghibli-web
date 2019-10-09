'use strict';

const toggleBurgerMenu = (event) => {
  //console.log(event.target.parentElement);
  const menu = document.getElementById("nav-menu");
  const burgerMenuIcon = event.target.parentElement;
  burgerMenuIcon.classList.toggle("burger-menu-icon-on");
  menu.classList.toggle("hide-menu");
}