import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import swiper1001 from "../../assets/images/webp/l-shaped-modular-kitchen-design.webp";
import swiper1002 from "../../assets/images/webp/parallel-shaped-modular-kitchen-design.webp";
import swiper1003 from "../../assets/images/webp/compact-modular-kitchen-design.webp";
import swiper1004 from "../../assets/images/webp/u-shaped-kitchen-interiors.webp";
import swiper1005 from "../../assets/images/webp/janitor-unit-space-saving-kitchen-interior-design.png";

function Testimonials() {
  return (
    <div className="container md:space-y-8 my-8 bg-secondary">
      <div>
        
      </div>
      {/* <div>
        <h1 className="text-center md:text-2xl text-xl py-4 font-semibold">10000+ Happy Customers</h1>
        <div className="">
          <div className="">
            <div className="flex justify-center md:justify-start items-center gap-6">
              <img
                src="https://media.designcafe.com/wp-content/uploads/2022/07/06161936/manish-chandgothia-customer.webp"
                alt=""
              />
              <div>
                <h2 className="text-base font-semibold">Siddharth & Reema</h2>
                <p className="text-sm">Vasant Oasis, Mumbai</p>
              </div>
            </div>
            <p className="text-sm pt-6 text-balance w-fit ">
              "We were sold on the idea, 20% extra space for storage. We are
              delighted with our home design and would highly recommend Design
              Cafe!"
            </p>
            <div>
              <div className="">
                <Swiper
                  modules={[Navigation, Pagination]}
                  slidesPerView={1}
                  navigation
                  initialSlide={1}
                  loop={true}
                  className=""
                >
                  <SwiperSlide>
                    <img
                      src={swiper1001}
                      alt=""
                      className="w-96 rounded-3xl object-cover hover:scale-105 duration-200 ease-in-out"
                    />
                  </SwiperSlide>
                  <SwiperSlide >
                    <img
                      src={swiper1002}
                      alt=""
                      className="w-96 rounded-3xl object-cover hover:scale-105 duration-200 ease-in-out "
                    />
                  </SwiperSlide>
                  <SwiperSlide className="pb-6">
                    <img
                      src={swiper1003}
                      alt=""
                      className="w-96 rounded-3xl object-cover hover:scale-105 duration-200 ease-in-out "
                    />
                  </SwiperSlide>
                  <SwiperSlide className="pb-6">
                    <img
                      src={swiper1004}
                      alt=""
                      className="w-96 rounded-3xl object-cover hover:scale-105 duration-200 ease-in-out "
                    />
                  </SwiperSlide>
                  <SwiperSlide className="pb-6">
                    <img
                      src={swiper1005}
                      alt=""
                      className="w-96 rounded-3xl object-cover hover:scale-105 duration-200 ease-in-out "
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
              
          </div>
          <div className="">
            <div className="flex justify-center md:justify-start items-center gap-6">
              <img
                src="https://media.designcafe.com/wp-content/uploads/2022/07/06161951/siddharth-reema-customer.webp"
                alt=""
              />
              <div>
                <h2 className="text-base font-semibold">Siddharth & Reema</h2>
                <p className="text-sm">Vasant Oasis, Mumbai</p>
              </div>
            </div>
            <p className="text-sm pt-6 text-balance">
              "We were sold on the idea, 20% extra space for storage. We are
              delighted with our home design and would highly recommend Design
              Cafe!"
            </p>
            <div>
              <div className="my-2 ">
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={6}
                  slidesPerView={1}
                  navigation
                  pagination={{
                    dynamicBullets: true,
                  }}
                  initialSlide={1}
                  loop={true}
                  
                  className=""
                >
                  <SwiperSlide>
                    <img
                      src={swiper1001}
                      alt=""
                      className=" rounded-3xl object-cover hover:scale-105 duration-200 ease-in-out"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={swiper1002}
                      alt=""
                      className="rounded-3xl object-cover hover:scale-105 duration-200 ease-in-out "
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={swiper1003}
                      alt=""
                      className="rounded-3xl object-cover hover:scale-105 duration-200 ease-in-out "
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={swiper1004}
                      alt=""
                      className="rounded-3xl object-cover hover:scale-105 duration-200 ease-in-out "
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={swiper1005}
                      alt=""
                      className="rounded-3xl object-cover hover:scale-105 duration-200 ease-in-out "
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
              
            </div>
          </div>
        </div>
        <div className="pb-4">
          <button className="text-xs md:text-base flex items-center shadow-md mx-auto bg-primary rounded-md text-primaryWhite p-2">
            Book Free Consultation
          </button>
        </div>
      </div> */}
    </div>
  );
}

export default Testimonials;
