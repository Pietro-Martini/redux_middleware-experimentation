import createActionCreator from '../helpers/createActionCreator'

const initialState = () => ({
  loaderShown: false
})

export const types = {
  SET_LOADER_SHOWN: 'SET_LOADER_SHOWN'
}

const createUIActionCreator = createActionCreator(types)

export const actions = {

  setLoaderShown: createUIActionCreator(types.SET_LOADER_SHOWN)

}

export default function uiReducer (state = initialState(), action) {
  const {payload, type} = action

  switch (type) {
    case types.SET_LOADER_SHOWN:
      return {
        ...state,
        ...payload
      }
      break
    default:
      return state
  }
}
