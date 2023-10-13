import React from 'react';
import { getStoredCart } from '../utiles/fakeDb';
import { useLoaderData } from 'react-router-dom';
import CartItem from './CartItem';

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
    //console.log(initialCart)

    let total = 0
    if (initialCart.length > 0) {
      for (const product of initialCart) {
        total = total + product.price * product.quantity
      }
    }
  

    return (
        <div className='flex min-h-screen items-start justify-center bg-gray-100 text-gray-900'>
            <div className='flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 '>
            <h2 className='text-xl font-semibold'>
          {initialCart.length ? 'Review Cart Items' : 'Cart is EMPTY!'}
        </h2>

        <ul className='flex flex-col divide-y divide-gray-700'>
          {initialCart.map(product => (
            <CartItem
              key={product.id}
              product={product}
            //   handleRemoveItem={handleRemoveItem}
            />
          ))}
        </ul>

        <p>{total}</p>

            </div>
        </div>
    );
};

export default Cart;