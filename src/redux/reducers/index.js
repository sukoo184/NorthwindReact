import { combineReducers } from 'redux'
import changeCategoryReducer from './changeCategoryReducer'
import categoryListReducer from './categoryListReducer'
import productListReducer from './productListReducer'
import cartReducer from './cartReducer'
import saveProductReducer from './saveProductReducer'
// reducerları bir araya getiririz.

const rootReducer = combineReducers({
  productListReducer,
  changeCategoryReducer,
  categoryListReducer,
  cartReducer,
  saveProductReducer,
})

export default rootReducer
