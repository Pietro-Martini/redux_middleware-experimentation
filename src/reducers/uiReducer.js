import createActionCreator from '../helpers/createActionCreator'
import createReducer from '../helpers/createReducer'

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

export default createReducer(types, initialState())
