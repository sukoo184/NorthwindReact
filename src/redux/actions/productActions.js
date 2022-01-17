import * as actionTypes from './actionTypes'

export function getProductsSuccess(products) {
  return { type: actionTypes.GET_PRODUCTS_SUCCESS, payload: products }
}

export function createProductSuccess(product) {
  return { type: actionTypes.CREATE_PRODUCT_SUCCESS, payload: product }
}
export function updateProductSuccess(product) {
  return { type: actionTypes.UPDATE_PRODUCT_SUCCESS, payload: product }
}

export function saveProductApi(product) {
  return fetch('http://localhost:3001/products/' + (product.id || ''), {
    method: product.id ? 'PUT' : 'POST',
    headers: { 'content-type': 'application/json' }, //default
    body: JSON.stringify(product), //gönderecegimiz data  stringify=> json formatında stringleştirmek.
  })
    .then(handleResponse) //handleResponse hata alırsa catch calışmaz.
    .catch(handleError)
}

export function saveProduct(product) {
  return function (dispatch) {
    return saveProductApi(product)
      .then((savedProduct) => {
        product.id //product.id varsa update yoksa create.
          ? dispatch(updateProductSuccess(savedProduct))
          : dispatch(createProductSuccess(savedProduct))
      })
      .catch((error) => {
        throw error
      })
  }
}

export async function handleResponse(response) {
  if (response.ok) {
    return response.json()
  }

  const error = await response.text()
  throw new Error(error) // handle responsa error yollar.
}

export function handleError(error) {
  console.log('Bir hata oluştu!!!')
  throw error
}

export function getProducts(categoryId) {
  return function (dispatch) {
    let url = 'http://localhost:3000/products'
    if (categoryId) {
      url = url + '?categoryId=' + categoryId
    }
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getProductsSuccess(result)))
  }
}
