import createActionCreator from '../helpers/createActionCreator'
import createReducer from '../helpers/createReducer'

const initialState = () => ({
  currentPage: 1
})

export const types = {
  SET_CURRENT_PAGE: 'SET_CURRENT_PAGE'
}

const createPaginationActionCreator = createActionCreator(types)

export const actions = {

  setCurrentPage: createPaginationActionCreator(types.SET_CURRENT_PAGE)

}

export default createReducer(types, initialState())
