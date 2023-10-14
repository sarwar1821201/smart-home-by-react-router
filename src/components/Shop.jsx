import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductsCard from './ProductsCard';
import { addToDb } from '../utiles/fakeDb';
import { useContext } from 'react';
import { CartContext, ProductContext } from './Home';

const Shop = () => {

//    const productData= useLoaderData();
//    console.log(productData);

   const productsData=useContext(ProductContext);
   const [cart, setCart] = useContext(CartContext)

    const handleAddToCart= (product)=>{
       // console.log(id)
       let newCart = []
       const exists = cart.find(
        existingProduct => existingProduct.id === product.id
      )

      if (!exists) {
        product.quantity = 1
        newCart = [...cart, product]
      } else {
        const rest = cart.filter(
          existingProduct => existingProduct.id !== product.id
        )
        exists.quantity = exists.quantity + 1
        newCart = [...rest, exists]
      }


     setCart(newCart)
      addToDb(product.id)
    }

    return (
        <div className='product-container'>

            {
                productsData.map(product =>  <ProductsCard  
                 
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
                >
                </ProductsCard> 
                )}
            
        </div>
    );
};

export default Shop;