import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductsCard from './ProductsCard';

const Shop = () => {

   const productData= useLoaderData();
//    console.log(productData);

    return (
        <div className='product-container'>

            {
                productData.map(product =>  <ProductsCard  
                 
                key={product.id}
                product={product}
                >
                </ProductsCard> 
                )}
            
        </div>
    );
};

export default Shop;