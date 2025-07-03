import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import moment from 'moment'

import './App.css'
import Check from './Check'
import Choose from './Choose'
import Home from './Home'
import ScrollToTop from './ScrollToTop'
import Start from './Start'
import Redirect from './Redirect'
import Deposit from './Deposit'
import Loading from './Loading'
import Random from './Random'
import Publication from './Publication'
import AllOrders from './AllOrders'
import Products from './Products'
import OrderProduct from './OrderProduct'
import Clients from './Clients'
import OrderUserHistory from './OrderUserHistory'
import OrderServer from './OrderProduct/orderServer'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: 0,
    }
  }

  render() {
    return (
      <div>
        <Route path="/" exact render={(match) => <Home />} />
        <Route path="/orders" exact render={(match) => <Home />} />
        <Route path="/all_orders" exact render={(match) => <AllOrders />} />
        <Route path="/products" exact render={(match) => <Products />} />
        <Route path="/clients" exact render={(match) => <Clients />} />
        <Route path="/order_product/:id/:status/:item/" exact render={(props) => <OrderProduct {...props} />} />
        <Route path="/order_product_server/:id/:status/" exact render={(props) => <OrderServer {...props} />} />
        <Route path="/order_user/:id/:name/" exact render={(props) => <OrderUserHistory {...props} />} />
        
      </div>
    )
  }
}
