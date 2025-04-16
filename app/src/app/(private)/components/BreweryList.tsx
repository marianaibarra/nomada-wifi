import { BreweryItem } from "./BreweryItem";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

type items = {
  id: string;
  breweryName: string;
  breweryImage: string;
  breweryAddress: string;
  phoneNumber: string;
};

export function BreweryList({
  title,
  items,
}: {
  title: string;
  items: items[];
}) {
  return (
    <>
      <div className="mt-4">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <Swiper
          slidesPerView="auto"
          spaceBetween={5} // Espacio entre slides
          style={{ paddingRight: "1rem" }}
        >
          {items.map((item, key) => (
            <SwiperSlide key={key}>
              <BreweryItem
                id={item.id}
                name={item.breweryName}
                image={item.breweryImage}
                address={item.breweryAddress}
                phone={item.phoneNumber}
              ></BreweryItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
