import {connect} from 'react-redux'
import Sections from '../components/Sections'

import {actions} from '../reducers/sectionsReducer'

import {select} from '../reducers/filterReducer'

import getDateElsFromTimestamp from '../helpers/getDateElsFromTimestamp'
import compose from '../helpers/compose'

const mapState = state => {
  const filterSectionsMinYearSet = select.filterSectionsByMinYear(state.filter.minYear)
  const filterSectionsTermSet = select.filterSectionsByTerm(state.filter.term)

  const applyFilterFns = compose(
    filterSectionsMinYearSet,
    filterSectionsTermSet
  )

  return {
  	sections: applyFilterFns(state.sections.sections)
  }
}

export default connect(
  mapState
)(Sections)
