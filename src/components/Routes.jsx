import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Customers from '../pages/Customers';
import Products from "../pages/Products";
import Discount from "../pages/Discount";
import Categories from "../pages/Categories";
import Inventory from "../pages/Inventory";
import Settings from "../pages/Settings";
import Orders from "../pages/Orders";
import Analytics from "../pages/Analytics";
const Routes = () => {
    return (
    <Switch>
      <Route exact path='/' component={Dashboard}/>
      <Route path="/customers" component={Customers}/>
      <Route path="/products" component={Products}/>
      <Route path="/discount" component={Discount}/>
      <Route path="/categories" component={Categories}/>
      <Route path="/inventory" component={Inventory}/>
      <Route path="/settings" component={Settings}/>
      <Route path="/orders" component={Orders}/>
      <Route path="/analytics" component={Analytics}/>
    </Switch>
  );
}

export default Routes;
