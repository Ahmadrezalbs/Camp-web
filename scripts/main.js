
const { document: $ } = window,
  navBtn = $.querySelector('.nav__btn'),
  navMenu = $.querySelector('.nav-menu'),
  likeIcons = $.querySelectorAll('.place__like-icon'),
  placeImgs = $.querySelectorAll('.place__img');

navBtn.onclick = toggleMenu;
likeIcons.forEach((icon, i) =>
  placeImgs[i].ondblclick = icon.onclick = toggleLike
)

function toggleMenu({ currentTarget: CT }) {
  navMenu.classList.toggle('nav-menu--open')
  CT.classList.toggle('nav__btn--open')
}

function toggleLike({ currentTarget: CT }) {
  if (CT.tagName == 'IMG') CT = CT.nextElementSibling;
  CT.classList.toggle('place__like-icon--liked');
}         