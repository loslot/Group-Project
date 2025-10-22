import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Slide() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
          <SwiperSlide>
          <div className="w-full h-[500px] bg-black ">
            <img
              src="/slides/Electronic.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
         <SwiperSlide>
          <div className="w-full h-[500px] bg-black ">
            <img
              src="/slides/Fashion.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
       
        <SwiperSlide>
          <div className="w-full h-[500px] bg-black ">
            <img
              src="/slides/Homesupply.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[500px] bg-black ">
            <img
              src="/slides/Skincare.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[500px] bg-black ">
            <img
              src="/slides/Jewellery.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
       
      </Swiper>
    </>
  );
}
