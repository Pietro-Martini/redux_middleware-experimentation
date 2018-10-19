import includes from '../helpers/includes'

import {actions} from '../reducers/uiReducer'

const uiMiddleware = ({dispatch}) => next => action => {
  next(action)

  if (includes(action.type, 'FETCHAPI')) {
  	dispatch(actions.setLoaderShown(true))
  }

  if (includes(action.type, 'SETAPI')) {
  	dispatch(actions.setLoaderShown(false))
  }
}

export default uiMiddleware
