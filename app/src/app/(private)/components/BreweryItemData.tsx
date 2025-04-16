import { Icon } from "@iconify/react/dist/iconify.js";

export const BreweryItemData = ({
  icon,
  value,
}: {
  icon: string;
  value: string;
}) => {
  return (
    <>
      <div className="flex items-center">
        <Icon icon={icon} width="24" height="24" />
        <span className="ml-2">{value}</span>
      </div>
    </>
  );
};
