import React from 'react'

import SectionPublicationYearFilterContainer from '../containers/SectionPublicationYearFilterContainer'
import SectionTitleDescriptionFilterContainer from '../containers/SectionTitleDescriptionFilterContainer'

export default function FilterForm (props) {
  return (
    <React.Fragment>
      <h1>Filter Form</h1>
      <SectionPublicationYearFilterContainer />
      <SectionTitleDescriptionFilterContainer />
    </React.Fragment>
  )
}
