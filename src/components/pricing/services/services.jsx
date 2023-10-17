import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
//import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';



// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <div className="slider-container">
        <div className="header-section">
        <h2>Mas de nuestros servicios</h2>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          navigation={true} modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="slide-swiper">
              <div className="image">
                <img className="img" src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" width={200}/>
              </div>
              <div className="text-slide">
                <h4>Internet dedicada</h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-swiper">
              <div className="image">
                <img className="img" src="https://cdn.pixabay.com/photo/2014/12/16/22/25/woman-570883_1280.jpg" alt="" width={200}/>
              </div>
              <div className="text-slide">
                <h4>Internet dedicada</h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-swiper">
              <div className="image">
                <img className="img" src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" width={200}/>
              </div>
              <div className="text-slide">
                <h4>Internet dedicada</h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-swiper">
               <div >
               <img className="img" src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" width={200}/>
             </div> 
              <div className="text-slide">
                <h4>Internet dedicada</h4>
              </div>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
     
        </Swiper>
      </div>
    </>
  );
}
