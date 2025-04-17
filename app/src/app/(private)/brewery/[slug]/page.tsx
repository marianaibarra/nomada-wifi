"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import BreweryCarouselImages from "@/app/(private)/components/BreweryCarouselImages";
import OpinionItem from "@/app/(private)/components/OpinionItem";
import { Button } from "primereact/button";
import { useEffect, useState } from "react";
import { getBreweryById } from "@/app/(private)/lib/getBreweries";
import { useParams } from "next/navigation";

export default function Page() {
  const opinions = [
    {
      avatar:
        "https://i.pinimg.com/736x/ee/39/8b/ee398b1f6674bc093c107927f1d50c14.jpg",
      name: "Minji",
      opinion: "Es una buena cervecería, sirven buena comida",
    },
    {
      avatar: "https://i.imgur.com/jo7LngU.jpg",
      name: "Hanni",
      opinion: "Es una buena cervecería, sirven buena comida",
    },
    {
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/NewJeans_Danielle_April_2024.jpg/250px-NewJeans_Danielle_April_2024.jpg",
      name: "Danielle",
      opinion: "Es una buena cervecería, sirven buena comida",
    },
    {
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/20230905_Haerin_%28NewJeans%29.jpg/1200px-20230905_Haerin_%28NewJeans%29.jpg",
      name: "Haerin",
      opinion: "Es una buena cervecería, sirven buena comida",
    },
    {
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Hyein_%28NewJeans%29_220819.jpg/960px-Hyein_%28NewJeans%29_220819.jpg",
      name: "Hyein",
      opinion: "Es una buena cervecería, sirven buena comida",
    },
  ];

  const [breweryData, setBreweryData] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const params = useParams<{ slug: string }>();
  const breweryId: string = params.slug ?? "";

  useEffect(() => {
    getBreweryById(breweryId).then((data) => {
      const dataMapped = {
        name: data.name,
        address: data.address_1,
        phone: data.phone,
      };
      setBreweryData(dataMapped);
    });
  }, [breweryId]);

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">{breweryData.name}</h1>
      <div className="flex items-center mb-2">
        <Icon icon="bx:map" width="24" height="24" />
        <span className="ml-2">{breweryData.address}</span>
      </div>

      <div className="flex items-center mb-4">
        <Icon icon="ic:baseline-phone" width="24" height="24" />
        <span className="ml-2">{breweryData.phone}</span>
      </div>
      <BreweryCarouselImages></BreweryCarouselImages>
      <h1 className="text-2xl font-base mt-4 mb-4">Opiniones</h1>
      {opinions.map((opinion, index) => (
        <div key={index} className="mb-4">
          <OpinionItem
            avatar={opinion.avatar}
            name={opinion.name}
            opinion={opinion.opinion}
          />
        </div>
      ))}
      <Button
        className="w-full text-white mb-6"
        style={{
          background: "linear-gradient(to right, #3540E8, #E41AD6)",
        }}
        label="Reservar mesa"
      ></Button>
      <Button
        className="w-full text-white"
        style={{
          padding: "2px",
          borderRadius: "8px",
          background: "linear-gradient(to right, #3540E8, #E41AD6)",
        }}
      >
        <div
          className="w-full"
          style={{
            background: "black",
            borderRadius: "6px",
            padding: "0.5rem 1rem",
            textAlign: "center",
          }}
        >
          Opciones de transporte
        </div>
      </Button>
    </>
  );
}
