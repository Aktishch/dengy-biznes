// Libraries
import airDatepicker from './lib/air-datepicker'
import fancybox from './lib/fancybox'
import sliderSwiper from './lib/slider-swiper'

// Scripts
import progressLine from './ts/progress-line'
import theme from './ts/theme'
import animation from './ts/animation'
import waved from './ts/waved'
import accordion from './ts/accordion'
import formSubmit from './ts/form-submit'
import inputs from './ts/inputs'
import maskTel from './ts/mask-tel'
import scrollTo from './ts/scroll-to'

// Style
import './scss/index.scss'

// Connection
window.addEventListener('DOMContentLoaded', () => {

  airDatepicker.init()
  fancybox.init()
  sliderSwiper.init()
  progressLine.init()
  theme.init()
  animation.init()
  waved.init()
  accordion.init()
  formSubmit.init()
  inputs.init()
  maskTel.init()
  scrollTo.init()

})