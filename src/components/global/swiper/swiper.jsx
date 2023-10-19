import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import HomeHero from '../../home/hero/hero';

const props = {
    title: "Planes de Internet Para Su Hogar o Negocio",
    button: {
        text: "Cotiza con nosotros",
        link: "/contact/",
        number: "+573152102953",
        message: "Quiero cotizar un plan de internet para mi negocio"
    }
}


export default function App() {
    return (
        <>
            <Swiper
                navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide><HomeHero {...props} /></SwiperSlide>
                {/* <SwiperSlide>
                    <div style={{ position: "relative", height: "25rem" }}>
                        <div style={{
                            position: "absolute", top: "50%",
                            right: "10%",
                            transform: "translateY(-50%)",
                            backgroundColor: "rgba(0, 0, 0, 0.5)", 
                            padding: "20px",
                            borderRadius: "10px",
                        }}>
                            <h5 style={{ color: "white"}}>Seguridad electrónica</h5>
                        </div>
                        <img src="/images/hero/home-cctv.jpg" alt="" style={{ width: "100%" }} />
                    </div>
                </SwiperSlide> */}


            </Swiper>
        </>
    );
}
