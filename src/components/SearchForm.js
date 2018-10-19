import React from 'react'

export default class SearchForm extends React.Component {
	state = {searchText: ''}

	handleSubmit = e => {
		e.preventDefault()
		this.props.fetchSection(this.state.searchText)
	}

	handleChange = e => {		
		this.setState({searchText: e.target.value})
	}	

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
