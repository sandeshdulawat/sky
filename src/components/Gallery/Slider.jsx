import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import swiper1001 from "../../assets/images/footer/home-interior-designs-kolkata.jpg";
import swiper1002 from "../../assets/images/footer/home-interior-designs-ahmedabad.jpg";
import swiper1003 from "../../assets/images/footer/home-interior-designs-vizag.jpg";
import swiper1004 from "../../assets/images/footer/home-interior-designs-bangalore.webp";
import swiper1005 from "../../assets/images/footer/affordable-home-interiors-in-mysore.jpg";
import swiper1006 from "../../assets/images/footer/best-home-interior-designs-chennai.jpg";
import swiper1007 from "../../assets/images/footer/best-home-interiors-thane.jpg";
import swiper1008 from "../../assets/images/footer/best-interior-designers-navi-mumbai.jpg";
import swiper1009 from "../../assets/images/footer/best-interior-design-firm-in-hyderabad.jpg";
import swiper1010 from "../../assets/images/footer/designer-house-interior-pune.jpg";
import swiper1011 from "../../assets/images/footer/home-interior-designs-mumbai.jpg";

function Slider() {
  return (
    <div className="container max-w-screen-xl md:space-y-8 my-8 ">
      <div className="text-center py-4">
        <h1 className="text-xl font-semibold">
          51040 Designs In Our Experience Centres
        </h1>
        <p className="text-sm">10 Cities | 15 Experience Centres</p>
      </div>
      <div>
        <div className="my-2 md:mx-8">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={6}
            navigation
            pagination={{
              dynamicBullets: true,
            }}
            initialSlide={1}
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="my-6 "
          >
            <SwiperSlide className="pb-6">
              <img
                src={swiper1001}
                alt=""
                style={{ width: "100%" }}
                className=" rounded-3xl object-cover border-4 border-terriary hover:scale-105 duration-200 ease-in-out"
              />
            </SwiperSlide>
            <SwiperSlide className="pb-6">
              <img
                src={swiper1002}
                alt=""
                style={{ width: "100%" }}
                className=" rounded-3xl object-cover border-4 border-terriary hover:scale-105 duration-200 ease-in-out "
              />
            </SwiperSlide>
            <SwiperSlide className="pb-6">
              <img
                src={swiper1003}
                alt=""
                style={{ width: "100%" }}
                className=" rounded-3xl object-cover border-4 border-terriary hover:scale-105 duration-200 ease-in-out "
              />
            </SwiperSlide>
            <SwiperSlide className="pb-6">
              <img
                src={swiper1004}
                alt=""
                style={{ width: "100%" }}
                className=" rounded-3xl object-cover border-4 border-terriary hover:scale-105 duration-200 ease-in-out "
              />
            </SwiperSlide>
            <SwiperSlide className="pb-6">
              <img
                src={swiper1005}
                alt=""
                style={{ width: "100%" }}
                className=" rounded-3xl object-cover border-4 border-terriary hover:scale-105 duration-200 ease-in-out "
              />
            </SwiperSlide>
            <SwiperSlide className="pb-6">
              <img
                src={swiper1006}
                alt=""
                style={{ width: "100%" }}
                className="rounded-3xl object-cover border-4 border-terriary hover:scale-105 duration-200 ease-in-out "
              />
            </SwiperSlide>
            <SwiperSlide className="pb-6">
              <img
                src={swiper1007}
                alt=""
                style={{ width: "100%" }}
                className="h-60 rounded-3xl object-cover border-4 border-terriary hover:scale-105 duration-200 ease-in-out "
              />
            </SwiperSlide>
            <SwiperSlide className="pb-6">
              <img
                src={swiper1008}
                alt=""
                style={{ width: "100%" }}
                className="rounded-3xl object-cover border-4 border-terriary hover:scale-105 duration-200 ease-in-out "
              />
            </SwiperSlide>
            <SwiperSlide className="pb-6">
              <img
                src={swiper1009}
                alt=""
                style={{ width: "100%" }}
                className="rounded-3xl object-cover border-4 border-terriary hover:scale-105 duration-200 ease-in-out "
              />
            </SwiperSlide>
            <SwiperSlide className="pb-6">
              <img
                src={swiper1010}
                alt=""
                style={{ width: "100%" }}
                className="rounded-3xl object-cover border-4 border-terriary hover:scale-105 duration-200 ease-in-out "
              />
            </SwiperSlide>
            <SwiperSlide className="pb-6">
              <img
                src={swiper1011}
                alt=""
                style={{ width: "100%" }}
                className="rounded-3xl object-cover border-4 border-terriary hover:scale-105 duration-200 ease-in-out "
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="pb-4">
        <button className="text-xs md:text-base flex items-center shadow-md mx-auto bg-primary rounded-md text-primaryWhite p-2 hover:scale-105 hover:-translate-y-[0.5px] duration-200">
          Visit Our Experience Centre Today
        </button>
      </div>
    </div>
  );
}

export default Slider;
