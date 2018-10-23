import {connect} from 'react-redux'
import BookmarkedSections from '../components/BookmarkedSections'

const mapState = state => {
  const {bookmarkedSections} = state.bookmarked

  return {
  	bookmarkedSectionsInState: bookmarkedSections.length > 0,
  	bookmarkedSections: bookmarkedSections
  }
}

export default connect(
  mapState
)(BookmarkedSections)
