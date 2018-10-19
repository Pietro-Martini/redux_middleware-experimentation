import {connect} from 'react-redux'
import SectionPublicationYearFilter from '../components/SectionPublicationYearFilter'

import {actions} from '../reducers/filterReducer'

const mapState = state => {
  return {}
}

const mapDispatch = dispatch => {
  return {}
}

export default connect(
  mapState, mapDispatch
)(SectionPublicationYearFilter)
