import React, { useState, useEffect } from "react";
import "../../../src/index.css";
import Logo from "../../assets/images/dcLogo.png";
import { PhoneCall } from "lucide-react";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={
        isSticky
          ? "bg-primaryWhite sticky top-0 z-50 w-full mx-auto "
          : "w-full sticky z-50"
      }
    >
      <div
        className={`w-full mx-auto py-2 px-1 duration-100 z-50 ${
          isSticky ? "py-4 lg:py-2" : ""
        }`}
      >
        <div className="flex justify-between items-center mx-2">
          <a href="/">
            <img
              src={Logo}
              alt=""
              className="w-2/6 sm:w-2/6 md:w-3/6 lg:w-3/6"
            />
          </a>
          <div className="flex gap-8 items-center">
            <div className="hidden md:block">
            <a
              href=""
              className=" flex gap-2 items-center hover:underline duration-200"
            >
              <PhoneCall size={20} />
              080-68065001
            </a>
            </div>
            <a href="">
              <button className="bg-primary text-xs text-primaryWhite p-2 rounded-md shadow-md text-nowrap">
                Get Free Quote
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
