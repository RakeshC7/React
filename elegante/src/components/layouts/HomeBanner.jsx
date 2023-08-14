import bannerImg from '../../assets/image/heroImage.jpg';
import Button from '../UI/Button';
import './HomeBanner.css';

const HomeBanner = () => {
    return (
        <section className='bannerSection'>
            <div className='bannerInfo'>
                <h1>Shop <br /> New <br /> Arrivals</h1>
                <Button type='link' className='dangerButton' href='#'>shop now</Button>
            </div>
            <div className='bannerImageWrapper'>
                <img src={bannerImg} alt='banner image' />
            </div>
        </section>
    )
}

export default HomeBanner
