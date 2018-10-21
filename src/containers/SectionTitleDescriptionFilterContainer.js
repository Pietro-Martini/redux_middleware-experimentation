import {connect} from 'react-redux'
import SectionTitleDescriptionFilter from '../components/SectionTitleDescriptionFilter'
import {actions} from '../reducers/filterReducer'

const mapDispatch = dispatch => {
  return {
    setTerm: term => dispatch(actions.setTerm(term))
  }
}

export default connect(
  null, mapDispatch
)(SectionTitleDescriptionFilter)
