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
  	sectionsInState: state.sections.sections.length > 0	
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

	renderComponentsForTransformingSections = sectionsInState => {
		return sectionsInState
	  	? (
	  	<React.Fragment>	  		
			<FilterFormContainer />
			<SortOptionsContainer />
	  	</React.Fragment>  		
	  	)
	  	: null
	}

  render = () => {
  	const {sectionsInState} = this.props

  	const containersDependentOnSectionsInState = this.renderComponentsForTransformingSections(sectionsInState)

  	return (
	<div className='app'>
		<div className='forms'>
			<SearchFormContainer />
			{containersDependentOnSectionsInState}
		</div>
		<div className='main'>
			<SectionsContainer />
			<BookmarkedSectionsContainer />
		</div>			
		<Error error={this.props.error} />
		<Loader loaderShown={this.props.loaderShown}/>
	</div>
  	)
  }
}

export default connect(
  mapState, mapDispatch
)(App)
