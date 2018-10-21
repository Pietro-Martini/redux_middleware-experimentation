import {connect} from 'react-redux'
import Sections from '../components/Sections'

import {actions} from '../reducers/sectionsReducer'

import {select} from '../reducers/filterReducer'

import getDateElsFromTimestamp from '../helpers/getDateElsFromTimestamp'
import compose from '../helpers/compose'

const mapState = state => {
  const {minYear, term} = state.filter
  const {sections} = state.sections

  const filterSectionsMinYearSet = select.filterSectionsByMinYear(minYear)
  const filterSectionsTermSet = select.filterSectionsByTerm(term)

  return {
  	sections: compose(
      filterSectionsMinYearSet,
      filterSectionsTermSet
    )(sections)
  }
}

export default connect(
  mapState
)(Sections)
