// rafce - react arrow fuction component export

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from './../store/cartSlice'
import Classes from './Cart.module.css'

const CartPage = () => {

    const dispatch = useDispatch();
    const products = useSelector(state => state.cart);
    return (
        <div className='container'>
            <h2 className="line-bottom"><span>Shopping cart</span></h2>
            <table className={Classes.shoppingCartTable}>
                <tbody>
                    {
                        products.map(product => (
                            <tr key={product.id}>
                                <td><img className='cartProductImg' src={product.image} alt={product.title} /></td>
                                <td>
                                    <div>
                                        <h5>{product.title}</h5>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <span>{product.price}</span>
                                        <button className='btn' onClick={() => dispatch(remove(product.id))}>Remove</button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
        </div>
    )
}

export default CartPage;
