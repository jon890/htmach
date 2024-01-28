"use client";

import Glide from "@glidejs/glide";
import Image from "next/image";
import { useEffect } from "react";

export default function MadynClients() {
  useEffect(() => {
    const glideObj = new Glide(".glide", {
      type: "carousel",
      perView: 4,
      gap: 32,
      autoplay: 2000,
    }).mount();

    // return () => {
    //   glideObj.destroy();
    // };
  }, []);

  return (
    <div className="glide">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides flex flex-row items-center justify-center space-x-10">
          <Image
            src="/images/logo/abb-logo.png"
            className="glide__slide"
            width="100"
            height="25"
            alt="abb-logo"
          />
          <Image
            src="/images/logo/andritz-logo.png"
            className="glide__slide"
            width="100"
            height="25"
            alt="andritz-logo"
          />
          <Image
            src="/images/logo/bosch-logo.png"
            className="glide__slide"
            width="100"
            height="25"
            alt="bosch-logo"
          />
          <Image
            src="/images/logo/sulzer-logo.png"
            className="glide__slide"
            width="100"
            height="25"
            alt="sulzer-logo"
          />
          <Image
            src="/images/logo/ge-vernova-logo.png"
            className="glide__slide"
            width="100"
            height="25"
            alt="ge-vernova-logo"
          />
          <Image
            src="/images/logo/simens-energy-logo.png"
            className="glide__slide"
            width="100"
            height="25"
            alt="simens-energy-logo"
          />
          <Image
            src="/images/logo/shell-logo.png"
            className="glide__slide"
            width="100"
            height="25"
            alt="shell-logo"
          />
        </ul>
      </div>
    </div>
  );
}
