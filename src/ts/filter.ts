const filtering = (name: string, cards: NodeListOf<Element>): void => {

  cards.forEach((element: Element): void => {

    const card = element as HTMLElement
    const absence: boolean = card.dataset.filterCard != name
    const showAll: boolean = name.toLowerCase() === 'all'

    if (absence && !showAll) {

      card.classList.add('d-none')

    } else {

      card.classList.remove('d-none')
      card.classList.add('filter__card--show')

      setTimeout((): void => card.classList.remove('filter__card--show'), 300)

    }

  })

}

const init = (): void => {

  const filters = document.querySelectorAll('*[data-filter]') as NodeListOf<Element>

  filters.forEach((element: Element): void => {

    const filter = element as HTMLElement

    if (!filter) return

    const categories = filter.querySelectorAll('*[data-filter-category]') as NodeListOf<Element>
    const cards = filter.querySelectorAll('*[data-filter-card]') as NodeListOf<Element>

    const currentCard = (category: HTMLElement): void => {

      const name: string = String(category.dataset.filterCategory)

      filtering(name, cards)

    }

    categories.forEach((element: Element): void => {

      const category = element as HTMLElement

      category.addEventListener('click', ((): void => {

        currentCard(category)

      }) as EventListener)

    })

  })

}

export default { init }