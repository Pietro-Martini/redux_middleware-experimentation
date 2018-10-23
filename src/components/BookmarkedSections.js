import React from 'react'

const BookmarkedSections = ({bookmarkedSectionsInState, bookmarkedSections}) => {
  return bookmarkedSectionsInState && (
  	<div className='bookmarked-sections'>
      <h1>Bookmarked Sections</h1>
      <ul className='bookmarked-sections'>
      {bookmarkedSections.map(({webTitle, webUrl}) => (
          <li className='bookmarked-section'>
          <a href={webUrl}><h1>{webTitle}</h1></a>
        </li>
      	))}
    </ul>
  	</div>
  )
}

export default BookmarkedSections
