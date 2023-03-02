import AirDatepicker from 'air-datepicker'
import 'air-datepicker/air-datepicker.css'
import localeRu from 'air-datepicker/locale/ru'
// import touchDevice from '../ts/functions/touch-device'

const init = () => {

  const excludeDates = [

    new Date(2023, 3, 10),
    new Date(2023, 3, 7),
    new Date(2023, 3, 5)

  ]

  const renderCellHandler = ({ date, cellType }) => {

    if (cellType === 'day') {

      return {

        classes: excludeDates.includes(date) ? 'datepicker-cell--red' : null,

        // attrs: {

        //   // 'data-filter-category': date

        // }

      }

    }

  }

  const calendar = new AirDatepicker('#calendar', {

    locale: localeRu,
    onRenderCell: renderCellHandler

  })

}

export default { init }