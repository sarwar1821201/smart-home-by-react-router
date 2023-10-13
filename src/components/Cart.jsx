import React from 'react';
import { getStoredCart } from '../utiles/fakeDb';
import { useLoaderData } from 'react-router-dom';

const Cart = () => {

    // const pData= useLoaderData();
    // //console.log(pData)
    //  let cart= [];
    // // const cartData= localStorage.getItem('shopping-cart');
    // // console.log(cartData)
     
    // const savedCart =getStoredCart();

    // for (let id in savedCart){
    //    let foundProduct= pData.find ( product=> product.id === id )
    //    if(foundProduct){
    //     foundProduct.quantity= savedCart[id];
    //      cart.push(foundProduct);
    //    }
    // }
  
    // console.log(cart)

    const {initialCart} = useLoaderData();
    console.log(initialCart)

    return (
        <div>
            <h2>hello</h2>
        </div>
    );
};

export default Cart;