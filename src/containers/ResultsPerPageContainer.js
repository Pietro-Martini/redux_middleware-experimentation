import {connect} from 'react-redux'
import ResultsPerPage from '../components/ResultsPerPage'
import {actions, select} from '../reducers/paginationReducer'

const mapState = state => {
  return {
  		resultsPerPage: state.pagination.resultsPerPage,
  		resultsPerPageOptions: select.selectResultsPerPage()
  }
}

const mapDispatch = dispatch => {
  return {
  		setResultsPerPage: resultsPerPage => dispatch(actions.setResultsPerPage(resultsPerPage))
  }
}

export default connect(
  mapState, mapDispatch
)(ResultsPerPage)
