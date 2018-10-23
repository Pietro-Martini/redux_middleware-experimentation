import React from 'react'

import sortOptions from '../options/sortOptions'

export default function SortOptions (props) {
  return props.sectionsInState && (
    <div className='sort-options'>
      <h1>Sort Options</h1>
      <div className='sort-by-term'>
        <select value={props.sortByTermVal} onChange={e => props.setSortSectionsAscDesc(e.target.value)}>
          {sortOptions.map(o => <option value={o}>{o}</option>)}
        </select>
      </div>
    </div>
  )
}
