import React,{createContext, useState} from "react"


import bag from "../picture/bag.jpg"
import camera from "../picture/camera.jpg"
import iphone from "../picture/iphone.jpg"
import headphones from "../picture/headphones.jpg"
import sunglass from "../picture/sunglass.jpg"
import ukelele from "../picture/ukelele.jpg"
import watch from "../picture/watch.jpg"
import shoes from "../picture/shoes.jpg"


/* products context as variable */
export const ProductsContext = createContext();

const ProductsContextProvider = (props) =>{
    /* variable products  And we can update the products*/
    console.log("asd")
    fetch ("../components/item.json").then((e) =>{
        console.log(e)
    }).catch((e) =>{
        console.log(e) 
    });
    const[products] =useState([
        {id:1, name: 'School Bag', price: 500, image: bag, status:'new'},
        {id:2, name: 'DSLR Camera', price: 45000, image: camera, status:'new'},
        {id:3, name: 'Iphone X', price: 130000, image: iphone, status:'hot'},
        {id:4, name: 'Head Phone', price: 1900, image: headphones, status:'hot'},
        {id:5, name: 'Sun Glass', price: 400, image: sunglass, status:'new'},
        {id:6, name: 'Ukelele', price: 6000, image: ukelele, status:'hot'},
        {id:7, name: 'Wrist Watch', price: 1100, image: watch, status:'new'},
        {id:8, name: 'Nike Shoe', price: 1500, image: shoes, status:'new'},
    ]);
        return(
            /* pass the value to objects objects will pass the data  */
                <ProductsContext.Provider value={{products: [...products]}}>
                    {props.children}
                </ProductsContext.Provider>

    )
}
export default ProductsContextProvider;