import includes from '../helpers/includes'

import {actions, types} from '../reducers/bookmarkedReducer'

const bookmarkedMiddleware = ({dispatch, getState}) => next => action => {
  next(action)

  const {payload, type} = action

  const state = getState()

  const {bookmarkedSections} = state.bookmarked

  const updateBookmarkedSections = updatedBookmarkedSections => {
    const bookmarkedSectionLocalStorageRepr = JSON.stringify(updatedBookmarkedSections)
    localStorage.setItem('bookmarkedSections', bookmarkedSectionLocalStorageRepr)
    dispatch(actions.setBookmarkedSections(updatedBookmarkedSections))
  }

  if (type === types.ADD_BOOKMARKED_SECTION) {
    const {bookmarkedSection} = payload

    const updatedBookmarkedSections = [...bookmarkedSections, bookmarkedSection]

    updateBookmarkedSections(updatedBookmarkedSections)
  }

  if (type === types.DELETE_BOOKMARKED_SECTION) {
    const bookmarkedSectionId = payload.bookmarkedSection

    const updatedBookmarkedSections = bookmarkedSections.filter(
      ({id}) => id !== bookmarkedSectionId
    )

    updateBookmarkedSections(updatedBookmarkedSections)
  }
}

export default bookmarkedMiddleware
