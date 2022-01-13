import * as actionsTypes from '../actions/actionTypes.js'
import initialState from './initialState.js'

export default function cartReducer(state = initialState.cart, action) {
  switch (action.type) {
    case actionsTypes.ADD_TO_CART:
      var addedItem = state.find(
        (c) => c.product.id === action.payload.product.id,
      ) //Sepetteki product'un id'si gönderdigim actionun payloadında var mı? varsa=>
      if (addedItem) {
        var newState = state.map((cartItem) => {
          //cartItem daki product'ın id'si aksiyondaki id de varsa quantity'yi 1 arttır.
          if (cartItem.product.id === action.payload.product.id) {
            debugger
            return Object.assign({}, addedItem, {
              quantity: addedItem.quantity + 1,
            })
          }
          return cartItem
          //                       ||      ||                         ||
          //                      \||/    \||/                       \||/
          //                       \/      \/                         \/
          //                    Kapya  , Gönderilen parametre , Cart'ta bulunan addedItem'in quantity'sini 1 arttır.
        })
        return newState
      } else {
        return [...state, { ...action.payload, quantity: state.quantity - 1 }] // Arrayın kopyasını alıp eklemek.
        //          ||         |
        //         \||/        ---> o kopyaya action ile gelen payload'ı ekle.
        //          \/
        //  State'in bir kopyazını al.
      }
    case actionsTypes.REMOVE_FROM_CART:
      const newState2 = state.filter(
        (cartItem) => cartItem.product.id !== action.payload.id,
      )
      return newState2
    default:
      return state
  }
}
