import React, { createContext, useState } from 'react';
import Header from './Header';
import { Outlet, useLoaderData, useNavigation } from 'react-router-dom';
import Footer from './Footer';

 export  const ProductContext = createContext([])
  export const CartContext = createContext([])

const Home = () => {
    const navigation= useNavigation();
  
     const { products, initialCart }=useLoaderData();
     const [cart,setCart] =useState(initialCart)
    // console.log(initialCart)

    return (
        
          <ProductContext.Provider value={products}  >
              <CartContext.Provider value={[cart,setCart]} >

              <Header></Header>

          <div className=' justify-center  items-center'>
     {
        navigation.state=== 'loading' ? 'Loading....' : ' '
     }
        </div>

      <div className='min-h-[calc(100vh-341px)]' >
      <Outlet></Outlet>

      </div>

       <Footer></Footer>

              </CartContext.Provider>
          </ProductContext.Provider>
        
    );
};

export default Home;