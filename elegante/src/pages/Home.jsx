import React from 'react';
import Marquee from '../components/DynamicMarquee';
import Button from '../components/UI/Button';
import HomeBanner from '../components/layouts/HomeBanner';
import ProductCard from '../components/layouts/ProductCard';
import Footer from '../components/layouts/common/Footer';
// import InputBox from '../components/UI/InputBox'; 

// import CustomCheckbox from '../components/UI/CustomCheckbox';

const Home = () => {

    const product1 = [
        { title: '1', img: '', description: 'lorem ipsum' },
        { title: '2', img: '', description: 'lorem ipsum lorem ipsum' },
        { title: '3', img: '', description: 'lorem ipsum lorem ipsum' },
    ];

    return <main>
        <Marquee rate='-150' startOnScreen='true'>GET 10% OFF YOUR FIRST ORDER</Marquee>
        <HomeBanner />
        <section className='container'>
            {
                product1.map((product) => (
                    <ProductCard title={product.title} description={product.description} />
                ))
            }
        </section>
        {/* <InputBox placeholder='Name'></InputBox>
        <InputBox placeholder='Email'></InputBox> */}
        {/* <CustomCheckbox id="" /> */}
        {/* <Button type='submit'>Submit</Button>
        <Button type='link' >shop now</Button>
        <Button className='dangerButton'>Submit</Button>
        <Button type='submit' className='darkButton'>Submit</Button> */}
        <Footer />
    </main>
}

export default Home;