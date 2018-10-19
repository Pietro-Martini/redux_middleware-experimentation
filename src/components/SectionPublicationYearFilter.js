import React from 'react'

export default function SectionPublicationYearFilter (props) {
  return props.sectionsInState && (
  	<select onChange={e => props.setMinYear(parseInt(e.target.value))}>
      {props.sectionPublicationYearRange.map(y => (
        <option value={y}>{y}</option>
      ))}
    </select>
  )
}
