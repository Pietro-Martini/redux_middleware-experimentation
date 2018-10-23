import createActionCreator from '../helpers/createActionCreator'
import getDateElsFromTimestamp from '../helpers/getDateElsFromTimestamp'
import includes from '../helpers/includes'

const initialState = () => ({
  minYear: 2000,
  term: '',
  sortSectionsAscDesc: 'DESC'
})

export const select = {
  filterSectionsByMinYear: minYear => sections => {
    return sections.filter(({webPublicationDate}) => {
      return getDateElsFromTimestamp(webPublicationDate).year >= minYear
    })
  },

  filterSectionsByTerm: term => sections => {
    return sections.filter(({webTitle, sectionName}) => includes(
      `${webTitle}${sectionName}`.toLowerCase(),
      term.toLowerCase()
    ))
  },

  sortSectionsAscDesc: (order, sortFn) => sections => {
    const sortedSections = [...sections].sort(sortFn)
    return order === 'DESC' ? sortedSections : sortedSections.reverse()
  }
}

export const types = {
  SET_MIN_YEAR: 'SET_MIN_YEAR',
  SET_TERM: 'SET_TERM',
  SET_SORT_SECTIONS_ASC_DESC: 'SET_SORT_SECTIONS_ASC_DESC'
}

const createFilterActionCreator = createActionCreator(types)

export const actions = {
  setMinYear: createFilterActionCreator(types.SET_MIN_YEAR),
  setTerm: createFilterActionCreator(types.SET_TERM),
  setSortSectionsAscDesc: createFilterActionCreator(types.SET_SORT_SECTIONS_ASC_DESC)
}

export default function filterReducer (state = initialState(), {payload, type}) {
  switch (type) {
    case types.SET_MIN_YEAR:
    case types.SET_TERM:
    case types.SET_SORT_SECTIONS_ASC_DESC:
      return {
        ...state,
        ...payload
      }
      break
    default:
      return state
  }
}
