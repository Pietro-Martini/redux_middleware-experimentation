import createActionCreator from '../helpers/createActionCreator'

const initialState = () => ({
  bookmarkedSections: []
})

export const types = {
  ADD_BOOKMARKED_SECTION: 'ADD_BOOKMARKED_SECTION',
  SET_BOOKMARKED_SECTIONS: 'SET_BOOKMARKED_SECTIONS',
  DELETE_BOOKMARKED_SECTION: 'DELETE_BOOKMARKED_SECTION'
}

const createBookmarkedActionCreators = createActionCreator(types)

export const actions = {

  addBookmarkedSection: createBookmarkedActionCreators(types.ADD_BOOKMARKED_SECTION),
  setBookmarkedSections: createBookmarkedActionCreators(types.SET_BOOKMARKED_SECTIONS),
  deleteBookmarkedSection: createBookmarkedActionCreators(types.DELETE_BOOKMARKED_SECTION)

}

export default function bookmarkedReducer (state = initialState(), {payload, type}) {
  switch (type) {
    case types.SET_BOOKMARKED_SECTIONS:
      return {
        ...state,
        ...payload
      }
      break
    default:
      return state
  }
}
