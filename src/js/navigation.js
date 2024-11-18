import { hideAllSections } from './scroll.js';

// 點擊logo重整頁面
const logo = document.querySelector('#logo');

const handleLogoClick = function (e) {
  e.preventDefault();
  localStorage.setItem('scrollPosition', window.scrollY);

  document
    .querySelector('.header__title')
    .scrollIntoView({ behavior: 'smooth' });

  // 隱藏所有 section
  hideAllSections();
};

logo.addEventListener('click', handleLogoClick);

// 導航欄位跟隨
const handleScroll = function () {
  const nav = document.querySelector('.nav');
  const scrollHeight = document.documentElement.scrollHeight;
  const scrollTop = window.scrollY;
  const clientHeight = document.documentElement.clientHeight;

  if (scrollTop + clientHeight >= scrollHeight) {
    nav.classList.add('fixed');
  } else {
    nav.classList.remove('fixed');
  }
};

window.addEventListener('scroll', handleScroll);

//導航列跳轉(滑順)
const handleNavLinkClick = function (e) {
  e.preventDefault();
  const id = this.getAttribute('href');

  if (
    id &&
    id !== '#' &&
    id !== 'javascript:void(0)' &&
    document.querySelector(id)
  ) {
    console.log(id);
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    });
  } else if (id === '#' || id === 'javascript:void(0)') {
    (' ');
  } else {
    console.error(`Invalid selector: ${id}`);
  }
};

document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', handleNavLinkClick);
});

// 導航列特效
const nav = document.querySelector('.nav');

const handleHover = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = opacity;
    });
    logo.style.opacity = 1;
  }
};

nav.addEventListener('mouseover', function (e) {
  handleHover(e, 0.5);
});

nav.addEventListener('mouseout', function (e) {
  handleHover(e, 1);
});

export { handleLogoClick, handleScroll, handleNavLinkClick, handleHover };
