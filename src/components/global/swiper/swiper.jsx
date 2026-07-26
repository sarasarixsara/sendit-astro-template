import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const slides = [
   {
    desktop: "/images/hero/energiaSolar.jpeg",
    mobile: "/images/hero/energiaSolar-mobile.jpeg",
    alt: "Energía Solar",
    buttonRight: "70%",
    calendar:
      "https://calendar.app.google/o8J2x3m7PND1R5nC8",
  },
  {
    desktop: "/images/hero/seguridad.jpeg",
    mobile: "/images/hero/seguridad-mobile.jpeg",
    alt: "Seguridad Electrónica",
    buttonRight: "20%",
    calendar:
      "https://calendar.app.google/o8J2x3m7PND1R5nC8",
  },
  {
    desktop: "/images/hero/Internet.jpeg",
    mobile: "/images/hero/Internet-mobile.jpeg",
    alt: "Internet y Domótica",
    buttonRight: "20%",
    calendar:
      "https://calendar.app.google/o8J2x3m7PND1R5nC8",
  },
  {
    desktop: "/images/hero/Sonido.jpeg",
    mobile: "/images/hero/Sonido-mobile.jpeg",
    alt: "Sonido Inteligente",
    buttonRight: "25%",
    calendar:
      "https://calendar.app.google/o8J2x3m7PND1R5nC8",
  },
  {
    desktop: "/images/hero/Iluminacion.jpeg",
    mobile: "/images/hero/Iluminacion-mobile.jpeg",
    alt: "Iluminación Inteligente",
    buttonRight: "70%",
    calendar:
      "https://calendar.app.google/o8J2x3m7PND1R5nC8",
  },
];

export default function HeroSlider() {
  return (
    <>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="mySwiper"
        style={{
          paddingTop: "120px",
          paddingBottom: "0px",
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="hero-slide">
              <picture>
                <source
                  media="(max-width:768px)"
                  srcSet={slide.mobile}
                />

                <img
                  src={slide.desktop}
                  alt={slide.alt}
                  className="hero-image"
                />
              </picture>

              <a
                href={slide.calendar}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-button"
                style={{ "--button-right": slide.buttonRight }}
              >
                Agenda tu asesoría
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .hero-slide {
          position: relative;
          width: 100%;
        }

        .hero-image {
          width: 100%;
          display: block;
        }

        .hero-button {
          position: absolute;
          right: var(--button-right);
          bottom: 12%;
          background: #ef8a1c;
          color: #fff;
          text-decoration: none;
          padding: 15px 28px;
          border-radius: 12px;
          font-size: 18px;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
        }

        .hero-button:hover {
          background: #d97706;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .hero-button {
            left: 50%;
            right: auto;
            transform: translateX(-50%);
            bottom: 6%;
            width: 88%;
            text-align: center;
            padding: 16px;
            font-size: 17px;
            border-radius: 10px;
          }

          .hero-button:hover {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </>
  );
}