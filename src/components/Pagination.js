import React from 'react'
import ResultsPerPageContainer from '../containers/ResultsPerPageContainer'

const Pagination = ({
  currentPage, setCurrentPage, prevPages, nextPages,
  handlePrevArrowClick, handleNextArrowClick,
  showPrevArrow, showNextArrow
}) => (
  <div className='pagination'>
    <div className='pagination-options'>
      <div className='prev-arrow'>
        {showPrevArrow && <p onClick={() => handlePrevArrowClick(currentPage)}>&#x2190;</p>}
      </div>
      <div className='prev-pages'>
        {prevPages.map(prevPage => <div onClick={() => setCurrentPage(prevPage)}>{prevPage}</div>)}
      </div>
      <div className='current-page'>
        {currentPage}
      </div>
      <div className='next-pages'>
        {nextPages.map(nextPage => <div onClick={() => setCurrentPage(nextPage)}>{nextPage}</div>)}
      </div>
      <div className='next-arrow'>
        {showNextArrow && <p onClick={() => handleNextArrowClick(currentPage)}>&#x2192;</p>}
      </div>
    </div>
    <ResultsPerPageContainer />
  </div>
)

export default Pagination
