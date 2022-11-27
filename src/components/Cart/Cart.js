import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    let total = 0;
    let shipping = 0;
    let tax=0;
    let grandTotal=0;
    let quantity=0;
    for(const product of cart){
        
        total= total+(product.price) * (product.quantity);
        shipping=shipping+product.shipping;
        quantity=quantity+product.quantity;
        tax=(total*(10/100)).toFixed(2);
        grandTotal= total+shipping+parseFloat(tax);
     
        
    }
    
    return (
        <div className='cart-items'>
                  <h1>Cart Calculation</h1>
                  <h3>Selected Items:{quantity}</h3>
                  <p>Total Price:{total}</p>
                  <p>Total Shipping:{shipping}</p>
                  <p>Tax:{tax}</p>
                 <h4>Grand Total:{grandTotal}</h4>
        </div>
    );
};

export default Cart;