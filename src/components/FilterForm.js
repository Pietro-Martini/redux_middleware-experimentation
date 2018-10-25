import React from 'react'

import SectionPublicationYearFilterContainer from '../containers/SectionPublicationYearFilterContainer'
import SectionTitleDescriptionFilterContainer from '../containers/SectionTitleDescriptionFilterContainer'

export default function FilterForm ({sectionsInState}) {
  return (
    <div className='filter-form'>
      <h1>Filter Form</h1>
      <SectionPublicationYearFilterContainer />
      <SectionTitleDescriptionFilterContainer />
    </div>
  )
}
