import { Icon } from "@iconify/react/dist/iconify.js";
import { Avatar } from "primereact/avatar";
import { Card } from "primereact/card";
import { BreweryItemData } from "./BreweryItemData";
import { Button } from "primereact/button";
import { useNav } from "../lib/useNav";

export function BreweryItem({
  id,
  name,
  image,
  address,
  phone,
}: {
  id: string;
  name: string;
  image: string;
  address: string;
  phone: string;
}) {
  const dataProps = [
    {
      icon: "bx:map",
      value: address,
    },
    {
      icon: "ic:baseline-phone",
      value: phone,
    },
  ];

  const { navigate } = useNav();

  return (
    <>
      <Card
        title={<h1 className="text-xl font-semibold">{name}</h1>}
        footer={
          <Button
            className="w-full text-white"
            style={{
              background: "linear-gradient(to right, #3540E8, #E41AD6)",
            }}
            label="Ver más"
            onClick={() => navigate(`/brewery`)}
          ></Button>
        }
        style={{ backgroundColor: "#13132d" }}
        className="h-[18rem] content-center"
      >
        <div className="flex gap-4 items-center">
          <Avatar image={image} shape="circle" size="xlarge" />
          <div className="grid gap-2">
            {dataProps.map((prop, index) => (
              <BreweryItemData
                key={index}
                icon={prop.icon}
                value={prop.value}
              />
            ))}
          </div>
        </div>
      </Card>
    </>
  );
}
