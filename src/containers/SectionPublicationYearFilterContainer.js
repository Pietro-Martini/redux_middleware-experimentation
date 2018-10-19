import {connect} from 'react-redux'
import SectionPublicationYearFilter from '../components/SectionPublicationYearFilter'

import {actions} from '../reducers/filterReducer'

import range from '../helpers/range'

const mapState = state => {
  const {sections, minSectionYear, maxSectionYear} = state.sections

  return {
  	sectionPublicationYearRange: range(minSectionYear, maxSectionYear),
  	sectionsInState: sections.length > 0
  }
}

const mapDispatch = dispatch => {
  return {
  	setMinYear: year => {
  		dispatch(actions.setMinYear(year))
  	}
  }
}

export default connect(
  mapState, mapDispatch
)(SectionPublicationYearFilter)
