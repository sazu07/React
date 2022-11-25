import React, { useEffect, useState } from 'react';
import './Shop.css'
const Shop = () => {

    const[products, setProducts]=useState([]);
    useEffect(()=>{
        fetch('product.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
        
    },[])
    return (
        <div className='shop-container'>
            <div className='product-container'>
              {
                products.map(product=>console.log(product))
              }
            </div>
            <div className='cart-container'>
                <h1>gfgfg</h1>
            </div>
        </div>
    );
};

export default Shop;