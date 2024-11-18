import {
  openModalCreateAccount,
  closeModalCreateAccount,
  openModalUserLogin,
  closeModalUserLogin,
} from './accBtn.js';

import { showCookieMessage } from './cookies.js';

import {
  handleLogoClick,
  handleScroll,
  handleNavLinkClick,
  handleHover,
} from './navigation.js';

import {
  handleScrollToClick,
  hideAllSections,
  revealSection,
  restoreScrollPosition,
} from './scroll.js';

import { observeImages } from './section1.js';

import { setImageSources } from './section1ForParcel.js';

import { handleTabClick } from './section2.js';

import { slider } from './section3.js';

document.addEventListener('DOMContentLoaded', () => {
  showCookieMessage();
  observeImages();
  setImageSources();
  slider();
});

document.querySelectorAll('.btn--show-modal').forEach(btn => {
  btn.addEventListener('click', openModalCreateAccount);
});

document.querySelectorAll('.btn--login').forEach(btn => {
  btn.addEventListener('click', openModalUserLogin);
});

document
  .querySelector('#modal-create-account .btn--close-modal')
  .addEventListener('click', closeModalCreateAccount);
document
  .querySelector('#modal-user-login .btn--close-userlogin')
  .addEventListener('click', closeModalUserLogin);
document
  .querySelector('#overlay-create-account')
  .addEventListener('click', closeModalCreateAccount);
document
  .querySelector('#overlay-user-login')
  .addEventListener('click', closeModalUserLogin);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (
      !document
        .querySelector('#modal-create-account')
        .classList.contains('hidden')
    ) {
      closeModalCreateAccount();
    }
    if (
      !document.querySelector('#modal-user-login').classList.contains('hidden')
    ) {
      closeModalUserLogin();
    }
  }
});

document.querySelector('#logo').addEventListener('click', handleLogoClick);
window.addEventListener('scroll', handleScroll);
document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', handleNavLinkClick);
});
const nav = document.querySelector('.nav');
nav.addEventListener('mouseover', function (e) {
  handleHover(e, 0.5);
});
nav.addEventListener('mouseout', function (e) {
  handleHover(e, 1);
});

document
  .querySelector('.btn--scroll-to')
  .addEventListener('click', handleScrollToClick);
window.addEventListener('load', restoreScrollPosition);

hideAllSections();

const allSections = document.querySelectorAll('.section');
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

const tabsContainer = document.querySelector('.operations__tab-container');
tabsContainer.addEventListener('click', handleTabClick);
