import { combineReducers } from 'redux'

import oneReducer from './oneReducer'
import twoReducer from './twoReducer'

const rootReducer = combineReducers({
  one: oneReducer,
  two: twoReducer,
})

export default rootReducer
