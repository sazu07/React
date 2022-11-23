import React from 'react';
import './Product.css'
const Product = (props) => {
    console.log(props)
    const {id,name,img,price,ratings,seller}=props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
             <p>{name}</p>
              <span>Manufacturer:{seller}</span>
        </div>
    );
};

export default Product;