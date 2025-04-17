"use client";

import { useEffect, useState } from "react";
import { BreweryList } from "./components/BreweryList";
import { getBreweries, getBreweriesInCalifornia } from "./lib/getBreweries";
import CardSkeleton from "./components/CardSkeleton";

export default function App() {
  // Aquí se puede manejar evento de banner

  const [breweries, setBreweries] = useState([]);
  const [isBreweriesLoading, setIsBreweriesLoading] = useState(true);

  useEffect(() => {
    getBreweries().then((breweries) => {
      setBreweries(
        breweries.map(
          (b: {
            id: string;
            name: string;
            address_1: string;
            phone: string;
          }) => ({
            id: b.id,
            breweryName: b.name,
            breweryImage:
              "https://i.pinimg.com/736x/ee/39/8b/ee398b1f6674bc093c107927f1d50c14.jpg",
            breweryAddress: b.address_1,
            phoneNumber: b.phone,
          }),
        ),
      );
      setIsBreweriesLoading(false);
    });
  }, []);

  const [breweriesInCalifornia, setBreweriesInCalifornia] = useState([]);
  const [isBreweriesInCaliforniaLoading, setIsBreweriesInCaliforniaLoading] =
    useState(true);

  useEffect(() => {
    getBreweriesInCalifornia().then((breweries) => {
      setBreweriesInCalifornia(
        breweries.map(
          (b: {
            id: string;
            name: string;
            address_1: string;
            phone: string;
          }) => ({
            id: b.id,
            breweryName: b.name,
            breweryImage:
              "https://i.pinimg.com/736x/ee/39/8b/ee398b1f6674bc093c107927f1d50c14.jpg",
            breweryAddress: b.address_1,
            phoneNumber: b.phone,
          }),
        ),
      );
      setIsBreweriesInCaliforniaLoading(false);
    });
  }, []);

  return (
    <>
      {isBreweriesLoading ? (
        <CardSkeleton />
      ) : (
        <BreweryList items={breweries} title="Todas las opciones" />
      )}
      {isBreweriesInCaliforniaLoading ? (
        <CardSkeleton />
      ) : (
        <BreweryList
          items={breweriesInCalifornia}
          title="Opciones en California"
        />
      )}
    </>
  );
}
