export const CartReducer=(state, action) =>{
    //state consists of full object in cartcontext so 
    const {shoppingCart, totalPrice, qty}=state;
    
    // lets define the variable and check the product in shoppping cart

    let product;
    let index;
    let updatedPrice;
    let updatedQty;



    switch(action.type){
        case 'ADD_TO_CART':
// find function will check and run the individual loop  for below individual object
            const check=shoppingCart.find(product => product.id === action.id);
            if (check){
                return state;
            } else{
                product = action.product;
                product['qty'] =1;
                updatedQty =qty + 1;
                updatedPrice= totalPrice + product.price;
        //lets replace that whole object below in return
                return {shoppingCart:[product, ...shoppingCart], totalPrice: 
                updatedPrice, qty: updatedQty}
            }

            break;
            case 'INCREASE':
                product=action.cart;
                product.qty= product.qty + 1;
                updatedPrice=totalPrice+ product.price;
                updatedQty= qty+1;
                index=shoppingCart.findIndex(cart=> cart.id === action.id);
                shoppingCart[index] = product;
                return{shoppingCart:[...shoppingCart], totalPrice: updatedPrice,
                qty: updatedQty}
             break;
            case 'DECREASE':
                product =action.cart;
                if (product.qty>1)
                {
                    product.qty=product.qty -1;
                    updatedPrice=totalPrice - product.price;
                    updatedQty = qty- 1;
                    index=shoppingCart.findIndex(cart=> cart.id === action.id);
                    shoppingCart[index] = product;
                    return{shoppingCart:[...shoppingCart], totalPrice: updatedPrice, qty: updatedQty}
                }
                else
                {
                    return state;
                }  
                break;
            case 'DELETE':
                   
                    const filtered= shoppingCart.filter(product => product.id !== action.id)
                        product = action.cart;
                        updatedQty = qty - product.qty;
                        updatedPrice = totalPrice-product.price * product.qty;
                        return {shoppingCart: [...filtered], totalPrice: updatedPrice, qty: updatedQty}
                        break;

            default:
                return state;

    }

}