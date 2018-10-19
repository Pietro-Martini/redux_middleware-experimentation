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

  const state = getState()

  switch (action.type) {
    case sectionTypes.FETCH_SECTIONS:
      const endpoint = action.payload.sections

      dispatch(apiActions.apiRequest({
        url: `${baseUrl}${endpoint}${apiKey}`,
        method: 'GET',
        successAction: sectionActions.setSection
      }))

      dispatch(sectionActions.setMinSectionYear(
        Math.min(...select.selectYearsFromSections(state.sections.sections))
      ))

      dispatch(sectionActions.setMaxSectionYear(
        Math.max(...select.selectYearsFromSections(state.sections.sections))
      ))
      break
  }
}

export default sectionsMiddleware
