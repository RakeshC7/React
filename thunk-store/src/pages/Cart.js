// rafce - react arrow fuction component export

import React from 'react';
import { useSelector } from 'react-redux';

const CartPage = () => {

    const products = useSelector(state => state.cart);
    console.log(products);
    return (
        <div className='container'>
            <h2 className="line-bottom"><span>Cart Items</span></h2>
            <ul>
                {
                    products.map(product => (
                        <li key={product.id} className='cartCard'>
                            <img src={product.image} alt={product.title} />
                            <h5>{product.title}</h5>
                            <h5>{product.price}</h5>
                            <button className='btn'>Remove</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default CartPage;
