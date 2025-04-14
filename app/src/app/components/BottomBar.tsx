import { BottomBarItem } from "./BottomBarItem";

export default function BottomBar() {
  const items = [
    { icon: "radix-icons:calendar", label: "Calendario" },
    { icon: "material-symbols:home", label: "Inicio" },
    { icon: "line-md:chat-round", label: "Chat" },
  ];

  return (
    <div className="bottom-bar">
      {items.map((item, index) => (
        <BottomBarItem key={index} icon={item.icon} label={item.label} />
      ))}
    </div>
  );
}
