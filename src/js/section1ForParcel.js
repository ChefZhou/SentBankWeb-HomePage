import digitalLazy from '../img/digital-lazy.jpg';
import digital from '../img/digital.jpg';
import cardLazy from '../img/card-lazy.jpg';
import card from '../img/card.jpg';
import grow from '../img/grow.jpg';
import growLazy from '../img/grow-lazy.jpg';

const imgElements = document.querySelectorAll('.features__img');

const setImageSources = () => {
  imgElements.forEach(imgElement => {
    if (imgElement.classList.contains('digital-lazy')) {
      imgElement.src = digitalLazy;
      imgElement.dataset.src = digital;
    } else if (imgElement.classList.contains('card-lazy')) {
      imgElement.src = cardLazy;
      imgElement.dataset.src = card;
    } else if (imgElement.classList.contains('grow-lazy')) {
      imgElement.src = growLazy;
      imgElement.dataset.src = grow;
    }
  });
};

export { setImageSources };
