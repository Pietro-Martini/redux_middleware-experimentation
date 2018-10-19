import {connect} from 'react-redux'
import React, { Component } from 'react'
import Error from './components/Error'
import Loader from './components/Loader'
import SearchFormContainer from './containers/SearchFormContainer'
import SectionsContainer from './containers/SectionsContainer'

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
		<SectionsContainer />    		    	
		<Error error={this.props.error} />
		<Loader loaderShown={this.props.loaderShown}/>
	</div>
  )
}

export default connect(
  mapState, mapDispatch
)(App)
