import { Icon } from "@iconify/react";
import Link from "next/link";

export const BottomBarItem = ({
  icon,
  label,
  path,
}: {
  icon: string;
  label: string;
  path: string;
}) => {
  return (
    <Link href={path}>
      <div className="bottom-bar-item">
        <Icon icon={icon} width={24} height={24} />
        <span>{label}</span>
      </div>
    </Link>
  );
};
