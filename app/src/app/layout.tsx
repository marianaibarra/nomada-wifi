import { PrimeReactProvider } from "primereact/api";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>
          <PrimeReactProvider>{children}</PrimeReactProvider>
        </div>
      </body>
    </html>
  );
}
