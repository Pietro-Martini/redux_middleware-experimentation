import {connect} from 'react-redux'
import SearchForm from '../components/SearchForm'

import {actions} from '../reducers/sectionsReducer'

const mapState = state => {
  return {
    sectionSearchTerm: state.sections.sectionSearchTerm
  }
}

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
  mapState, mapDispatch
)(SearchForm)
