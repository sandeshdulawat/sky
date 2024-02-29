import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-grayy mt-16 pt-12">
      <div className="container max-w-screen-xl ">
        <div className="grid mx-auto text-center  text-secondary">
          <img
            className="mx-auto"
            src="https://firebasestorage.googleapis.com/v0/b/decorum-furniture.appspot.com/o/archazine%2F1003-project-lodha%2Fqr-code.jpg?alt=media&token=924a0637-79a7-4c9f-9d08-9beb489ade1f"
            alt=""
          />
          <h1 className="">Agent Maha RERA No. – A51900035992</h1>

          <h1 className="">Project Maha RERA – P51900046567</h1>
          <p className="text-wrap text-gray-600 font-pop tracking-tight text-xs md:text-sm py-2">
            <span className="font-semibold text-secondary ">Disclaimer :</span>
            The information provided on this website is intended exclusively for
            informational purposes and should not be construed as an offer of
            services. This site is managed by a RERA authorized real estate
            agent. The pricing information presented on this website is subject
            to alteration without advance notification, and the assurance of
            property availability cannot be guaranteed. The images showcased on
            this website are for representational purposes only and may not
            accurately reflect the actual properties.
          </p>
          <Link
            to={"/LodhaBellevueprivacypolicy"}
            className="text-xs hover:underline mt-2"
          >
            Privacy Policy
          </Link>
          <p className="font-light text-xs pb-2">
            All Rights Reserved. © 2023 Shout Marketing
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
