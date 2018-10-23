import {connect} from 'react-redux'
import Sections from '../components/Sections'

import {actions as bookmarkedActions} from '../reducers/bookmarkedReducer'

import {select} from '../reducers/filterReducer'

import stripNonAlphaNumericChars from '../helpers/stripNonAlphaNumericChars'
import compose from '../helpers/compose'

const mapState = state => {
  const {minYear, term, sortSectionsAscDesc} = state.filter
  const {sections} = state.sections

  const filterSectionsMinYearSet = select.filterSectionsByMinYear(minYear)
  const filterSectionsTermSet = select.filterSectionsByTerm(term)

  const sortSectionsAscDescSet = select.sortSectionsAscDesc(sortSectionsAscDesc, (x, y) => {
    const xTitle = x.webTitle
    const yTitle = y.webTitle

    const [alphaNumOnlyTitleX, alphaNumOnlyTitleY] = [xTitle, yTitle].map(stripNonAlphaNumericChars)

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

const mapDispatch = dispatch => {
  return {
    addBookmarkedSection: sectionProps => {
      dispatch(bookmarkedActions.addBookmarkedSection(sectionProps))
    }
  }
}

export default connect(
  mapState, mapDispatch
)(Sections)
