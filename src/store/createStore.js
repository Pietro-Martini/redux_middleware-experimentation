import errorReducer from '../reducers/errorReducer'
import uiReducer from '../reducers/uiReducer'
import sectionsReducer from '../reducers/sectionsReducer'
import filterReducer from '../reducers/filterReducer'

import apiMiddleware from '../middleware/apiMiddleware'
import sectionsMiddleware from '../middleware/sectionsMiddleware'
import errorMiddleware from '../middleware/errorMiddleware'

import {createStore, combineReducers, applyMiddleware} from 'redux'

const createStoreMiddleware = applyMiddleware(
  apiMiddleware, errorMiddleware, sectionsMiddleware
)(createStore)

const store = createStoreMiddleware(
  combineReducers({
	  error: errorReducer,
	  ui: uiReducer,
	  sections: sectionsReducer,
	  filter: filterReducer
  })
)

export default store
