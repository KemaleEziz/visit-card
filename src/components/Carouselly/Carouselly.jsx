import React, { useContext, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./carouselly.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import FirstCard1Img from "../carouselPhotos/Card1.1.jpg";
import FirstCard2Img from "../carouselPhotos/Card1.2.jpg";
import SecondCard1Img from "../carouselPhotos/Card2.1.jpg";
import SecondCard2Img from "../carouselPhotos/Card2.2.jpg";
import ThirdCard1Img from "../carouselPhotos/Card3.1.jpg";
import ThirdCard2Img from "../carouselPhotos/Card3.2.jpg";
import Store from "../context/store";
export default function Carouselly() {
  const {
   chooseCard,
   setChooseCard,
  } = useContext(Store);

  const handleImageClick = (value) => {
    setChooseCard(value);
  };
 
  return (
    <div className="swipperBox">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={FirstCard1Img}
            onClick={() => handleImageClick(1)}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src={FirstCard2Img} 
             onClick={() => handleImageClick(1)}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SecondCard1Img} 
          onClick={() =>  handleImageClick(2)}
          
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SecondCard2Img} 
            onClick={() =>  handleImageClick(2)}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ThirdCard1Img} 
            onClick={() =>  handleImageClick(3)}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ThirdCard2Img} 
          onClick={() => handleImageClick(3)}
          />
        </SwiperSlide>
        <SwiperSlide>
        <img
            src={FirstCard1Img}
            onClick={() => handleImageClick(1)}
          />
        </SwiperSlide>
        <SwiperSlide>
        <img src={FirstCard2Img} 
             onClick={() => handleImageClick(1)}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SecondCard1Img} 
          onClick={() =>  handleImageClick(2)}
          
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SecondCard2Img} 
            onClick={() =>  handleImageClick(2)}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
