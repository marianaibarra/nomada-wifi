"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

export default function BreweryCarouselImages() {
  const numbers = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <>
      <Swiper slidesPerView="auto" spaceBetween={10}>
        {numbers.map((number) => (
          <SwiperSlide key={number} style={{ width: "150px" }}>
            <div key={number}>
              <Image
                src={`/images/brewery${number}.jpg`}
                alt={`Brewery ${number}`}
                width={300}
                height={300}
                style={{ borderRadius: "8px" }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
