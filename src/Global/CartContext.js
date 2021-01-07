// using hook uses stat use reducer
import React, {createContext, useReducer} from "react"
import {CartReducer} from "./CartReducer"
export const CartContext = createContext();

const CartContextProvider =(props) =>
{    //creating a object for the cart reducer   
    // it returns all the parameter in the  belowobject in  bracket   
    const [cart, dispatch] = useReducer(CartReducer, {shoppingCart: [],
         totalPrice:0, qty:0});

    return(
        <CartContext.Provider value={{...cart, dispatch}}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;