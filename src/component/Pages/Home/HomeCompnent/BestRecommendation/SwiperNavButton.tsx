import React from 'react';
import { useSwiper } from 'swiper/react';
import { BsArrowLeft , BsArrowRight} from "react-icons/bs";
import "./styles.css"
export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns text-center  ">
      <div className='flex justify-end gap-4'>
      <button onClick={() => swiper.slidePrev()}><BsArrowLeft className='text-black'></BsArrowLeft></button>
      <button onClick={() => swiper.slideNext()}><BsArrowRight className='text-black'></BsArrowRight></button>
      </div>
    </div>
  );
};
