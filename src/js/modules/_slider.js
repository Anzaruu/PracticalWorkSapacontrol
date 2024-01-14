import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const initSlider = () => {
  const swiper = new Swiper('.reviews__slider', {
    modules: [Navigation, Pagination],
    breakpoints: {
      370: {
        slidesPerView: 1,
      },
      710: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
    spaceBetween: 20,
    navigation: {
      prevEl: '.slider__prev',
      nextEl: '.slider__next',
    }
  });
}

export default initSlider