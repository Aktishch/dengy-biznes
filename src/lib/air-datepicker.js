import AirDatepicker from 'air-datepicker'
import 'air-datepicker/air-datepicker.css'
import localeRu from 'air-datepicker/locale/ru'

const init = () => {

  const renderCellHandler = ({ date, cellType }) => {

    if (cellType === 'day') {

      return {

        classes: window.excludeDates.includes(+date) ? 'air-datepicker-cell--active' : null,

        attrs: {

          'data-filter-category': window.excludeDates.includes(+date) ? `category-${date.getDate()}-${date.getMonth() + 1}` : 'none'

        }

      }

    }

  }

  const calendar = new AirDatepicker('#calendar', {

    locale: localeRu,
    onRenderCell: renderCellHandler,
    selectedDates: [new Date()]

  })

}

export default { init }