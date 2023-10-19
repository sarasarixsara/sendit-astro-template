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
                <SwiperSlide><HomeHero {...props} /></SwiperSlide>
                <SwiperSlide></SwiperSlide>

            </Swiper>
        </>
    );
}
