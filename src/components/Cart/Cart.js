import React from 'react';

const Cart = (props) => {

  
  const cart = props.cart;
  
  const total = cart.reduce((total, prd) => (total + prd.price) , 0);
  let shipping = 0;
  if (total > 35) {
    shipping = 0;
  }
  else if (total > 15 ){
    shipping = 4.99;
  }
  else if (total > 0){
    shipping = 12.99;
  }

  const tax = total / 10;
  const grandTotal = (total + shipping + tax);

  const formatNumber = (num) => {
    const value = num.toFixed(2);
    return value;
  }
  return (
    <div>
      <h3>Order Summary: {cart.length}</h3>
      <p>Product price: {total} </p>
      <p><small>Shipping Cost: {shipping}</small></p>
      <p>Total price: {formatNumber(grandTotal)} </p>
    </div>
  );
};

export default Cart;