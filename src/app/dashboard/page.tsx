"use client";

import { usePathname } from "next/navigation";
import { Main } from "./components/main";

/**
 * @returns Dashboard if pathname matches the current path
 * and with Main Component is returned
 */
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a loading state
  }

  // safe to use window here
  return <Main />;
}
