import includes from '../helpers/includes'

import {actions, types} from '../reducers/paginationReducer'
import {actions as sectionActions} from '../reducers/sectionsReducer'

const paginationMiddleware = ({dispatch, getState}) => next => action => {
  next(action)

  if (action.type === types.SET_CURRENT_PAGE) {
    const {currentPage} = action.payload
    dispatch(sectionActions.fetchSection(null, currentPage))
  }

}

export default paginationMiddleware
