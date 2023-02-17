// Libraries
import fancybox from './lib/fancybox'

// Scripts
import progressLine from './ts/progress-line'
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
  progressLine.init()
  theme.init()
  animation.init()
  waved.init()
  listing.init()
  accordion.init()
  formSubmit.init()
  inputs.init()
  maskTel.init()

})