import {connect} from 'react-redux'
import SortOptions from '../components/SortOptions'

import {actions} from '../reducers/filterReducer'

const mapState = state => {
  return {
  	sortByTermVal: state.filter.sortSectionsAscDesc,
  	sectionsInState: state.sections.sections.length > 0
  }
}

const mapDispatch = dispatch => {
  return {
  	setSortSectionsAscDesc: order =>
  		dispatch(actions.setSortSectionsAscDesc(order))
  }
}

export default connect(
  mapState, mapDispatch
)(SortOptions)
