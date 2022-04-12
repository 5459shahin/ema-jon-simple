import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Product.css'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {handleAddToCart} = props;
    const {name, img, seller, price, ratings} = props.product;
     
   

    return (
        <div className='product'>
          <img src={img} alt=""></img>
          <div className='product-info'>
          <p className='product-name'>{name}</p>
          <p>price: ${price}</p>
          <p> <small>Seller: {seller}</small> </p>
          <p><small>Ratings: {ratings} stars 5</small> </p>
          </div>
          <button onClick={ () => props.handleAddToCart(props.product)} className='btn-cart' >
            <p className='btn-tex'>Add toCart </p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
          </button>
            
        </div>
    );
};

export default Product;