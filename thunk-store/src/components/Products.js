import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { add } from '../store/cartSlice';
import { fetchProducts } from '../store/productSlice';

const Products = () => {
    // const PRODUCT_URL = 'https://fakestoreapi.com/products';

    const dispatch = useDispatch();
    const { data: products, status } = useSelector(state => state.product);
    // const [products, setProducts] = useState([]);
    useEffect(() => {
        dispatch(fetchProducts());
        // const fetchProducts = async () => {
        //     const res = await fetch(PRODUCT_URL);
        //     const data = await res.json();
        //     setProducts(data);
        // }
        // fetchProducts();
    }, [])

    const handleAdd = (product) => {
        // dispatch(add(product));
        console.log(product);
    }
    return (
        <div>
            <ul className='productGrid'>
                {
                    products.map((product) => (
                        <li key={product.id} className='produCard'>
                            <div className='productImg' style={{ backgroundImage: `url(${product.image})` }}>
                                <button className='addToCart' onClick={() => handleAdd(product)}></button>
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
