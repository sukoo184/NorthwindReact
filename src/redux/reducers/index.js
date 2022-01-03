import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer"

import categoryListReducer from "./categoryListReducer"
// reducerları bir araya getiririz.


const rootReducer = combineReducers({
    changeCategoryReducer,
    categoryListReducer
})

export default rootReducer;