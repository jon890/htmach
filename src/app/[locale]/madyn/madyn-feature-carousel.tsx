"use client";

import InViewHelper from "@/components/in-view-helper";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const CAROUSEL_ITEMS = [
  {
    image: "/images/madyn/img_madyn1.png",
    alt: "img_madyn1",
    content: "Shaft Models​",
  },
  {
    image: "/images/madyn/img_madyn2.jpeg",
    alt: "img_madyn2",
    content: "Lateral Analysis Campbell Diagram with Mode Shapes",
  },
];

/**
 * 마딘 특징 캐러셀 컴포넌트
 * @returns
 */
export default function MadynFeatureCarousel() {
  return (
    <Carousel
      orientation="horizontal"
      opts={{ loop: true }}
      plugins={[Autoplay({ delay: 5000 })]}
    >
      <CarouselContent className="mt-12 h-full w-full">
        {CAROUSEL_ITEMS.map((item, index) => (
          <CarouselItem className="h-[600px] w-full" key={index}>
            <div className="relative h-full w-full">
              <Image
                src={item.image}
                alt={item.alt}
                width={0}
                height={0}
                sizes="100vw"
                className={cn(
                  "absolute -z-10 h-full w-full rounded-xl object-cover opacity-80",
                  "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-cover",
                )}
                priority
                quality={100}
              />

              <InViewHelper>
                <p className="font-white px-10 pt-10 text-2xl">
                  {item.content}
                </p>
              </InViewHelper>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
