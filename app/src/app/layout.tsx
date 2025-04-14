export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <div>
        Este es el header
      </div>
        {children}
      </body>
    </html>
  );
}
