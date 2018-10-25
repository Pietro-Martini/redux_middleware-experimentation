import React from 'react'

const SectionPublicationYearFilter = ({
  yearFilter,
  sectionPublicationYearRange,
  setMinYear
}) => (
  <select value={yearFilter} onChange={e => setMinYear(e.target.value)}>
    {sectionPublicationYearRange.map(y => (
      <option value={y}>{y}</option>
    ))}
  </select>
)

export default SectionPublicationYearFilter
