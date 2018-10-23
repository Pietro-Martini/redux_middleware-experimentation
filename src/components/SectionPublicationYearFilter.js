import React from 'react'

const SectionPublicationYearFilter = ({
  yearFilter,
  sectionPublicationYearRange,
  sectionsInState,
  setMinYear
}) => (
  sectionsInState && (
  	<select value={yearFilter} onChange={e => setMinYear(e.target.value)}>
      {sectionPublicationYearRange.map(y => (
        <option value={y}>{y}</option>
      ))}
    </select>
  )
)

export default SectionPublicationYearFilter
