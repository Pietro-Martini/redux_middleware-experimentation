import {connect} from 'react-redux'
import SearchForm from '../components/SearchForm'

import {actions} from '../reducers/sectionsReducer'

const mapDispatch = dispatch => {
  return {

    fetchSection: () => {
      dispatch(actions.fetchSection())
    },

    setSectionSearchTerm: searchTerm => {
      dispatch(actions.setSectionSearchTerm(searchTerm))
    }

  }
}

export default connect(
  null, mapDispatch
)(SearchForm)
