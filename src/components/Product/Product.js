import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
  const {img, name, seller, price, stock} = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h3 className="product-name">{name}</h3>
        <br />
        <p><small>by: {seller} </small></p>
        <p>$ {price}</p>
        <br />
        <p>Only {stock} available</p>
        <button className="main-button" onClick={() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faCartShopping} />add to cart</button>
      </div>
      
    </div>
  );
};

export default Product;