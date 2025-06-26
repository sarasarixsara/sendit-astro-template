import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import HomeHero from '../../home/hero/hero';

const props = {
    title: "Asociacion FAC Nuestra Señora de Loreto",
    button: {
        text: "Conoce sobre nosotros",
        link: "https://api.whatsapp.com/send/?phone=573332669152&text=Me+interesa+conocer+mas+sobre+su+asociacion&type=phone_number&app_absent=0/",
        number: "+573332669152",
        message: "Quiero conocer mas sobre la asociacion FAC Nuestra Señora de Loreto",
    }
}


export default function App() {
    return (
        <>
            <Swiper
                navigation={true} modules={[Navigation]} className="mySwiper h-32">
                <SwiperSlide><HomeHero {...props} /></SwiperSlide>
                {/* <SwiperSlide><HomeHero {...props} /></SwiperSlide> */}
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
