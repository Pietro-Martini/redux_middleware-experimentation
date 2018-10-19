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
      const endpoint = action.payload.sections

      dispatch(apiActions.apiRequest({
        url: `${baseUrl}${endpoint}${apiKey}`,
        method: 'GET',
        successFn: res => {
          dispatch(sectionActions.setSection(res))

          const state = getState()

          dispatch(sectionActions.setMinSectionYear(
            Math.min(...select.selectYearsFromSections(state.sections.sections))
          ))

          dispatch(sectionActions.setMaxSectionYear(
            Math.max(...select.selectYearsFromSections(state.sections.sections))
          ))
        }
      }))
      break
  }
}

export default sectionsMiddleware
