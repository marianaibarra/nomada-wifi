import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";

export default function OpinionItem({
  avatar,
  name,
  opinion,
}: {
  avatar: string;
  name: string;
  opinion: string;
}) {
  return (
    <>
      <div className="flex align-items-center justify-between">
        <div className="flex align-items-center items-center gap-2">
          <Avatar image={avatar} size="normal" shape="circle" />
          <h3>{name}</h3>
        </div>
        <Button link label="Responder"></Button>
      </div>
      <div>
        <p>{opinion}</p>
      </div>
    </>
  );
}
