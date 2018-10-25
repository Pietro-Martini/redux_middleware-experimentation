import {connect} from 'react-redux'
import Pagination from '../components/Pagination'
import {actions as paginationActions} from '../reducers/paginationReducer'
import {actions as sectionsActions} from '../reducers/sectionsReducer'

import range from '../helpers/range'

const mapState = state => {
  const {currentPage, maxPage} = state.pagination

  const PAGINATION_OFFSET = 5

  const prevPageStart = currentPage - PAGINATION_OFFSET
  const nextPageEnd = currentPage + PAGINATION_OFFSET

  const prevPageEnd = currentPage - 1
  const nextPageStart = currentPage + 1

  // add next arrow functionality + move fns into helpers

  return {
    currentPage,
    prevPages: range(prevPageStart, prevPageEnd, n => n > 0),
    nextPages: range(nextPageStart, nextPageEnd, n => n <= maxPage),
    showPrevArrow: currentPage > 1,
    showNextArrow: currentPage < maxPage
  }
}

const mapDispatch = dispatch => {
  const handleArrowClick = incrementAmt => currentPage => {
    const updatedPage = currentPage + incrementAmt
    dispatch(paginationActions.setCurrentPage(updatedPage))
  }

  return {
    setCurrentPage: pageIdx => {
      dispatch(paginationActions.setCurrentPage(pageIdx))
    },
    handlePrevArrowClick: handleArrowClick(-1),
    handleNextArrowClick: handleArrowClick(1)
  }
}

export default connect(
  mapState, mapDispatch
)(Pagination)
