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
import swiper1006 from "../../assets/images/webp/living-room-interiors-with-a-bar-cabinet.png";
import swiper1007 from "../../assets/images/webp/eclectic-living-room-interior-1.png";
import swiper1008 from "../../assets/images/webp/living-room-interiors-with-tv-unit-and-wall-panelling.webp";
import swiper1009 from "../../assets/images/webp/living-room-interior-designs.webp";
import swiper1010 from "../../assets/images/webp/classy-living-room-interiors.png";
import swiper1011 from "../../assets/images/webp/living-room-interiors-with-a-bar-cabinet.png";
import swiper1012 from "../../assets/images/webp/eclectic-living-room-interior-1.png";
import swiper1013 from "../../assets/images/webp/living-room-interiors-with-tv-unit-and-wall-panelling.webp";
import swiper1014 from "../../assets/images/webp/living-room-interior-designs.webp";
import swiper1015 from "../../assets/images/webp/classy-living-room-interiors.png";
import MyModal from "../../Pages/Modal";

const GallerySlider = () => {
  return (
    <>
      {/* first slider  */}
      <div className="container max-w-screen-xl md:space-y-8 my-8 bg-secondary">
        <h1 className="text-center text-lg font-semibold md:text-xl pt-6">
          Innovative Space Saving Solutions
        </h1>
        <p className="text-center text-base py-2">20% Extra Space Guaranteed</p>
        <div className="my-5 md:mx-8">
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
            <SwiperSlide>
              <img
                src={swiper1001}
                alt=""
                style={{ width: "100%" }}
                className="h-60 rounded-3xl object-cover border-4 border-terriary hover:scale-105 duration-200 ease-in-out "
              />
              <h1 className="text-center pb-6">
                A Murphy Bed That Doubles Up As A Sofa When Not In Use
              </h1>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={swiper1002}
                alt=""
                style={{ width: "100%" }}
                className="h-60 rounded-3xl object-cover border-4 border-terriary hover:scale-105 duration-200 ease-in-out "
              />
              <h1 className="text-center pb-6">
                A TV Unit With Hidden Storage Behind
              </h1>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={swiper1003}
                alt=""
                style={{ width: "100%" }}
                className="h-60 rounded-3xl object-cover border-4 border-terriary hover:scale-105 duration-200 ease-in-out "
              />
              <h1 className="text-center pb-6">
                Skirting Drawers To Utilise The Dead Space Beneath
              </h1>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={swiper1004}
                alt=""
                style={{ width: "100%" }}
                className="h-60 rounded-3xl object-cover border-4 border-terriary hover:scale-105 duration-200 ease-in-out "
              />
              <h1 className="text-center pb-6">
                A Magic Pull-Out To Store Your Daily Utensils
              </h1>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={swiper1005}
                alt=""
                style={{ width: "100%" }}
                className="h-60 rounded-3xl object-cover border-4 border-terriary hover:scale-105 duration-200 ease-in-out "
              />
              <h1 className="text-center pb-6">
                A Hidden Janitor Unit And A Tall Storage Unit
              </h1>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex justify-center pb-4 ">
          <MyModal
            buttonText={
              <div className="text-xs md:text-base flex items-center shadow-md mx-auto bg-primary rounded-md text-primaryWhite p-2">
                <h1>Talk To Our Space Saving Experts!</h1>
              </div>
            }
          />
        </div>
      </div>

      {/* second slider */}
      <div className="container max-w-screen-xl md:space-y-8">
        <h1 className="text-center text-lg font-semibold md:text-xl pt-6">
          Smart Modular Kitchen Designs
        </h1>
        <div className="my-5 md:mx-8">
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
            <SwiperSlide>
              <img
                src={swiper1001}
                alt=""
                style={{ width: "100%" }}
                className="h-48 rounded-3xl object-cover border-4 border-terriary hover:scale-105 duration-200 ease-in-out "
              />
              <h1 className="text-center pb-6">
                A Compact Modular Kitchen Design With Yellow And Grey
              </h1>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={swiper1002}
                alt=""
                style={{ width: "100%" }}
                className="h-48 rounded-3xl object-cover border-4 border-terriary hover:scale-105 duration-200 ease-in-out "
              />
              <h1 className="text-center pb-6">
                A Parallel Shaped Modern Kitchen Design In Blue
              </h1>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={swiper1003}
                alt=""
                style={{ width: "100%" }}
                className="h-48 rounded-3xl object-cover border-4 border-terriary hover:scale-105 duration-200 ease-in-out "
              />
              <h1 className="text-center pb-6">
                A Classy & Vibrant Kitchen Design With A Breakfast Counter
              </h1>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={swiper1004}
                alt=""
                style={{ width: "100%" }}
                className="h-48 rounded-3xl object-cover border-4 border-terriary hover:scale-105 duration-200 ease-in-out "
              />
              <h1 className="text-center pb-6">A Modern L-Shaped Kitchen</h1>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={swiper1005}
                alt=""
                style={{ width: "100%" }}
                className="h-48 rounded-3xl object-cover border-4 border-terriary hover:scale-105 duration-200 ease-in-out "
              />
              <h1 className="text-center pb-6">
                A Vibrant U-Shaped Kitchen Design
              </h1>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex justify-center pb-4">
          <MyModal
            buttonText={
              <div className="text-xs md:text-base flex items-center shadow-md mx-auto bg-primary rounded-md text-primaryWhite p-2">
                <h1> Meet Our Kitchen Experts</h1>
              </div>
            }
          />
        </div>
      </div>

      {/* third slider  */}
      <div className="container max-w-screen-xl md:space-y-8">
        <h1 className="text-center text-lg font-semibold md:text-xl pt-6">
          Personalised Bedrooms For Style And Comfort
        </h1>
        <div className="my-4 md:mx-8">
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
            <SwiperSlide>
              <img
                src={swiper1001}
                alt=""
                style={{ width: "100%" }}
                className="h-48 rounded-3xl object-cover border-4 border-terriary hover:scale-105 duration-200 ease-in-out "
              />
              <h1 className="text-center pb-6 capitalize">
                A Kids Bedroom With A Bunk Bed
              </h1>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={swiper1002}
                alt=""
                style={{ width: "100%" }}
                className="h-48 rounded-3xl object-cover border-4 border-terriary hover:scale-105 duration-200 ease-in-out "
              />
              <h1 className="text-center pb-6 capitalize">
                A Chic Bedroom With Modular Wardrobe And Dressing Spaces
              </h1>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={swiper1003}
                alt=""
                style={{ width: "100%" }}
                className="h-48 rounded-3xl object-cover border-4 border-terriary hover:scale-105 duration-200 ease-in-out "
              />
              <h1 className="text-center pb-6 capitalize">
                a bedroom with sliding door wardrobes for space saving
              </h1>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={swiper1004}
                alt=""
                style={{ width: "100%" }}
                className="h-48 rounded-3xl object-cover border-4 border-terriary hover:scale-105 duration-200 ease-in-out "
              />
              <h1 className="text-center pb-6 capitalize">
                a pastel shaddid wardrobes with a hidden dressing cabinet
              </h1>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={swiper1005}
                alt=""
                style={{ width: "100%" }}
                className="h-48 rounded-3xl object-cover border-4 border-terriary hover:scale-105 duration-200 ease-in-out "
              />
              <h1 className="text-center pb-6 capitalize">
                a modern bedroom with a wardrobes and study area
              </h1>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex justify-center pb-4">
          <MyModal
            buttonText={
              <div className="text-xs md:text-base flex items-center shadow-md mx-auto bg-primary rounded-md text-primaryWhite p-2">
                <h1> Meet our Designer</h1>
              </div>
            }
          />
        </div>
      </div>

      {/* forth slider  */}
      <div className="container max-w-screen-xl md:space-y-8">
        <h1 className="text-center text-lg font-semibold md:text-xl pt-6">
          Lastest And Trendy Living Room Designs
        </h1>
        <div className="my-4 md:mx-8">
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
            <SwiperSlide>
              <img
                src={swiper1011}
                alt=""
                style={{ width: "100%" }}
                className="h-48 rounded-3xl object-cover border-4 border-terriary hover:scale-105 duration-200 ease-in-out "
              />
              <h1 className="text-center pb-6 capitalize">
                The Bar Cabinet Is The Main Attraction Of This Sorbet-Toned
                Living Room
              </h1>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={swiper1012}
                alt=""
                style={{ width: "100%" }}
                className="h-48 rounded-3xl object-cover border-4 border-terriary hover:scale-105 duration-200 ease-in-out "
              />
              <h1 className="text-center pb-6 capitalize">
                A Chic Bedroom With Modular Wardrobe And Dressing Spaces
              </h1>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={swiper1013}
                alt=""
                style={{ width: "100%" }}
                className="h-48 rounded-3xl object-cover border-4 border-terriary hover:scale-105 duration-200 ease-in-out "
              />
              <h1 className="text-center pb-6 capitalize">
                a bedroom with sliding door wardrobes for space saving
              </h1>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={swiper1014}
                alt=""
                style={{ width: "100%" }}
                className="h-48 rounded-3xl object-cover border-4 border-terriary hover:scale-105 duration-200 ease-in-out "
              />
              <h1 className="text-center pb-6 capitalize">
                a pastel shaddid wardrobes with a hidden dressing cabinet
              </h1>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={swiper1015}
                alt=""
                style={{ width: "100%" }}
                className="h-48 rounded-3xl object-cover border-4 border-terriary hover:scale-105 duration-200 ease-in-out "
              />
              <h1 className="text-center pb-6 capitalize">
                a modern bedroom with a wardrobes and study area
              </h1>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex justify-center pb-4">
          <MyModal
            buttonText={
              <div className="text-xs md:text-base flex items-center shadow-md mx-auto bg-primary rounded-md text-primaryWhite p-2">
                <h1>Book Free Consultation</h1>
              </div>
            }
          />
        </div>
      </div>
    </>
  );
};

export default GallerySlider;
