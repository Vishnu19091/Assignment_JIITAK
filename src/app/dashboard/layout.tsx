"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { useState } from "react";
import { NavBar } from "./components/navbar";
import { MenuBar } from "./components/menubar";
import { Menu } from "@/components/svgs";

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
              <Menu className="h-6 w-6" />
            </button>
          </div>

          <MenuBar />
          {children}
        </div>
      </div>
    </main>
  );
}
