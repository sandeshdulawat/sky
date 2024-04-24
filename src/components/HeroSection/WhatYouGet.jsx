import React from "react";

import img1 from "../../assets/images/bedroom-interior-designs-1.png";
import img3 from "../../assets/images/best-interior-design-for-kitchen.png";
import img4 from "../../assets/images/space-saving-apartment-interior-designs.png";
import MyModal from "../../Pages/Modal";

function WhatYouGet() {
  return (
    <div>
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-center p-6 font-semibold text-xl md:text-2xl">
          What You Get
        </h1>
        <div className="grid md:grid-cols-2 gap-8 w-full mx-auto my-4 text-xs md:text-base px-8">
          <div className="flex justify-around items-left gap-4">
            <img src={img1} alt=""/>
            <div>
              <h1 className="text-lg font-medium">Living/Dining Room</h1>
              <p>TV Unit, TV Back Panelling, Crockery Unit, Bar Unit, Bookshelf</p>
            </div>
          </div>
          <div className="flex justify-around items-left gap-4">
            <img src={img1} alt="" />
            <div>
              <h1 className="text-lg font-medium">Bedroom</h1>
              <p>Wardrobes, TV Unit, Bed with Storage, Dressing Unit, Study Unit</p>
            </div>
          </div>
          <div className="flex justify-around items-center gap-8">
            <img src={img3} alt="" />
            <div>
              <h1 className="text-lg font-medium">Kitchen</h1>
              <p>Countertops, Backsplashes, Accessories, Shutters, Storage</p>
            </div>
          </div>
          <div className="flex justify-around items-center gap-6">
            <img src={img4} alt="" />
            <div>
              <h1 className="text-lg font-medium">Innovative Storage</h1>
              <p>Janitor Unit, Skirting Drawer, Pantry Pull Out, Appliance Garage, Hidden Bar Cabinet, Magic Corner</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <MyModal
            buttonText={
              <div className="flex items-center shadow-md mx-auto bg-primary rounded-md text-primaryWhite p-2 mt-12 hover:scale-105 hover:-translate-y-[0.5px] duration-200">
                <h1>Get Free Estimates</h1>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default WhatYouGet;
