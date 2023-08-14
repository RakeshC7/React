import './ProductCard.css';
import Button from '../UI/Button';


const ProductCard = (props) => {
    return (
        <div>
            <div className='productCardImg'>
                <img src={props.src} alt={props.alt} />
            </div>
            <div className='cardContent'>
                <h4>{props.title}</h4>
                <p className='productCardDesc'>{props.description}</p>
                <Button type='link' href={props.href}>shop now</Button>
            </div>
        </div>
    )
}

export default ProductCard
