import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

import media from '../ts/functions/media'

const calendarSliders = () => {

  const sliderFilter = new Swiper('.filter-slider .swiper', {

    pagination: {

      el: '.filter-slider .swiper-pagination',
      clickable: true

    },

    navigation: {

      prevEl: '.filter-slider .swiper-button-prev',
      nextEl: '.filter-slider .swiper-button-next'

    },

    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    allowTouchMove: false

  })

}

const init = () => {

  const sliderPriority = new Swiper('.priority-slider .swiper', {

    pagination: {

      el: '.priority-slider .swiper-pagination',
      clickable: true

    },

    navigation: {

      prevEl: '.priority-slider .swiper-button-prev',
      nextEl: '.priority-slider .swiper-button-next'

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

  const sliderExperts = new Swiper('.experts-slider .swiper', {

    pagination: {

      el: '.experts-slider .swiper-pagination',
      clickable: true

    },

    navigation: {

      prevEl: '.experts-slider .swiper-button-prev',
      nextEl: '.experts-slider .swiper-button-next'

    },

    slidesPerView: 1.2,
    slidesPerGroup: 1,
    spaceBetween: 20,
    grabCursor: true,

    breakpoints: {

      [media.md]: {

        slidesPerView: 2

      },

      [media.lg]: {

        slidesPerView: 3

      },

      [media.xl]: {

        slidesPerView: 4,
        allowTouchMove: false,

      }

    }

  })

  const sliderPrograms = new Swiper('.programs-slider .swiper', {

    pagination: {

      el: '.programs-slider .swiper-pagination',
      clickable: true

    },

    navigation: {

      prevEl: '.programs-slider .swiper-button-prev',
      nextEl: '.programs-slider .swiper-button-next'

    },

    slidesPerView: 1.2,
    slidesPerGroup: 1,
    spaceBetween: 20,
    grabCursor: true,

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

    }

  })

  const sliderPlatforms = new Swiper('.platforms-slider .swiper', {

    pagination: {

      el: '.platforms-slider .swiper-pagination',
      clickable: true

    },

    slidesPerView: 1.2,
    slidesPerGroup: 1,
    spaceBetween: 20,
    grabCursor: true,

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

    }

  })

  window.Swiper = Swiper

}

export default { init, calendarSliders }