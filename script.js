'use strict';

// 創建帳戶//

const modalCreateAccount = document.querySelector('#modal-create-account');
const overlayCreateAccount = document.querySelector('#overlay-create-account');
const btnCloseModalCreateAccount = document.querySelector(
  '#modal-create-account .btn--close-modal'
);
const btnsOpenModalCreateAccount =
  document.querySelectorAll('.btn--show-modal');

const modalUserLogin = document.querySelector('#modal-user-login');
const overlayUserLogin = document.querySelector('#overlay-user-login');
const btnCloseModalUserLogin = document.querySelector(
  '#modal-user-login .btn--close-userlogin'
);
const btnsOpenModalUserLogin = document.querySelectorAll('.btn--login');

const openModalCreateAccount = function () {
  closeModalUserLogin(); // 關閉 user login
  modalCreateAccount.classList.remove('hidden');
  overlayCreateAccount.classList.remove('hidden');
};

const closeModalCreateAccount = function () {
  modalCreateAccount.classList.add('hidden');
  overlayCreateAccount.classList.add('hidden');
};

const openModalUserLogin = function () {
  closeModalCreateAccount(); // 關閉 create account
  modalUserLogin.classList.remove('hidden');
  overlayUserLogin.classList.remove('hidden');
};

const closeModalUserLogin = function () {
  modalUserLogin.classList.add('hidden');
  overlayUserLogin.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModalCreateAccount.length; i++) {
  btnsOpenModalCreateAccount[i].addEventListener(
    'click',
    openModalCreateAccount
  );
}

for (let i = 0; i < btnsOpenModalUserLogin.length; i++) {
  btnsOpenModalUserLogin[i].addEventListener('click', openModalUserLogin);
}

if (btnCloseModalCreateAccount) {
  btnCloseModalCreateAccount.addEventListener('click', closeModalCreateAccount);
}

if (btnCloseModalUserLogin) {
  btnCloseModalUserLogin.addEventListener('click', closeModalUserLogin);
}

if (overlayCreateAccount) {
  overlayCreateAccount.addEventListener('click', closeModalCreateAccount);
}

if (overlayUserLogin) {
  overlayUserLogin.addEventListener('click', closeModalUserLogin);
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (!modalCreateAccount.classList.contains('hidden')) {
      closeModalCreateAccount();
    }
    if (!modalUserLogin.classList.contains('hidden')) {
      closeModalUserLogin();
    }
  }
});

///////////////////導航列/////////////////////

// 點擊logo重整頁面
const logo = document.querySelector('#logo');

logo.addEventListener('click', function (e) {
  e.preventDefault();
  localStorage.setItem('scrollPosition', window.scrollY);

  // 滑動到 .header__title
  document
    .querySelector('.header__title')
    .scrollIntoView({ behavior: 'smooth' });

  // 隱藏所有 section
  hideAllSections();
});

// 導航欄位跟隨

window.addEventListener('scroll', function () {
  const nav = document.querySelector('.nav');
  const scrollHeight = document.documentElement.scrollHeight;
  const scrollTop = window.scrollY;
  const clientHeight = document.documentElement.clientHeight;

  if (scrollTop + clientHeight >= scrollHeight) {
    nav.classList.add('fixed');
  } else {
    nav.classList.remove('fixed');
  }
});

//導航列跳轉(滑順)

document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href');

    // 避免使用無效選擇器
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
  });
});

// 功能介紹字卡

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container'); // 更正錯誤拼寫
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  if (!clicked) return;

  // (用到兩個forEach增加效能)
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  clicked.classList.add('operations__tab--active');

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
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

///////////////////// cookies/////////////////////
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const message = document.createElement('div');
  message.classList.add('cookie-message');
  message.innerHTML = `
    cookies Testing，並不會索取任何資料 
    <button class="btn btn--close-cookie">Got it!</button>
  `;

  header.append(message);

  document
    .querySelector('.btn--close-cookie')
    .addEventListener('click', function () {
      message.remove();
    });
});

////////////////畫面跳轉(了解更多)////////////////////
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const slcoords = section1.getBoundingClientRect();
  // 定位座標
  // console.log(slcoords);

  // console.log(e.target.getBoundingClientRect());

  // console.log('current scroll(X/Y)', window.pageXOffset, window.pageYOffset);

  // console.log(
  //   'height/width viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  section1.scrollIntoView({ behavior: 'smooth' });
});

////////////////頁面內容////////////

// 滑動特效呈現

const allSections = document.querySelectorAll('.section');

const hideAllSections = function () {
  allSections.forEach(function (section) {
    section.classList.add('section--hidden');
  });
};

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  setTimeout(() => {
    entry.target.classList.remove('section--hidden');
  }, 100);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

const restoreScrollPosition = function () {
  const scrollPosition = localStorage.getItem('scrollPosition');
  if (scrollPosition !== null) {
    window.scrollTo(0, parseInt(scrollPosition));

    setTimeout(() => {
      localStorage.removeItem('scrollPosition');
    }, 5000);
  }
};

window.addEventListener('load', restoreScrollPosition);

// 圖片模糊化
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;
  entry.target.classList.remove('lazy-img');
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
});

imgTargets.forEach(img => imgObserver.observe(img));

// 評論區

const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');
  let curSlide = 0;
  const maxSlide = slides.length;

  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };

  init();
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });

  // Loop功能
  const autoLoop = function () {
    setInterval(nextSlide, 3000);
  };

  autoLoop();
};

slider();
