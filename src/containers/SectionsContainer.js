import {connect} from 'react-redux'
import Sections from '../components/Sections'

import {actions} from '../reducers/sectionsReducer'

const mapState = state => {
  return {
  	sections: state.sections.sections
  }
}

export default connect(
  mapState
)(Sections)
