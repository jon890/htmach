"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useWindowSize from "@/hooks/use-window-size";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import MainCarouselContent from "./main-carousel-content";

const CAROUSEL_ITEMS = [
  { image: "/images/main/main1.jpg", alt: "bg_main" },
  { image: "/images/main/main2.png", alt: "bg_main" },
  { image: "/images/main/main3.png", alt: "bg_main" },
  { image: "/images/main/main4.png", alt: "bg_main" },
  { image: "/images/main/main5.png", alt: "bg_main" },
];

export default function MainCarousel() {
  const { isMobile } = useWindowSize();

  return (
    <Carousel
      className="relative h-screen w-full"
      orientation="horizontal"
      opts={{ loop: true }}
      plugins={[Autoplay({ delay: 5000 })]}
    >
      <CarouselContent className="h-full w-full">
        {CAROUSEL_ITEMS.map((item, index) => (
          <CarouselItem className="h-screen w-full" key={index}>
            <div className="relative h-[95vh] w-full">
              <Image
                src={item.image}
                alt={item.alt}
                width={0}
                height={0}
                sizes="100vw"
                className={cn(
                  "absolute -z-10 h-full w-full object-cover opacity-80",
                  "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-cover",
                )}
                priority
                quality={100}
              />

              <MainCarouselContent />

              {!isMobile && (
                <>
                  <CarouselNext />
                  <CarouselPrevious />
                </>
              )}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
