import {connect} from 'react-redux'
import React, { Component } from 'react'
import Error from './components/Error'
import Loader from './components/Loader'
import SearchFormContainer from './containers/SearchFormContainer'
import FilterFormContainer from './containers/FilterFormContainer'
import SectionsContainer from './containers/SectionsContainer'
import SortOptionsContainer from './containers/SortOptionsContainer'
import BookmarkedSectionsContainer from './containers/BookmarkedSectionsContainer'

const mapState = state => {	
	return {  	
  	error: state.error,
  	loaderShown: state.ui.loaderShown,  	
  }
}

const mapDispatch = dispatch => ({})

class App extends React.Component {
	state = {username: ''}

	handleChange = e => {
		this.setState({
			username: e.target.value
		})
	}

  render = () => (
  	<div className='app'>
		<SearchFormContainer />
		<FilterFormContainer />
		<SectionsContainer />
		<SortOptionsContainer />
		<BookmarkedSectionsContainer />		    	
		<Error error={this.props.error} />
		<Loader loaderShown={this.props.loaderShown}/>
	</div>
  )
}

export default connect(
  mapState, mapDispatch
)(App)
