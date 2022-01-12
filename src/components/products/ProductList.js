import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Badge, Table } from 'reactstrap'
import { bindActionCreators } from 'redux'
import * as productActions from '../../redux/actions/productActions'

function ProductList(props) {
  useEffect(() => {
    props.actions.getProducts()
  })

  return (
    <div>
      <h2>
        <Badge color="warning"> Product</Badge>
        <Badge color="success">{props.currentCategory.categoryName}</Badge>
      </h2>
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Quantity In Stock</th>
            <th>Units In Stock</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((product) => (
            <tr key={product.id}>
              <th scope="row">{product.id}</th>
              <td>{product.productName}</td>
              <td>{product.unitPrice}</td>
              <td>{product.quantityPerUnit}</td>
              <td>{product.unitsInStock}</td>
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
    },
  }
}

export default connect(mapStatetToProps, mapDispatchToProps)(ProductList)
