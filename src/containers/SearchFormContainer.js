import {connect} from 'react-redux'
import SearchForm from '../components/SearchForm'

import {actions} from '../reducers/sectionsReducer'

const mapState = state => {
  return {}
}

const mapDispatch = dispatch => {
  return {
  	fetchSection: sectionName => {
  		dispatch(actions.fetchSection(sectionName))
  	}
  }
}

export default connect(
  mapState, mapDispatch
)(SearchForm)
