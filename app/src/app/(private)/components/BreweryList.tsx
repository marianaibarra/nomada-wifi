import { BreweryItem } from "./BreweryItem";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export function BreweryList({ title }: { title: string }) {
  const items = [
    {
      breweryName: "Bar Nim",
      breweryImage:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTE8Abnpzki_R28H5sSMscM-EI9Q2ZETpzIhkpOlJJqZiw9VUQtHJsIAE6mEZSAal8MTLfHSnb_5DDrsjBbup_-RQ",
      breweryAddress: "123 Main St, Anytown, USA",
      phoneNumber: "555-555-5555",
    },
    {
      breweryName: "Bar Nim",
      breweryImage:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTE8Abnpzki_R28H5sSMscM-EI9Q2ZETpzIhkpOlJJqZiw9VUQtHJsIAE6mEZSAal8MTLfHSnb_5DDrsjBbup_-RQ",
      breweryAddress: "123 Main St, Anytown, USA",
      phoneNumber: "555-555-5555",
    },
    {
      breweryName: "Bar Nim",
      breweryImage:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTE8Abnpzki_R28H5sSMscM-EI9Q2ZETpzIhkpOlJJqZiw9VUQtHJsIAE6mEZSAal8MTLfHSnb_5DDrsjBbup_-RQ",
      breweryAddress: "123 Main St, Anytown, USA",
      phoneNumber: "555-555-5555",
    },
  ];

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
