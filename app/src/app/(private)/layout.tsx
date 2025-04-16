import Header from "./components/Header";
import BottomBar from "./components/BottomBar";
import BannerEvents from "./components/BannerEvents";

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="private-layout">
        <BannerEvents />

        <div className="content">
          <Header />
          <main className="main-content" style={{ padding: "1rem" }}>
            {children}
          </main>
          <BottomBar />
        </div>
      </div>
    </>
  );
}
