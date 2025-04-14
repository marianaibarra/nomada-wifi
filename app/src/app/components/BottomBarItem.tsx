import { Icon } from "@iconify/react";

export const BottomBarItem = ({
  icon,
  label,
}: {
  icon: string;
  label: string;
}) => {
  return (
    <div className="bottom-bar-item">
      <Icon icon={icon} width={24} height={24} />
      <span>{label}</span>
    </div>
  );
};
