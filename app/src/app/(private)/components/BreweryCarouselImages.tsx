"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function BreweryCarouselImages() {
  const images = [
    {
      alt: "Imagen 1",
      src: "https://upload.wikimedia.org/wikipedia/commons/c/cc/NewJeans_theMEGASTUDY.jpg",
    },
    {
      alt: "Imagen 2",
      src: "https://media.npr.org/assets/img/2023/08/28/_36a8456_sy_nj_wide-8834a4249492d4821e770582082edbe89b89ea2e.jpg?s=1100&c=50&f=jpeg",
    },
    {
      alt: "Imagen 3",
      src: "https://www.rollingstone.com/wp-content/uploads/2022/12/NewJeans-Official-Photo.jpg",
    },
  ];

  return (
    <>
      <Swiper slidesPerView="auto" spaceBetween={10}>
        {images.map((image, key) => (
          <SwiperSlide key={key} style={{ width: "150px" }}>
            <div key={key}>
              <img
                src={image.src}
                alt={image.alt}
                width={300}
                style={{ borderRadius: "8px" }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
