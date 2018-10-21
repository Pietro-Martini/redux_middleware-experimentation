import createActionCreator from '../helpers/createActionCreator'
import getDateElsFromTimestamp from '../helpers/getDateElsFromTimestamp'
import includes from '../helpers/includes'

const initialState = () => ({
  minYear: 2000,
  term: ''
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
  }
}

export const types = {
  SET_MIN_YEAR: 'SET_MIN_YEAR',
  SET_TERM: 'SET_TERM'
}

const createFilterActionCreator = createActionCreator(types)

export const actions = {
  setMinYear: createFilterActionCreator(types.SET_MIN_YEAR),
  setTerm: createFilterActionCreator(types.SET_TERM)
}

export default function filterReducer (state = initialState(), {payload, type}) {
  switch (type) {
    case types.SET_MIN_YEAR:
    case types.SET_TERM:
      return {
        ...state,
        ...payload
      }
      break
    default:
      return state
  }
}
