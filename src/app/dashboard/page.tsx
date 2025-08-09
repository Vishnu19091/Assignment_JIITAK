"use client";

import { usePathname } from "next/navigation";
import { Main } from "./components/main";

/**
 * @returns Dashboard if pathname matches the current path
 * and with Main Component is returned
 */
export default function Dashboard() {
  const pathname = usePathname();

  return <>{pathname === "/dashboard" && <Main />}</>;
}
