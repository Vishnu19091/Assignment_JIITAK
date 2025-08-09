"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MenuBar } from "./page";
import { NavBar } from "./page";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <main className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <div className="flex flex-row gap-[1.5px]">
        {/* Sidebar (hidden on mobile unless open) */}
        <NavBar isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />

        <div className="flex flex-col w-full">
          {/* Mobile menu button */}
          <div className="tablet:hidden p-4">
            <button onClick={() => setIsNavOpen(true)}>
              <img src="./assets/menu.svg" alt="Menu" width={24} height={24} />
            </button>
          </div>

          <MenuBar />
          {children}
        </div>
      </div>
    </main>
  );
}
