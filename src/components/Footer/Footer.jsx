import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="bg-[#d3b28b] py-32">
        <div className="container max-w-screen-xl ">
          <div className="grid mx-auto text-center space-y-8  text-secondary">
            <h1 className="text-2xl md:text-2xl capitalize font-semibold drop-shadow-lg text-primaryBlack">
              ready to design your dream home?
            </h1>
            <div className="pb-4 drop-shadow-lg">
              <button className="text-xs md:text-base flex items-center shadow-md mx-auto bg-primary rounded-md text-primaryWhite px-6 py-2 hover:scale-105 hover:-translate-y-[0.5px] duration-200">
              Book Design Cafe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primaryBlack p-2">
        <p className="text-center text-[10px] md:text-sm text-primaryWhite">© 2022 G S E-Commerce Pvt Ltd. | Privacy Policy | Terms of Use</p>
      </div>
    </>
  );
}

export default Footer;
