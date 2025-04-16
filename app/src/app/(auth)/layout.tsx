export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center h-screen  "
        style={{ backgroundColor: "#010316" }}
      >
        {children}
      </div>
    </>
  );
}
