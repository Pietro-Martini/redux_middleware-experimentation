import errorReducer from '../reducers/errorReducer'
import uiReducer from '../reducers/uiReducer'
import sectionsReducer from '../reducers/sectionsReducer'
import filterReducer from '../reducers/filterReducer'
import paginationReducer from '../reducers/paginationReducer'
import bookmarkedReducer from '../reducers/bookmarkedReducer'

import apiMiddleware from '../middleware/apiMiddleware'
import sectionsMiddleware from '../middleware/sectionsMiddleware'
import errorMiddleware from '../middleware/errorMiddleware'
import uiMiddleware from '../middleware/uiMiddleware'
import paginationMiddleware from '../middleware/paginationMiddleware'
import bookmarkedMiddleware from '../middleware/bookmarkedMiddleware'

import {createStore, combineReducers, applyMiddleware} from 'redux'

const createStoreMiddleware = applyMiddleware(
  apiMiddleware, errorMiddleware, sectionsMiddleware,
  uiMiddleware, paginationMiddleware, bookmarkedMiddleware
)(createStore)

const store = createStoreMiddleware(
  combineReducers({
	  error: errorReducer,
	  ui: uiReducer,
	  sections: sectionsReducer,
	  filter: filterReducer,
	  pagination: paginationReducer,
	  bookmarked: bookmarkedReducer
  })
)

export default store
