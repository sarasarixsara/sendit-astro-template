import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

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
export default function GlobalTestimonialSlider(block) {
  return (
    <section className="testimonial">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 mx-auto text-center mb-2" style={{backgroundColor: "black"}}>
            <div className="testimonial-content">
              <h2>
                {block.title} <span> {block.title_suffix}</span>
              </h2>
              
            </div>
          </div>
        </div>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        breakpoints={breakpoints}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
       
          {block.slider.map((slide, i) => (
           <SwiperSlide key={i}>
            <div className=" mb-5" >
      <div className="testimonial-item " style={{height: "100%"}}>
        <div className="testimonial-item-person flex-column justify-content-between" style={{height: "100%", display:"flex"}}>
        <div>
        <div className="content">
            <h3>{slide.author}</h3>
            
          </div>
        
          <p>{slide.message}</p>
          </div>
          <div className="thumb">
            <img
              src={slide.image}
              alt="logo"
              className={slide.image_alt}
              loading="lazy"
            />
          </div>
          
        </div>
        
      </div>
    </div>
           </SwiperSlide>
          ))}
        
        </Swiper>
      </div>
    </section>
  );
}

