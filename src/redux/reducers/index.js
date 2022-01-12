import { combineReducers } from 'redux'
import changeCategoryReducer from './changeCategoryReducer'
import categoryListReducer from './categoryListReducer'
import productListReducer from './productListReducer'
// reducerları bir araya getiririz.

const rootReducer = combineReducers({
  productListReducer,
  changeCategoryReducer,
  categoryListReducer,
})

export default rootReducer
