import React, {useContext} from "react" 
import StripeCheckout from "react-stripe-checkout"
import {CartContext} from "../Global/CartContext" 
import Products from "./Products";

const Cart=() => {
    const {shoppingCart, totalPrice, qty, dispatch}= useContext(CartContext);
    const handleToken=(token) => {
        console.log(token);
// recieves token as parameter 
    }
    console.log(shoppingCart);
    return(
        <div className="cart-container">
            <div className="cart-details " style={{marginTop:'100px'}}>
                {shoppingCart.length >0 ? 
                    shoppingCart.map( cart =>(
                        <div  className="cart" key={cart.id}>
                            <span className="cart-image">< img src={cart.image} alt="not found"/></span>
                            < span className= "cart-product-name "> {cart.name}</span>
                            <span className= "cart-product-price"> Rs {cart.price} .00</span>
                            {/* dispalaying increment items */}
                            <span className="inc" onClick= {()=>dispatch({type:'INCREASE', id:cart.id,cart})}>     
                                <i className="fas fa-plus"></i></span>
                            <span className="product-quantity">{cart.qty}</span>
                            <span className="dec" onClick={()=> dispatch({type: 'DECREASE', id: cart.id,cart})}>
                                <i className="fas fa-minus"></i></span>
                            <span className="product-total-price">Rs: {cart.price * cart.qty}.00</span>
                            <span className="delete-product" onClick={()=> dispatch ({type: 'DELETE', id: cart.id, cart})}>
                                <i class="fas fa-trash-alt"></i></span>
                            </div>

                    ))
                
                 : <div className="empty">Please Buy the items in Cart</div>}
         </div>
             {shoppingCart.length > 0 ? <div className="cart-summary"> 
                        <div className="summary">
                            <h3>Item Details</h3>
                            <div className="total-items"> 
                                <div className="items">Total Items:</div>
                                <div className="items-count">{qty}</div>
                            </div>
                            <div className="total-price-selection">  
                            <div className="just-title" > Total Price:</div>
                            <div className="items-price">Rs: {totalPrice} .00</div>
                            </div>
                            <div className="stripe-section">
                                    <StripeCheckout
                                    stripeKey="pk_test_51HXtdGGCsryKLI9tw1km5kjiC7pKmAetCBbRG3AHsdoJafOCUaGCsto9XVnGwn3lnycJjjQTGboGqZYSkfLt4PgS00j6pikpKB"
                                    token={handleToken}
                                    billingAddress
                                    shippingAddress
                                    amount={totalPrice}
                                    name="All products"
                                    >
                                    </StripeCheckout>
                            </div>
                         </div>
                </div>: ''}  
        </div>

    )


}
export default Cart;
