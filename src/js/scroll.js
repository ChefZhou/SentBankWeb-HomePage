const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const handleScrollToClick = function (e) {
  const slcoords = section1.getBoundingClientRect();

  section1.scrollIntoView({ behavior: 'smooth' });
};

btnScrollTo.addEventListener('click', handleScrollToClick);

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

export {
  handleScrollToClick,
  hideAllSections,
  revealSection,
  restoreScrollPosition,
};
