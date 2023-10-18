import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import card from './card';

const breakpoints = {
  320: {
    slidesPerView: 1,
  },
  700: {
    slidesPerView: 2,
  },
  850: {
    slidesPerView: 3,
  }
}

export default function App() {
  return (
    <>
      <div className="slider-container">
        <div className="header-section">
          <h2>Otros servicios</h2>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          breakpoints={breakpoints}
          navigation={true} modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <card></card>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-container">
              <div className="slide-swiper">
                <div className="image" >
                  <img className="img" src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" />
                </div>
                <div className="text-slide">
                  <h4>Internet dedicada</h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-container">
              <div className="slide-swiper">
                <div className="image" >
                  <img className="img" src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" />
                </div>
                <div className="text-slide">
                  <h4>Internet dedicada</h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-container">
              <div className="slide-swiper">
                <div className="image" >
                  <img className="img" src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" />
                </div>
                <div className="text-slide">
                  <h4>Internet dedicada</h4>
                </div>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </>
  );
}
