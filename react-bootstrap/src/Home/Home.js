import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-fade';

const Home = () => {
    return (
        <Swiper modules={[EffectFade]} effect="fade">
            {[1, 2, 3].map((i, el) => {
                console.log(i, el);
                return <SwiperSlide>Slide {i}</SwiperSlide>;
            })}
        </Swiper>
    );
};

export default Home;