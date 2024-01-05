import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const initSlider = () => {
    const swiper = new Swiper('.reviews__slider', {
        modules: [Navigation, Pagination],
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
            prevEl: '.slider__prev',
            nextEl: '.slider__next',
        }
    });
}

export default initSlider