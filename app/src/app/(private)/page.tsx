"use client";

import BannerEvents from "./components/BannerEvents";
import { BreweryList } from "./components/BreweryList";

export default function App() {
  // Aquí se puede manejar evento de banner
  const showBanner = true;

  return (
    <>
      {showBanner && <BannerEvents />}
      <BreweryList title="Todas las opciones" />
      <BreweryList title="Opciones en California" />
    </>
  );
}
