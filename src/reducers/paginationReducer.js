import createActionCreator from '../helpers/createActionCreator'

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

export default function uiReducer (state = initialState(), action) {
  const {payload, type} = action

  switch (type) {
    case types.SET_CURRENT_PAGE:
      return {
        ...state,
        ...payload
      }
      break
    default:
      return state
  }
}
