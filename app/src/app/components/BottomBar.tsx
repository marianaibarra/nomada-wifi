import { BottomBarItem } from "./BottomBarItem";

export default function BottomBar() {
  const items = [
    { icon: "radix-icons:calendar", label: "Calendario", path: "/calendar" },
    { icon: "material-symbols:home", label: "Inicio", path: "/" },
    { icon: "line-md:chat-round", label: "Chat", path: "/chat" },
  ];

  return (
    <div className="bottom-bar">
      {items.map((item, index) => (
        <BottomBarItem
          key={index}
          icon={item.icon}
          label={item.label}
          path={item.path}
        />
      ))}
    </div>
  );
}
