import includes from '../helpers/includes'

import {actions, types} from '../reducers/bookmarkedReducer'

const bookmarkedMiddleware = ({dispatch, getState}) => next => action => {
  next(action)

  const {payload, type} = action

  const state = getState()

  if (type === types.ADD_BOOKMARKED_SECTION) {
  	const {bookmarkedSection} = payload
  	const {bookmarkedSections} = state.bookmarked

  	dispatch(actions.setBookmarkedSections(
  		[...bookmarkedSections, bookmarkedSection]
  	))
  }

  if (type === types.DELETE_BOOKMARKED_SECTION) {

  }
}

export default bookmarkedMiddleware
