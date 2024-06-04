const navBtn = document.querySelector(".nav__btn");
const navMenu = document.querySelector(".nav-menu");

navBtn.addEventListener("click", toggleMenu);

function toggleMenu({ currentTarget : CT }) {
  navMenu.classList.toggle("nav-menu--open");
  CT.classList.toggle("nav__btn--open")
}
