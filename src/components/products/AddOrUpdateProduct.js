import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getProducts } from '../../redux/actions/productActions'
import { getCategories } from '../../redux/actions/categoryActions'
import ProductDetail from '../products/ProductDetail'
function AddOrUpdateProduct({
  products,
  categories,
  getCategories,
  getProducts,
  saveProduct,
  history,
  ...props
}) {
  const [product, setProduct] = useState({ ...props.product })
  useEffect(() => {
    if (categories.length === 0) {
      getCategories()
    }
    setProduct({ ...props.product })
  }, [props.product]) //dom'a product yereşince döngü durmakta.

  function handleCahnge(event) {
    const { name, value } = event.target //event.target içerisindeki name ve valueyi ata.
    setProduct((previousProduct) => ({
      //statedeki product
      ...previousProduct, // extend et yani üstüne yaz.
      [name]: name === 'categoryId' ? parseInt(value, 10) : value, //name == categoryId ise integer'a cvir degilse value olarak al.
    }))
  }

  function handleSave(event) {
    event.preventDefault()
    saveProduct(product).then(() => {
      //kaydettikten sonra daha önce geldigimiz sayfalara yönlendirmek.
      history.push('/')
    })
  }

  return (
    <ProductDetail
      product={product}
      categories={categories}
      onChange={handleCahnge}
      onSave={handleSave}
    />
  )
}

export function getProductById(products, productId) {
  let product = products.find((product) => product.id === productId) || null
  return product
}

function mapStatetToProps(state, ownProps) {
  const productId = ownProps.match.params.productId //paremetrelere bak productId yi çek.
  const product =
    productId && state.productReducer.length > 0 //productId ve Reducerdaki productId 0'dan buyukse
      ? getProductById(state.productListReducer, productId) //Reducerdaki product Id yi ve productId'yi veriyorum, uygun product'u ver.
      : {} // ya da ekle
  return {
    product,
    products: state.productListReducer,
    categories: state.categoryListReducer,
  }
}

const mapDispatchToProps = {
  getProducts,
  getCategories,
}

export default connect(mapDispatchToProps, mapStatetToProps)(AddOrUpdateProduct)
