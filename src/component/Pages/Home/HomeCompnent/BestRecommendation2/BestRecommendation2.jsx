import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';


import girl from '../../../../../assets/home/recommendation/girl.png'
import girl2 from '../../../../../assets/home/recommendation/girl2.png'
import girl3 from '../../../../../assets/home/recommendation/girl3.png'
import girl4 from '../../../../../assets/home/recommendation/girl4.png'
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const BestRecommendation2 = () => {
  
   const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("https://soulmates-server-two.vercel.app/allUser")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);

  return (
    <div className="py-[120px] w-[80%] mx-auto">
      <div className="max-w-7xl mx-auto">
        <p className="text-[#272932] text-[40px] text-left font-alice ">Best Recommendation for you</p>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        breakpoints={{
          240: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        className="py-6"
      >

        {datas.map((item) => (
        <SwiperSlide key={item._id} className="group" >
          <Link to={`/patnerProfile/${item?._id}`}>
          <div className=" relative rounded-2xl overflow-hidden hover:scale-105 duration-300 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <img className="rounded-xl  object-cover w-full h-[300px]" src={item?.profileImage} alt="" />
            <div className="bg-slate-950 text-[#F0F2F5] absolute bottom-0 rounded bg-opacity-50 rounded-t-2xl h-0 py-0 px-4 group-hover:py-4 duration-300 w-full group-hover:h-[135px] rounded-b-2xl">
              <p className="text-[22px] font-alice mb-1 ">{item?.name}</p> <br />
              <p className="font-lato text-[16px] ">{item?.country}</p>
            </div>
          </div>
          </Link>
        </SwiperSlide>

         )
        ) 
        }
        
      </Swiper>
    </div>
  );
};



export default BestRecommendation2;