import { Fancybox } from '@fancyapps/ui'
import ru from '@fancyapps/ui/src/Fancybox/l10n/ru'
import '@fancyapps/ui/dist/fancybox.css'

import airDatepicker from './air-datepicker'
import sliderSwiper from './slider-swiper'
import filter from '../ts/filter'
import waved from '../ts/waved'

const init = () => {

  Fancybox.defaults.trapFocus = false
  Fancybox.defaults.autoFocus = false
  Fancybox.defaults.placeFocusBack = false
  Fancybox.defaults.l10n = ru
  Fancybox.defaults.template.spinner = '<div class="loading"><div class="loading-circle"></div></div>'

  Fancybox.bind('[data-fancybox-dialog]', {

    dragToClose: false,
    mainClass: 'fancybox-dialog',

    on: {

      done: (fancybox, slide) => {

        airDatepicker.init()
        sliderSwiper.calendarSliders()
        filter.init()
        waved.init()

      }

    }

  })

  window.Fancybox = Fancybox

}

export default { init }