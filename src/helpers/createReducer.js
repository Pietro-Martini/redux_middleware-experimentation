import values from '../helpers/values'

const createReducer = (types, initialState) => (state = initialState, {payload, type}) => {
  const applies = values(types).indexOf(type) !== -1

  if (applies) {
    return {...state, ...payload}
  }
  return state
}

export default createReducer
