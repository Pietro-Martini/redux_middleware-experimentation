import React from 'react'

export default function Sections ({sections}) {
  return sections.length
    ? (
      <ul>
        {sections.map(({webTitle, webUrl, webPublicationDate}) => (
          <li>
            <h1>
              <a href={webUrl}>{webTitle}</a>
              <h3>{webPublicationDate}</h3>
            </h1>
          </li>
        ))}
      </ul>
    )
    : <p>No Sections Available...</p>
}
