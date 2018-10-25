import getDateElsFromTimestamp from '../helpers/getDateElsFromTimestamp'
import createActionCreator from '../helpers/createActionCreator'
import createReducer from '../helpers/createReducer'

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

  fetchSection: () => {
    return {
      type: types.FETCHAPI_SECTIONS
    }
  },

  setSection: createSectionsActionCreators(types.SETAPI_SECTIONS),
  setSectionSearchTerm: createSectionsActionCreators(types.SET_SECTION_SEARCH_TERM),
  setMinSectionYear: createSectionsActionCreators(types.SET_MIN_SECTION_YEAR),
  setMaxSectionYear: createSectionsActionCreators(types.SET_MAX_SECTION_YEAR)

}

export default createReducer(types, initialState())
