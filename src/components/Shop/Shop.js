import React, { useEffect, useState } from 'react';
import Good from '../Goods/Good';
import './shop.css'
const Shop = () => {

    const[products, setProducts]=useState([]);
    const [cart, SetCart]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
        console.log(products)
    },[]);
    const HandleAddToCart=(product)=>{
         console.log(product);
         const newProduct=[...cart, product];
         SetCart(newProduct);
    }

    

    return (
        <div className='shop-container'>
            <div className='product-container'>
              {
                products.map(product=><Good 
                    product={product} 
                    HandleAddToCart={HandleAddToCart}
                    key={product.id}
                    ></Good>)
              }
            </div>
            <div className='cart-container'>
                <h1>Cart Calculation</h1>
                <h1>Selected Items:{cart.length}</h1>
            </div>
        </div>
    );
};

export default Shop;