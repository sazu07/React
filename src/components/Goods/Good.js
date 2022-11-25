import React from 'react';
import './Good.css'

const Good = (props) => {
    const{id, name,price,ratings, seller,img}=props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <p>{name}</p>
            <p>Price:{price}</p>
            <p>Ratings:{ratings}</p>
            <button onClick={()=>props.HandleAddToCart(props.product)}>Add to cart</button>
        </div>
    );
};

export default Good;