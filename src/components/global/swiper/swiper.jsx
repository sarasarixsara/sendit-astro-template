import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import HomeHero from '../../home/hero/hero';

const props = {
    title: "Asociación FAC Nuestra Señora de Loreto Tres Esquinas",
    button: {
        text: "Conoce sobre nosotros",
        link: "https://api.whatsapp.com/send/?phone=573160561540&text=Me+interesa+conocer+mas+sobre+su+asociacion&type=phone_number&app_absent=0/",
        number: "+573160561540",
        message: "Quiero conocer mas sobre la asociacion FAC Nuestra Señora de Loreto Tres Esquinas",
    }
}


export default function App() {
    return (
        <>
            <Swiper
                navigation={true} modules={[Navigation]} className="mySwiper h-32">
                <SwiperSlide><HomeHero {...props} /></SwiperSlide>
        

            </Swiper>
        </>
    );
}
