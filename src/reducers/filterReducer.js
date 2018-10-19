import createActionCreator from '../helpers/createActionCreator'
import getDateElsFromTimestamp from '../helpers/getDateElsFromTimestamp'

const initialState = () => ({
  minYear: 2000
})

export const select = {
  filterSectionsByMinYear: minYear => sections => {
    return sections.filter(({webPublicationDate}) => {
      return getDateElsFromTimestamp(webPublicationDate).year >= minYear
    })
  }
}

export const types = {
  SET_MIN_YEAR: 'SET_MIN_YEAR'
}

const createFilterActionCreator = createActionCreator(types)

export const actions = {
  setMinYear: createFilterActionCreator(types.SET_MIN_YEAR)
}

export default function filterReducer (state = initialState(), {payload, type}) {
  switch (type) {
    case types.SET_MIN_YEAR:
      return {
        ...state,
        ...payload
      }
      break
    default:
      return state
  }
}
