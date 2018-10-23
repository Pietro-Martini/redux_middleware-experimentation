import {
  actions as sectionActions,
  types as sectionTypes
} from '../reducers/sectionsReducer'

import {
  actions as filterActions
} from '../reducers/filterReducer'

import {select} from '../reducers/sectionsReducer'

import {actions as apiActions} from '../reducers/apiReducer'
import {baseUrl, apiKey} from '../constants/constants'

const sectionsMiddleware = ({dispatch, getState}) => next => action => {
  next(action)

  switch (action.type) {
    case sectionTypes.FETCHAPI_SECTIONS:
      const state = getState()

      const searchTerm = action.payload.sectionSearchTerm || state.sections.sectionSearchTerm
      const sectionPg = action.payload.sectionPg || state.pagination.currentPage

      dispatch(apiActions.apiRequest({
        url: `${baseUrl}/search?q=${encodeURI(searchTerm)}&api-key=${apiKey}&page=${sectionPg}`,
        method: 'GET',
        successFn: res => {
          dispatch(sectionActions.setSection(res))

          const state = getState()

          const sectionYears = select.selectYearsFromSections(state.sections.sections)
          const minSectionYear = Math.min(...sectionYears)
          const maxSectionYear = Math.max(...sectionYears)

          console.log(minSectionYear)

          dispatch(filterActions.setMinYear(minSectionYear))

          dispatch(sectionActions.setMinSectionYear(minSectionYear))

          dispatch(sectionActions.setMaxSectionYear(maxSectionYear))
        }
      }))
      break
  }
}

export default sectionsMiddleware
