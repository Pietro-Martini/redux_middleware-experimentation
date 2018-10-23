import {connect} from 'react-redux'
import Sections from '../components/Sections'

import {actions} from '../reducers/sectionsReducer'

import {select} from '../reducers/filterReducer'

import getDateElsFromTimestamp from '../helpers/getDateElsFromTimestamp'
import compose from '../helpers/compose'

const mapState = state => {
  const {minYear, term, sortSectionsAscDesc} = state.filter
  const {sections} = state.sections

  const filterSectionsMinYearSet = select.filterSectionsByMinYear(minYear)
  const filterSectionsTermSet = select.filterSectionsByTerm(term)

  const sortSectionsAscDescSet = select.sortSectionsAscDesc(sortSectionsAscDesc, (x, y) => {
    const xTitle = x.webTitle
    const yTitle = y.webTitle

    const [alphaNumOnlyTitleX, alphaNumOnlyTitleY] = [xTitle, yTitle].map(
      title => title.replace(/\W/g, '')
    )

    // add a transform function to remove non-alphanumeric chars

    return alphaNumOnlyTitleX.localeCompare(alphaNumOnlyTitleY)
  })

  return {
    sections: compose(
      filterSectionsMinYearSet,
      filterSectionsTermSet,
      sortSectionsAscDescSet
    )(sections)
  }
}

export default connect(
  mapState
)(Sections)
