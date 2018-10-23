import getDateElsFromTimestamp from '../helpers/getDateElsFromTimestamp'
import createActionCreator from '../helpers/createActionCreator'

const initialState = () => ({
  sectionSearchTerm: '',
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
  FETCHAPI_SECTIONS: 'FETCHAPI_SECTIONS',
  SETAPI_SECTIONS: 'SETAPI_SECTIONS',
  SET_SECTION_SEARCH_TERM: 'SET_SECTION_SEARCH_TERM',
  SET_MIN_SECTION_YEAR: 'SET_MIN_SECTION_YEAR',
  SET_MAX_SECTION_YEAR: 'SET_MAX_SECTION_YEAR'
}

const createSectionsActionCreators = createActionCreator(types)

export const actions = {

  fetchSection: (sectionSearchTerm, sectionPg) => {
    return {
      type: types.FETCHAPI_SECTIONS,
      payload: {
        sectionSearchTerm,
        sectionPg
      }
    }
  },

  setSection: createSectionsActionCreators(
    types.SETAPI_SECTIONS,
    payload => payload.response.results
  ),

  setSectionSearchTerm: createSectionsActionCreators(types.SET_SECTION_SEARCH_TERM),
  setMinSectionYear: createSectionsActionCreators(types.SET_MIN_SECTION_YEAR),
  setMaxSectionYear: createSectionsActionCreators(types.SET_MAX_SECTION_YEAR)

}

export default function sectionsReducer (state = initialState(), {payload, type}) {
  switch (type) {
    case types.SETAPI_SECTIONS:
    case types.SET_SECTION_SEARCH_TERM:
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
