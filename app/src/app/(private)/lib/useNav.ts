import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { parseQueryParams } from "./parseQueryParams";

export const useNav = () => {
  const currentRoute = usePathname();
  const router = useRouter();

  const navigate = (path: string) => {
    const params = parseQueryParams(window.location.href.split("?")[1]);

    router.push(`${path}?token=${params.token}`);
  };

  return {
    currentRoute,
    navigate,
  };
};
