import Swiper, { Pagination, Mousewheel } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/bundle'

function initSlider(elem, selector, conf) {
    if (!elem) return false

    new Swiper(
        selector,
        conf
    );
}

function projectSliderFunc() {
    const sliderProjects = document.querySelector('.js-slider-projects:not(.swiper-initialized)')
    const windowWidth = window.innerWidth
    const initStatus = windowWidth <= 1279

    if (initStatus) {
        initSlider(
            sliderProjects,
            '.js-slider-projects',
            {
                loop: true,
                mousewheel: true,
                slidesPerView: 'auto',
                modules: [ Mousewheel, Pagination ],

                pagination: {
                    el: '.js-slider-projects .swiper-pagination',
                    clickable: true,
                },
            }
        )
    } else {
        const initializedSwiper = document.querySelector('.js-slider-projects.swiper-initialized')
        if (initializedSwiper) {
            initializedSwiper.swiper.destroy(true, true)
        }
    }
}

export default function sliders() {

    projectSliderFunc()

    window.addEventListener('resize', () => projectSliderFunc())

    const sliderServices = document.querySelector('.js-slider-services:not(.swiper-initialized)')

    initSlider(
        sliderServices,
        '.js-slider-services',
        {
            loop: true,
            mousewheel: true,
            slidesPerView: 'auto',
            spaceBetween: 16,
            modules: [ Mousewheel, Pagination ],

            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        }
    )

}
