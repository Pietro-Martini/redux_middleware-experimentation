import React from 'react'

export default class SearchForm extends React.Component {
	handleSubmit = e => {
		e.preventDefault()
		this.props.fetchSection()
	}

	handleChange = e => this.props.setSectionSearchTerm(e.target.value)

	render = () => {
		return (
	    <div className='search-form'>
	      <h1>Search Form</h1>
	      <form onSubmit={this.handleSubmit}>
		      <input type='text' onChange={this.handleChange} />
		      <input type='submit' value='Submit' />
	      </form>
	    </div>
	  )
	}
}
