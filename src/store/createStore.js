import errorReducer from '../reducers/errorReducer'
import uiReducer from '../reducers/uiReducer'
import sectionsReducer from '../reducers/sectionsReducer'
import filterReducer from '../reducers/filterReducer'
import paginationReducer from '../reducers/paginationReducer'

import apiMiddleware from '../middleware/apiMiddleware'
import sectionsMiddleware from '../middleware/sectionsMiddleware'
import errorMiddleware from '../middleware/errorMiddleware'
import uiMiddleware from '../middleware/uiMiddleware'
import paginationMiddleware from '../middleware/paginationMiddleware'

import {createStore, combineReducers, applyMiddleware} from 'redux'

const createStoreMiddleware = applyMiddleware(
  apiMiddleware, errorMiddleware, sectionsMiddleware,
  uiMiddleware, paginationMiddleware
)(createStore)

const store = createStoreMiddleware(
  combineReducers({
	  error: errorReducer,
	  ui: uiReducer,
	  sections: sectionsReducer,
	  filter: filterReducer,
    pagination: paginationReducer
  })
)

export default store
