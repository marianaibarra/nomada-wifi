"use client";
import Header from "./components/Header";
import BottomBar from "./components/BottomBar";
import BannerEvents from "./components/BannerEvents";
import { useNav } from "./lib/useNav";

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { currentRoute, navigate } = useNav();

  return (
    <>
      <div
        className="private-layout"
        style={{
          width: "100%",
          position: "relative",
          backgroundColor: "#010316",
          marginTop: "50px",
          marginBottom: "50px",
        }}
      >
        <BannerEvents />

        <div className="content">
          {currentRoute.startsWith("/brewery/") ? (
            <div onClick={() => navigate("/")} className="cursor-pointer">
              <Header icon="mdi:arrow-left" />
            </div>
          ) : (
            <Header icon="ic:baseline-menu" />
          )}
          <main className="main-content" style={{ padding: "1rem" }}>
            {children}
          </main>
          <BottomBar />
        </div>
      </div>
    </>
  );
}
