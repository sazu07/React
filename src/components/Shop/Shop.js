import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Good from '../Goods/Good';
import './shop.css'
const Shop = () => {

    const[products, setProducts]=useState([]);
    const [cart, SetCart]=useState([]);

    
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))

    },[]);

    useEffect(()=>{
     const storedCart =   getStoredCart();
      const savedCart=[];
       for(const id in storedCart ){
          const addedProduct=products.find(product=>product.id===id);
          if(addedProduct){
            const quantity=storedCart[id]
            addedProduct.quantity=quantity;
            savedCart.push(addedProduct)
          }
          
       }
       SetCart(savedCart)
    },[products])
 
    const HandleAddToCart=(product)=>{
         
         const newProduct=[...cart, product];
         SetCart(newProduct);
         addToDb(product.id);
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
                <Cart cart={cart}></Cart>
                
            </div>
        </div>
    );
};

export default Shop;