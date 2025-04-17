import { usePathname } from "next/navigation";

export const useNav = () => {
  const currentRoute = usePathname();

  return {
    currentRoute,
  };
};
