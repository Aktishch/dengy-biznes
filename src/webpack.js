// Libraries
import fancybox from './lib/fancybox'

// Scripts
import scrollHeader from './ts/scroll-header'
import mobileMenu from './ts/mobile-menu'
import progressLine from './ts/progress-line'
import scrollTo from './ts/scroll-to'
import theme from './ts/theme'
import animation from './ts/animation'
import waved from './ts/waved'
import listing from './ts/listing'
import accordion from './ts/accordion'
import formSubmit from './ts/form-submit'
import inputs from './ts/inputs'
import maskTel from './ts/mask-tel'

// Style
import './scss/index.scss'

// Connection
window.addEventListener('DOMContentLoaded', () => {

  fancybox.init()
  scrollHeader.init()
  mobileMenu.init()
  progressLine.init()
  scrollTo.init()
  theme.init()
  animation.init()
  waved.init()
  listing.init()
  accordion.init()
  formSubmit.init()
  inputs.init()
  maskTel.init()

})