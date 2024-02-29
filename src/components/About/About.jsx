import React from "react";
import img from "../../assets/images/footer/home-interior-designs-by-design-cafe.webp";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import swiper1001 from "../../assets/images/footer/commonfloor-award-best-home-interior-design-company.png";
import swiper1002 from "../../assets/images/footer/times-business-award-most-innovative-home-interior-solutions.png";
import swiper1003 from "../../assets/images/footer/entrepreneur-india-award-most-enterprising-business-2019.png";
import swiper1004 from "../../assets/images/footer/entrepreneur-india-award-most-innovative-startup-2018.png";
import swiper1005 from "../../assets/images/footer/quikr-homes-awards-most-innovative-interior-design-company-2018.png";

function About() {
  return (
    <div className="container max-w-screen-xl md:space-y-8 py-8">
      <div className="space-y-8">
        <h1 className="text-center md:text-left text-xl font-semibold">
          Meet The Best Interior Designers In India
        </h1>
        <div>
          <div className="space-y-2">
            <h1 className=" text-base font-medium">
              The Magicians Who Transform And Create Space...
            </h1>
            <p className="text-sm md:text-base">
              Boho Chic, rustic, mediterranean, minimalist, modern, industrial,
              classic-contemporary, art deco, traditional - do you get lost with
              these terms? Or perhaps you know what you want but don't know how
              to get there?
            </p>
            <p className="text-sm md:text-base">
              That is why we have a team of 400+ designers to advise customers.
            </p>
            <div className="p-4">
              <button className="text-xs md:text-base flex items-center shadow-md mx-auto bg-primary rounded-md text-primaryWhite p-2">
                Meet A Design Expert Today!
              </button>
            </div>
          </div>
          <div>
            <img src={img} alt="" />
          </div>
        </div>
      </div>

      {/* slider  */}
      <div className="mt-8 overflow-hidden">
        <div className="text-center">
          <h1 className="text-lg font-bold text-nowrap">
          50+ Awards for Innovative Designs
          </h1>
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
                  className="rounded-3xl object-cover hover:scale-105 duration-200 ease-in-out"
                />
              </SwiperSlide>
              <SwiperSlide className="pb-6">
                <img
                  src={swiper1002}
                  alt=""
                  style={{ width: "100%" }}
                  className=" rounded-3xl object-cover hover:scale-105 duration-200 ease-in-out "
                />
              </SwiperSlide>
              <SwiperSlide className="pb-6">
                <img
                  src={swiper1003}
                  alt=""
                  style={{ width: "100%" }}
                  className=" rounded-3xl object-cover hover:scale-105 duration-200 ease-in-out "
                />
              </SwiperSlide>
              <SwiperSlide className="pb-6">
                <img
                  src={swiper1004}
                  alt=""
                  style={{ width: "100%" }}
                  className=" rounded-3xl object-cover hover:scale-105 duration-200 ease-in-out "
                />
              </SwiperSlide>
              <SwiperSlide className="pb-6">
                <img
                  src={swiper1005}
                  alt=""
                  style={{ width: "100%" }}
                  className=" rounded-3xl object-cover hover:scale-105 duration-200 ease-in-out "
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
