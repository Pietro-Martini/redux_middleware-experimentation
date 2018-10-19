import React from 'react'

export default function SectionPublicationYearFilter (props) {
  return props.sectionsInState && (
  	<select>
      {props.sectionPublicationYearRange.map(y => (
        <option value={y}>{y}</option>
      ))}
    </select>
  )
}
