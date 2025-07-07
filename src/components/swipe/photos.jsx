import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={60}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
        }}
      >
        <SwiperSlide>
          <img src="/images/swiper/3.jpeg" alt="" height={500} />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/swiper/4.jpeg" alt="" height={500} />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/swiper/1.jpeg" alt="" height={500} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/swiper/8.jpg" alt="" height={500} />{" "}
        </SwiperSlide>
      </Swiper>
    </>
  );
}
