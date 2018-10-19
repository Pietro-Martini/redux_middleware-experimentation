import React from 'react'

export default function Sections ({sections}) {
  return sections.length
    ? (
      <ul>
        {sections.map(({webTitle, webUrl}) => (
          <li>
            <h1>
              <a href={webUrl}>{webTitle}</a>
            </h1>
          </li>
        ))}
      </ul>
   	)
    : <p>No Sections Available...</p>
}
