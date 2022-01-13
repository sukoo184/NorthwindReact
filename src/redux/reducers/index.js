import { combineReducers } from 'redux'
import changeCategoryReducer from './changeCategoryReducer'
import categoryListReducer from './categoryListReducer'
import productListReducer from './productListReducer'
import cartReducer from './cartReducer'

// reducerları bir araya getiririz.

const rootReducer = combineReducers({
  productListReducer,
  changeCategoryReducer,
  categoryListReducer,
  cartReducer,
})

export default rootReducer
