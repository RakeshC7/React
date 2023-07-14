import React from 'react';
import Products from '../components/Products';

const HomePage = () => {
    return (
        <div>
            <section className='container'>
                <h2 className='line-bottom'>
                    <span>Products List</span>
                </h2>
                <Products />

            </section>
        </div>
    )
}

export default HomePage
