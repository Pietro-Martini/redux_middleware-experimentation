import React from 'react'

export default function SearchForm (props) {
  return (
    <div className='search-form'>
      <input type='text' onChange={
    		e => props.fetchSection(e.target.value)
    	} />
    </div>
  )
}
