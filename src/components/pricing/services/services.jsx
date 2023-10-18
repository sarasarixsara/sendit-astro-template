import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

const breakpoints = {
  320: {
    slidesPerView: 1,
  },
  715: {
    slidesPerView: 2,
  },
  1015: {
    slidesPerView: 3,
  }
}

export default function ServicesSlider(block) {
  return (
    <div className="slider-container">
      <div className="header-section">
        <h2>{block.title}</h2>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        breakpoints={breakpoints}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {block.slider.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="card-container">
              <div className="slide-swiper">
                <div className="image">
                  <img className="img" src={slide.src} alt="" />
                </div>
                <div className="text-slide">
                  <h5>{slide.descp}</h5>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
