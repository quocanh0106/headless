import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
export const HorizontalSlideShow = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slider, setSlider] = useState(props.slider.children);
  const handleSlideClick = (index) => {
    setCurrentSlide(index);
  };
  useEffect(() => {
    setSlider(props.slider.children);
  }, [props]);

  const renderSlides = () => {
    return (
      <>
        {slider.map((child, index) => {
          const isActive = currentSlide === index ? "active" : "";
          return (
            <SwiperSlide className={`block overflow-hidden !w-auto swiper-slide ${isActive}`} key={index} onClick={() => handleSlideClick(index)}>
              <img src={child.image.image} alt={`slide ${index+1}`} className={`rounded-full border border-4 border-black ${isActive ? 'w-52 h-52' : 'w-40 h-40 opacity-50' }`}/>
            </SwiperSlide>
          )
        })}
      </>
    );
  };
  const renderSlideInfo = () => {
    const currentSlideInfo = slider[currentSlide].infor;
    return (
      <div className="slide-info text-center mt-10">{currentSlideInfo}</div>
    );
  };

  return (
    <div className="banner-carousel horizontal-slide-show overflow-hidden">
      <Swiper centeredSlides={true} slidesPerView={'auto'} slideActiveClass={'active'} spaceBetween={16}>
        {renderSlides()}
      </Swiper>
      {renderSlideInfo()}
    </div>
  );
};