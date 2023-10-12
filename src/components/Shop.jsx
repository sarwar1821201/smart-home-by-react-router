import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Shop = () => {

   const productData= useLoaderData();
   console.log(productData);

    return (
        <div>
            
        </div>
    );
};

export default Shop;