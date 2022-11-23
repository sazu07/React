import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './shop.css'
const Shop = () => {
    const [products, setProduct]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
         .then(data=> setProduct(data))
    },[])
   
    return (
        <div className='Shop-container'>
            <div className="product-container">
                  {
                    products.map(product=> <Product 
                        key={product.id}
                        product={product}
                    
                    ></Product>)
                  }                                     
            </div>
            <div className="cart-container">
                        <h1>this is cart</h1>
            </div>
        </div>
    );
};

export default Shop;