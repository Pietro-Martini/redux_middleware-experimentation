import {types, actions} from '../reducers/apiReducer'

const apiMiddleware = ({dispatch}) => next => action => {
  if (action.type !== types.API_REQUEST) {
    return next(action)
  }

  const {url, body, successFn, method} = action.meta

  fetch(url, {method})
    .then(res => res.json())
    .then(res => successFn(res))
    .catch(err => console.log(err))
}

export default apiMiddleware
