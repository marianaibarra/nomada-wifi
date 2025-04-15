import { PrimeReactProvider } from "primereact/api";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nomada WiFi",
  description: "Nomada Wifi App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <PrimeReactProvider>{children}</PrimeReactProvider>
      </body>
    </html>
  );
}
