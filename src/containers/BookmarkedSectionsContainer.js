import {connect} from 'react-redux'
import {actions} from '../reducers/bookmarkedReducer'
import BookmarkedSections from '../components/BookmarkedSections'

const mapState = state => {
  const {bookmarkedSections} = state.bookmarked

  return {
  	bookmarkedSectionsInState: bookmarkedSections.length > 0,
  	bookmarkedSections: bookmarkedSections
  }
}

const mapDispatch = dispatch => {
  return {
  	deleteBookmarkedSection: id => {
  		dispatch(actions.deleteBookmarkedSection(id))
  	},

  	retrieveCachedBookmarkedSections: () => {
  		const cachedBookmarkedSections = JSON.parse(localStorage.getItem('bookmarkedSections'))

  		dispatch(actions.setBookmarkedSections(cachedBookmarkedSections))
  	}
  }
}

export default connect(
  mapState, mapDispatch
)(BookmarkedSections)
