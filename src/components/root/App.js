import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CardText, Container } from 'reactstrap'
import CartDetail from '../cart/CartDetail'
import Navi from '../navi/Navi'
import Dashboard from './Dashboard'

function App() {
  return (
    <Container>
      <Navi />

      <Switch>
        <Route path="/cart" component={CartDetail} />
        <Route path="/" component={Dashboard} />
        <Route path="/product" component={Dashboard} />
      </Switch>
    </Container>
  )
}

export default App
