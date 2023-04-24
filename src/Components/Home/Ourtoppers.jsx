import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow } from "swiper";

import topper1 from '../images/topper1.png';
import topper2 from '../images/topper2.jpeg';
import topper3 from '../images/topper3.jpeg';
import topper4 from '../images/topper4.jpg';
import topper5 from '../images/topper5.jpeg';
import topper6 from '../images/topper6.jpeg';
import topper7 from '../images/topper7.jpeg';


function Ourtoppers() {
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-sm-12">
            <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={topper1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={topper2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={topper3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={topper4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={topper5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={topper6} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={topper7} />
        </SwiperSlide>
        
      </Swiper>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Ourtoppers
