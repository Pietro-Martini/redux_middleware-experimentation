import createActionCreator from '../helpers/createActionCreator'
import createReducer from '../helpers/createReducer'
import range from '../helpers/range'

const initialState = () => ({
  currentPage: 1,
  resultsPerPage: select.selectResultsPerPage()[0],
  maxPage: 100
})

export const select = {
  selectResultsPerPage: () => {
    const RESULTS_PER_PAGE_BASE = 10

    return range(1, 5).map(n => RESULTS_PER_PAGE_BASE * n)
  }
}

export const types = {
  SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
  SET_MAX_PAGE: 'SET_MAX_PAGE',
  SET_RESULTS_PER_PAGE: 'SET_RESULTS_PER_PAGE'
}

const createPaginationActionCreator = createActionCreator(types)

export const actions = {

  setCurrentPage: createPaginationActionCreator(types.SET_CURRENT_PAGE),
  setMaxPage: createPaginationActionCreator(types.SET_MAX_PAGE),
  setResultsPerPage: createPaginationActionCreator(types.SET_RESULTS_PER_PAGE)

}

export default createReducer(types, initialState())
