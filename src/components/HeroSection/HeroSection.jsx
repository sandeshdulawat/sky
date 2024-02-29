import React from "react";
import backgroundMobile from "../../assets/images/home-interior-design-m.jpg";
import background from "../../assets/images/home-interior-design-d.jpg";
import service1 from "../../assets/images/personalised-home-interiors.png";
import service2 from "../../assets/images/top-interior-designers.png";
import service3 from "../../assets/images/low-budget-interior-designers-near-me.png";
import service4 from "../../assets/images/best-interior-designer.png";

function HeroSection() {
  return (
    <div>
      <picture>
        <source media="(max-width: 600px)" srcSet={backgroundMobile} />
        <img
          className="w-full h-fit bg-cover bg-center bottom-0 left-0"
          src={background}
          alt=""
        />
      </picture>
      <div className="bg-tertiary">
        <h2 className="text-center text-primaryWhite font-sans font-medium text-sm md:text-lg p-2 md:p-4">
          Up to 15% OFF on your Home Interiors. Limited Period Offer.{" "}
          <a href="" className="underline">
            GET OFFER
          </a>
        </h2>
      </div>
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-center p-6 font-semibold text-lg md:text-2xl">
          Why Choose Design Cafe House?
        </h1>
        <div className="grid grid-cols-2 md:flex justify-evenly gap-8 w-full mx-auto my-4 text-xs md:text-base">
          <div className="flex flex-col items-center text-center gap-2">
            <img src={service1} alt="" className="" />
            <p>Personalised Designs</p>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <img src={service2} alt="" className="" />
            <p>20% EXTRA Storage</p>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <img src={service3} alt="" className="" />
            <p>No Cost EMIs</p>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <img src={service4} alt="" className="" />
            <p>10 Year Warranty</p>
          </div>
        </div>
        <button className="flex items-center shadow-md mx-auto bg-primary rounded-md text-primaryWhite p-2 mt-12">
        Talk To Our Designer
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
