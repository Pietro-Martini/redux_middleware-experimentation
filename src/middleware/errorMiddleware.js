import {types as errorTypes, actions as errorActions} from '../reducers/errorReducer'
import {actions as uiActions} from '../reducers/uiReducer'

const reset = dispatch => () => {
  dispatch(uiActions.setLoader(false))
}

const errorMiddleware = ({dispatch}) => next => action => {
  const resetOnSetError = reset(dispatch)

  next(action)

  switch (action.type) {
    case errorTypes.SET_ERROR:
      resetOnSetError()
      break
  }
}

export default errorMiddleware
