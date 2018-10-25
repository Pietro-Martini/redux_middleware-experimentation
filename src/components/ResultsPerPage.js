import React from 'react'

export default function ResultsPerPage ({resultsPerPage, resultsPerPageOptions, setResultsPerPage}) {
  return (
    <div className='results-per-page'>
      <select value={resultsPerPage} onChange={e => setResultsPerPage(e.target.value)}>
        {resultsPerPageOptions.map(o => <option value={o}>{o}</option>)}
      </select>
    </div>
  )
}
