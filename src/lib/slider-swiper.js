import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

import media from '../ts/functions/media'

const init = () => {

  const sliderPriority = new Swiper('.priority-slider .swiper', {

    pagination: {

      el: '.priority-slider .swiper-pagination',
      clickable: true

    },

    slidesPerView: 1.2,
    slidesPerGroup: 1,
    spaceBetween: 20,
    grabCursor: true,
    freeMode: true,

    breakpoints: {

      [media.md]: {

        slidesPerView: 2

      },

      [media.lg]: {

        slidesPerView: 3

      },

      [media.xl]: {

        slidesPerView: 4

      }

    }

  })

  const sliderPrograms = new Swiper('.programs-slider .swiper', {

    pagination: {

      el: '.programs-slider .swiper-pagination',
      clickable: true

    },

    slidesPerView: 1.2,
    slidesPerGroup: 1,
    spaceBetween: 20,
    grabCursor: true,
    freeMode: true,

    breakpoints: {

      [media.md]: {

        slidesPerView: 2

      },

      [media.lg]: {

        slidesPerView: 3

      },

      [media.xl]: {

        slidesPerView: 4

      }

    }

  })

  const sliderPartners = new Swiper('.partners-slider .swiper', {

    pagination: {

      el: '.partners-slider .swiper-pagination',
      clickable: true

    },

    navigation: {

      prevEl: '.partners-slider .swiper-button-prev',
      nextEl: '.partners-slider .swiper-button-next'

    },

    slidesPerView: 1.2,
    slidesPerGroup: 1,
    spaceBetween: 20,
    grabCursor: true,
    loop: true,

    breakpoints: {

      [media.sm]: {

        slidesPerView: 2

      },

      [media.lg]: {

        slidesPerView: 3

      },

      [media.xl]: {

        slidesPerView: 4

      }

    },

    autoplay: {

      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: false

    }

  })

  window.Swiper = Swiper

}

export default { init }