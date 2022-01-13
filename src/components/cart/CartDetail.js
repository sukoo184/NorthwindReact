import React from 'react'
import { bindActionCreators } from 'redux'
import * as cartActions from '../../redux/actions/cartActions'
import { connect } from 'react-redux'
import { Badge, Button, Table } from 'reactstrap'

function CartDetail(props) {
  return (
    <div>
      {console.log(props.cartItem)}
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
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.cart?.map((cartItem) => (
            <tr key={cartItem?.product.id}>
              <th scope="row">{cartItem?.product.id}</th>
              <td>{cartItem.product.productName}</td>
              <td>{cartItem.product.unitPrice}</td>
              <td>{cartItem.quantity}</td>
              <td>
                <Button
                  color="danger"
                  onClick={() => this.removeFromCart(cartItem.product)}
                >
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
    },
  }
}
function mapStatetToProps(state) {
  return {
    actions: {
      cart: state.cartReducer,
    },
  }
}
export default connect(mapStatetToProps, mapDispatchToProps)(CartDetail)
