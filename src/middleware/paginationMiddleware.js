import {types} from '../reducers/paginationReducer'

import {actions as sectionActions} from '../reducers/sectionsReducer'

const paginationMiddleware = ({dispatch, getState}) => next => action => {
  next(action)

  switch (action.type) {
    case types.SET_CURRENT_PAGE:
    case types.SET_RESULTS_PER_PAGE:
      dispatch(sectionActions.fetchSection())
      break
  }
}

export default paginationMiddleware
