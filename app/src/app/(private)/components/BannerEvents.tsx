"use client";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

export default function BannerEvents() {
  const title = "Happy Hours";
  const message = "16:00 - 17:00 hs MEX";

  // Esto puede estar en un estado para mostrar el banner
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowBanner(false);
    }, 3000);
  }, []);

  return (
    <>
      {showBanner && (
        <div
          className="fixed z-100 w-full flex justify-content-center align-items-center items-center gap-4 border-l-4"
          style={{
            backgroundColor: "#feebcb",
            padding: "10px",
            borderColor: "#dd6b20",
          }}
        >
          <Icon
            icon="material-symbols:info"
            width="24"
            height="24"
            style={{ color: "#dd6b20" }}
          />
          <div className="text-black">
            <h1 className="font-semibold"> {title} </h1>
            <h3 className="font-base"> {message} </h3>
          </div>
        </div>
      )}
    </>
  );
}
