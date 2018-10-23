import React from 'react'
import PaginationContainer from '../containers/PaginationContainer'

export default function Sections ({sections, addBookmarkedSection}) {
  return sections.length
    ? (
      <div className='sections'>
        <ul>
          {sections.map(({id, webTitle, webUrl, webPublicationDate}) => (
            <li>
              <h1>
                <a href={webUrl}>{webTitle}</a>
              </h1>
              <h3>{webPublicationDate}</h3>
              <p onClick={
                () => addBookmarkedSection({id, webTitle, webUrl})
              }>Add to Favorites</p>
            </li>
          ))}
        </ul>
        <PaginationContainer />
      </div>
    )
    : <p>No Sections Available...</p>
}
