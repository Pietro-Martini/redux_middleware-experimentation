import {baseUrl, apiKey} from '../constants/constants'

export default function selectUrl (state) {
  const {currentPage, resultsPerPage} = state.pagination
  const {sectionSearchTerm} = state.sections

  return `${baseUrl}/search?q=${encodeURI(sectionSearchTerm)}&api-key=${apiKey}&page=${currentPage}&page-size=${resultsPerPage}`
}
