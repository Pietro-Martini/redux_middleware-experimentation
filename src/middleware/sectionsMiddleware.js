import {
  actions as sectionActions,
  types as sectionTypes
} from '../reducers/sectionsReducer'
import {
  actions as filterActions
} from '../reducers/filterReducer'
import {select} from '../reducers/sectionsReducer'
import {actions as apiActions} from '../reducers/apiReducer'
import {actions as paginationActions} from '../reducers/paginationReducer'

import selectUrl from '../selectors/selectUrl'

const sectionsMiddleware = ({dispatch, getState}) => next => action => {
  next(action)

  switch (action.type) {
    case sectionTypes.FETCHAPI_SECTIONS:
      dispatch(apiActions.apiRequest({
        url: selectUrl(getState()),
        method: 'GET',
        successFn: res => {
          const {results, pages} = res.response

          dispatch(sectionActions.setSection(results))

          dispatch(paginationActions.setMaxPage(pages))

          const sectionYears = select.selectYearsFromSections(results)
          const minSectionYear = Math.min(...sectionYears)
          const maxSectionYear = Math.max(...sectionYears)

          dispatch(filterActions.setMinYear(minSectionYear))

          dispatch(sectionActions.setMinSectionYear(minSectionYear))
          dispatch(sectionActions.setMaxSectionYear(maxSectionYear))
        }
      }))
      break
  }
}

export default sectionsMiddleware
