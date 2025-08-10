"use client";

import { useEffect, useState } from "react";
import { SplashLogo } from "./svgs";

export default function SplashScreen({
  finishLoading,
}: {
  finishLoading: (done: boolean) => void;
}) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 1500);
    const endTimer = setTimeout(() => finishLoading(true), 2000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(endTimer);
    };
  }, [finishLoading]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <SplashLogo id="logo" className="h-auto w-auto animate-out" />
    </div>
  );
}
