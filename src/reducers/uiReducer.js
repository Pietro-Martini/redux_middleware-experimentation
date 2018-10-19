export const types = {
  SET_LOADER: 'SET_LOADER'
}

export const actions = {

  setLoader: shown => ({
  	type: types.SET_LOADER,
    payload: shown
  })

}

export default function uiReducer (state = {
  loaderShown: false
}, action) {
  const {payload, type} = action

  switch (type) {
    case types.SET_LOADER:
      return {
        ...state,
        loaderShown: payload
      }
      break
    default:
      return {
        ...state
      }
  }
}
