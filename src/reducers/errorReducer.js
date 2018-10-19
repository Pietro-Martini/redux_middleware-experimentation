const initialState = () => ''

export const types = {
  SET_ERROR: 'SET_ERROR'
}

export const actions = {

  setError: err => ({
  	type: types.SET_ERROR,
    payload: err
  })

}

export default function errorReducer (state = initialState(), {payload, type}) {
  switch (type) {
    case types.SET_ERROR:
      return payload
      break
    default:
      return state
  }
}
