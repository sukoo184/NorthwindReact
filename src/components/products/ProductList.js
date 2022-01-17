import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Badge, Button, Table } from 'reactstrap'
import { bindActionCreators } from 'redux'
import * as productActions from '../../redux/actions/productActions'
import * as cartActioans from '../../redux/actions/cartActions'
import alertify from 'alertifyjs'
import { Link } from 'react-router-dom'

function ProductList(props) {
  useEffect(() => {
    props.actions.getProducts()
  })
  let addToCart = (product) => {
    props.actions.addToCart({ quantiti: 1, product })
    alertify.success(product.productName + ' sepete eklendi.')
  }

  return (
    <div>
      <h2>
        <Badge color="warning"> Product</Badge>
        <Badge color="success">{props.currentCategory.categoryName}</Badge>
      </h2>
      <Table hover>
        <thead>
          <tr
            style={{
              background: 'linear-gradient(45deg, #FF569A ,#FFAAFF)',
              border: 0,
              borderRadius: 20,
              padding: '14px 30px',
            }}
          >
            <th>#</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Quantity In Stock</th>
            <th>Units In Stock</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((product) => (
            <tr key={product.id}>
              <th scope="row">{product.id}</th>
              <td>
                <Link to={'/saveProduct/' + product.id}>
                  {product.productName}
                </Link>
              </td>
              <td>{product.unitPrice}</td>
              <td>{product.quantityPerUnit}</td>
              <td>{product.unitsInStock}</td>
              <td>
                <Button color="success" onClick={() => addToCart(product)}>
                  ADD
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}
function mapStatetToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addToCart: bindActionCreators(cartActioans.addToCart, dispatch),
    },
  }
}

export default connect(mapStatetToProps, mapDispatchToProps)(ProductList)
