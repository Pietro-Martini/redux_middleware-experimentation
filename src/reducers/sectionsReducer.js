import getDateElsFromTimestamp from '../helpers/getDateElsFromTimestamp'
import createActionCreator from '../helpers/createActionCreator'

const initialState = () => ({
  sections: [],
  minSectionYear: 2000,
  maxSectionYear: 2018
})

export const select = {
  selectYearsFromSections: sections => {
    return sections.map(({webPublicationDate}) => {
      return getDateElsFromTimestamp(webPublicationDate).year
    })
  }
}

export const types = {
  FETCH_SECTIONS: 'FETCH_SECTIONS',
  SET_SECTIONS: 'SET_SECTIONS',
  SET_MIN_SECTION_YEAR: 'SET_MIN_SECTION_YEAR',
  SET_MAX_SECTION_YEAR: 'SET_MAX_SECTION_YEAR'
}

const createSectionsActionCreators = createActionCreator(types)

export const actions = {

  fetchSection: createSectionsActionCreators(
    types.FETCH_SECTIONS,
    payload => `/search?q=${encodeURI(payload)}&`
  ),

  setSection: createSectionsActionCreators(
    types.SET_SECTIONS,
    payload => payload.response.results
  ),

  setMinSectionYear: createSectionsActionCreators(types.SET_MIN_SECTION_YEAR),
  setMaxSectionYear: createSectionsActionCreators(types.SET_MAX_SECTION_YEAR)

}

export default function sectionsReducer (state = initialState(), {payload, type}) {
  switch (type) {
    case types.SET_SECTIONS:
    case types.SET_MIN_SECTION_YEAR:
    case types.SET_MAX_SECTION_YEAR:
      return {
        ...state,
        ...payload
      }
      break
    default:
      return state
  }
}
