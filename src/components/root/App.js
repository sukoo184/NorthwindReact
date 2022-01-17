import React from 'react'
import { BrowserRouter as Route, Switch } from 'react-router-dom'
import { Container } from 'reactstrap'
import CartDetail from '../cart/CartDetail'
import Navi from '../navi/Navi'
import AddOrUpdateProduct from '../products/AddOrUpdateProduct'
import Dashboard from './Dashboard'

function App() {
  return (
    <Container>
      <Navi />
      <Route path="/" component={Dashboard} />
      <Route path="/cart" component={CartDetail} />
      <Route path="/saveProduct/:productId" component={AddOrUpdateProduct} />
      <Route path="/product" component={Dashboard} />
    </Container>
  )
}

export default App
