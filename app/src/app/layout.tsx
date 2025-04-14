import { PrimeReactProvider } from "primereact/api";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="private-layout">
          {/* <Sidebar /> */}
          <div className="content">
            <Header />
            <main className="main-content">
              {/* <PrimeReactProvider> */}
              {children}
              {/* </PrimeReactProvider> */}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
