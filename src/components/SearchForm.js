import React from 'react'

export default function SearchForm (props) {
  return (
    <div className='search-form'>
      <h1>Search Form</h1>
      <input type='text' onChange={
    		e => props.fetchSection(e.target.value)
    	} />
    </div>
  )
}
