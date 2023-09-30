import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/productSlice';
import { add } from './../store/cartSlice'

const Products = () => {

    const dispatch = useDispatch();
    const { data: products, status } = useSelector(state => state.product);

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    return (
        <div>
            <ul className='productGrid'>
                {
                    products.map((product) => (
                        <li key={product.id} className='produCard'>
                            <div className='productImg' style={{ backgroundImage: `url(${product.image})` }}>
                                <button className='addToCart' onClick={() => dispatch(add(product))}></button>
                            </div>
                            <div className='productDesc'>
                                <p className='productTitle'>{product.title}</p>
                                <div className='d-flex justify-spacebetween vertical-middle'>
                                    <span className='productPrice'>${product.price}</span>
                                    <span className='productRating'>{product.rating.rate}</span>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Products
