import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import BottomBar from "../components/BottomBar";

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="private-layout">
        {/* <Sidebar /> */}
        <div className="content">
          <Header />
          <main className="main-content" style={{ padding: "1rem" }}>
            {/* <PrimeReactProvider> */}
            {children}
            {/* </PrimeReactProvider> */}
          </main>
          <BottomBar />
        </div>
      </div>
    </>
  );
}
