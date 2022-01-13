import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
} from 'reactstrap'
import { bindActionCreators } from 'redux'
import * as cartActioans from '../../redux/actions/cartActions'

function CartSummary(props) {
  function renderEmpty() {
    return (
      <NavItem>
        <NavLink>Sepetiniz Boş</NavLink>
      </NavItem>
    )
  }
  function renderSummary() {
    return (
      <Nav className="me-auto" navbar>
        <UncontrolledDropdown inNavbar nav>
          <DropdownToggle caret nav>
            Options
          </DropdownToggle>
          <DropdownMenu>
            {props.cart.map((cartItem) => (
              <DropdownItem key={cartItem.product.id}>
                <Badge
                  color="danger"
                  onClick={() => props.actions.removeFromCart(cartItem.product)}
                >
                  -
                </Badge>
                {cartItem.product.productName}
                {console.log(cartItem.quantity)}
                <Badge color="success">1</Badge>
              </DropdownItem>
            ))}
            <DropdownItem divider />
            <DropdownItem>
              <Link to={'/cart'}>Sepete Git</Link>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    )
  }

  return <div>{props.cart.length > 0 ? renderSummary() : renderEmpty()}</div>
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActioans.removeFromCart, dispatch),
    },
  }
}

function mapStatetToProps(state) {
  return {
    cart: state.cartReducer,
  }
}

export default connect(mapStatetToProps, mapDispatchToProps)(CartSummary)
