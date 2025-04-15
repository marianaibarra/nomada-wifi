import { Icon } from "@iconify/react";

export default function Header() {
  const width = 26;
  const height = 26;
  return (
    <>
      <div className=" flex h-[2rem] items-center p-4 pt-6 justify-between">
        <Icon icon="ic:baseline-menu" width={width} height={height} />
        <div className="flex items-center gap-3">
          <Icon
            icon="ic:baseline-notifications"
            width={width}
            height={height}
          />
          <Icon icon="ic:baseline-person" width={width} height={height} />
        </div>
      </div>
    </>
  );
}
