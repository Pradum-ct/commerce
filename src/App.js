
import React from 'react';

import './App.css';
// putting short name of browser router as router
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import ProductsContextProvider from "./Global/ProductsContext"
import Products from "./components/Products"
import Cart from "./components/Cart"
import NotFound from "./components/NotFound"
import CartContextProvider from "./Global/CartContext"
function App() {
  return (
    <div>
        <ProductsContextProvider>
          <CartContextProvider>
          <Router>
          <Navbar/>
          
            <Switch>
              <Route path="/" exact component={Products} />
              <Route path="/cart" exact component={Cart} />
              <Route component={NotFound} />
            </Switch>
            
          </Router>
          </CartContextProvider>
        
        </ProductsContextProvider>
    </div>
  );
}


export default App ;