import * as actionTypes from "./actionTypes";

export function changeCategory(category) {
  return {
    type: actionTypes.CHANGE_CATEGORY,
    payload: category,
  };
}

export function getCategorieesSuccess(categories){
    return{type:actionTypes.GET_CATEGORIES_SUCCESS,payload:categories}
}


export function getCategories() {
  return function (dispatch) {
    let url = "hhttp://localhost:3004/categories";
    return fetch(url)
      .then(response => response.json())
      .then(result => dispatch(getCategorieesSuccess(result)));
  };
}