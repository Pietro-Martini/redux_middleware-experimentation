import React from 'react'

const Pagination = ({
  currentPage, setCurrentPage, prevPages, nextPages,
  handlePrevArrowClick, handleNextArrowClick,
  showPrevArrow
}) => (
  <div className='pagination'>
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
      <p onClick={() => handleNextArrowClick(currentPage)}>&#x2192;</p>
    </div>
  </div>
)

export default Pagination
