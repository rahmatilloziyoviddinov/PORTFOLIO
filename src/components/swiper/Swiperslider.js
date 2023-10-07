import html from "../../images/htmlpng.png"
import css from "../../images/csspng.png"
import sass from "../../images/sasspng.png"
import bootstrap from "../../images/bootstrappng.png"
import tailwind from "../../images/Tailwindpng.png"
import js from "../../images/jspng.png"
import react from "../../images/reactpng.png"
import nodejs from "../../images/nodejspng.png"
import { Swiper_data } from "./Swiper_data"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import '../swiper/Swiper.css';
import { EffectCards, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

function Swiperslider() {
  return (

    <Swiper
      effect={'cards'}
      grabCursor={true}
      modules={[Autoplay, EffectCards]}
      autoplay={
        {
          delay: 2000,
          disableOnInteraction: false
        }
      }
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className="mySwiper"
    >
      {Swiper_data.map(data => (
        <SwiperSlide>
          <img src={data.image} alt="" />
          <p>{data.title}</p>
          <button><Link state={data} to={`product/${data.id}`}>View</Link></button>
        </SwiperSlide>
        // <SwiperSlide>
        //   <img src={css} alt="" />
        //   <button><Link href="#">View</Link></button>
        // </SwiperSlide>
        // <SwiperSlide>
        //   <img src={sass} alt="" />
        //   <button><Link href="#">View</Link></button>
        // </SwiperSlide>
        // <SwiperSlide>
        //   <img src={bootstrap} alt="" />
        //   <button><Link href="#">View</Link></button>
        // </SwiperSlide>
        // <SwiperSlide>
        //   <img src={tailwind} alt="" />
        //   <button><Link href="#">View</Link></button>
        // </SwiperSlide>
        // <SwiperSlide>
        //   <img src={js} alt="" />
        //   <button><Link href="#">View</Link></button>
        // </SwiperSlide>
        // <SwiperSlide>
        //   <img src={react} alt="" />
        //   <button><Link href="#">View</Link></button>
        // </SwiperSlide>
        // <SwiperSlide>
        //   <img src={nodejs} alt="" />
        //   <button><Link href="#">View</Link></button>
        // </SwiperSlide>
      ))}
    </Swiper>

  );
}
export default Swiperslider