import React from 'react'
import PaginationContainer from '../containers/PaginationContainer'

export default function Sections ({sections}) {
  return sections.length
    ? (
      <div className='sections'>
        <ul>
          {sections.map(({webTitle, webUrl, webPublicationDate}) => (
            <li>
              <h1>
                <a href={webUrl}>{webTitle}</a>
              </h1>
              <h3>{webPublicationDate}</h3>
            </li>
          ))}
        </ul>
        <PaginationContainer />
      </div>
    )
    : <p>No Sections Available...</p>
}
