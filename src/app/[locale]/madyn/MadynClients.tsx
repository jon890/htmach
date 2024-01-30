"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function MadynClients() {
  return (
    <Carousel className="w-full max-w-[1300px] *:object-cover">
      <CarouselContent className="-ml-1">
        <CarouselItem className="basis-1/3 pl-4">
          <Image
            src="/images/logo/abb-logo.png"
            className="glide__slide"
            width="100"
            height="25"
            alt="abb-logo"
          />
        </CarouselItem>

        <CarouselItem className="basis-1/3 pl-4">
          <Image
            src="/images/logo/andritz-logo.png"
            className="glide__slide"
            width="100"
            height="25"
            alt="andritz-logo"
          />
        </CarouselItem>

        <CarouselItem className="basis-1/3 pl-4">
          <Image
            src="/images/logo/bosch-logo.png"
            className="glide__slide"
            width="100"
            height="25"
            alt="bosch-logo"
          />
        </CarouselItem>

        <CarouselItem className="basis-1/3 pl-4">
          <Image
            src="/images/logo/sulzer-logo.png"
            className="glide__slide"
            width="100"
            height="25"
            alt="sulzer-logo"
          />
        </CarouselItem>

        <CarouselItem className="basis-1/3 pl-4">
          <Image
            src="/images/logo/ge-vernova-logo.png"
            className="glide__slide"
            width="100"
            height="25"
            alt="ge-vernova-logo"
          />
        </CarouselItem>

        <CarouselItem className="basis-1/3 pl-4">
          <Image
            src="/images/logo/simens-energy-logo.png"
            className="glide__slide"
            width="100"
            height="25"
            alt="simens-energy-logo"
          />
        </CarouselItem>

        <CarouselItem className="basis-1/3 pl-4">
          <Image
            src="/images/logo/shell-logo.png"
            className="glide__slide"
            width="100"
            height="25"
            alt="shell-logo"
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
