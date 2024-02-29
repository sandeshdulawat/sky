import React from "react";
import Layout from "../components/Layout/Layout";
import { FaDownload } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";

const phoneNumber = "9820667042";
const message = encodeURIComponent("Hello there! I would like to chat.");

const handleClick = () => {
  window.open(
    `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`,
    "_blank"
  );
};

function ThankYou() {
  return (
    <Layout>
      <div className="container min-h-screen flex justify-center items-center my-6">
        <div className="grid max-w-screen-lg space-y-8">
          <h1 className="text-3xl lg:text-4xl font-medium text-center text-primary uppercase text-balance">
            Welcome to LODHA BELLEVUE MAHALAXMI
          </h1>
          <div className="space-y-1">
            <h1 className="font-semibold text-pretty font-monst text-base lg:text-lg">
              LODHA BELLEVUE MAHALAXMI -
            </h1>
            <p className="text-xs lg:text-base md:font-medium text-gray-500 ml-2">
              Following the success of landmark projects like The World Towers,
              Lodha Park, and Lodha Altamount, which redefined luxury living for
              South Mumbai, Lodha now brings a one-of-a-kind development to
              Mahalaxmi: Lodha Bellevue. Lodha Bellevue is the height of
              elegance and sophistication, where pleasure knows no bounds and
              luxury surpasses all expectations. Designed to satisfy the
              discriminating tastes of international families, Lodha Bellevue
              offers opulent residences with painstaking attention to detail in
              every element. Luxurious residences with carefully chosen details
              abound in Lodha Bellevue. With breathtaking views of the sea and
              surrounding countryside from every residence in this prestigious
              development, your daily life will seem even more extraordinary.
              The goals of Mumbai's most elite families are reflected in the
              large rooms, little wasted space, expansive decks, and study
              areas. It's
               located close to Jacob's Circle, across from Vivarea,
              in the centre of Mahalaxmi, Lodha Bellevue is a tribute to
              elegance and grandeur. Five minutes drive from Lodha Primero,
              Lodha Excelus, and Lodha—the sold-out towers.
            </p>
          </div>
          <div className="w-full h-auto mx-auto space-y-4 md:flex md:justify-around md:items-center">
            <div className="w-fit text-sm h-fit md:text-base text-nowrap flex gap-2 py-2 px-4 rounded-full bg-primary text-white hover:bg-transparent hover:text-primary duration-300 border-2 hover:border-primary text-center">
              <FaDownload className="animate-bounce" />
              <button onClick={handleClick}>Download Broucher</button>
            </div>
            <div className="w-fit text-sm h-fit md:text-base items-center text-nowrap flex gap-2 py-2 px-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:bg-transparent hover:text-black text-center duration-300">
              <MdAddCall className="animate-bounce" />
              <a href="tel:+91-982-066-7042">Call Executive Now</a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ThankYou;
