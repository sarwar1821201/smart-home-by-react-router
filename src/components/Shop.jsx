import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductsCard from './ProductsCard';
import { addToDb } from '../utiles/fakeDb';
import { useContext } from 'react';
import { ProductContext } from './Home';

const Shop = () => {

//    const productData= useLoaderData();
//    console.log(productData);

   const productsData=useContext(ProductContext)

    const handleAddToCart= (id)=>{
       // console.log(id)


        addToDb(id)
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