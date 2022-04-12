import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const   Shop = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useState([]);

    useEffect(() => {
        // console.log('Local storage first line', products)
        const storedCart = getStoredCart();
        // console.log(storedCart);
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id)
            // console.log(addedProduct)
            
        }
        // console.log('Local strorage finished')
    },[products])

    const handleAddToCart = (product) => {
        
        // do not do this cart.push(product);
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
      }

    return (
        <div className='shop-container'>
            <div className="products-container">
             {
                 products.map(product =><Product 
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    ></Product>)
             }
            </div>
            <div className="cart-container">
               <Cart cart={cart}>
                   <Link to="/orders">
                       <button>Review Order</button>
                   </Link>
               </Cart>

            </div>
        </div>
    );
};

export default Shop;