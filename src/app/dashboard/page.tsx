"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Main } from "./components/main";

interface NavBarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NavBar({ isOpen, onClose }: NavBarProps) {
  const pathname = usePathname();
  const active =
    "bg-orange-100 text-orange-600 border-r-4 border-orange-500 font-bold";

  const navLinks = [
    { href: "/dashboard", label: "Dashboard", icon: "./assets/dashboard.svg" },
    {
      href: "/dashboard/users",
      label: "Registered Users",
      icon: "./assets/users.svg",
    },
    { href: "/dashboard/winners", label: "Winners", icon: "./assets/gift.svg" },
    { href: "/dashboard/admin", label: "Admin", icon: "./assets/admin.svg" },
  ];

  return (
    <>
      {/* Sidebar / Drawer */}
      <aside
        className={`fixed tablet:static top-0 left-0 min-h-screen w-[18rem] bg-white shadow-md z-50 transform transition-transform duration-300
        ${
          isOpen ? "translate-x-0 w-full" : "-translate-x-full"
        } tablet:translate-x-0`}
      >
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <h1 className="text-xl font-bold text-orange-500">LookMeal</h1>
          <button className="tablet:hidden" onClick={onClose}>
            <img src="./assets/close.svg" alt="Close" width={24} height={24} />
          </button>
        </div>

        <nav className="mt-6 space-y-2 text-sm">
          {navLinks.map(({ href, label, icon }) => (
            <Link
              key={href}
              href={href}
              className={`flex flex-row gap-4 items-center px-6 py-3 text-lg ${
                pathname === href ? active : "hover:bg-gray-100"
              }`}
              onClick={onClose}
            >
              <span>
                <img src={icon} alt={label} height="24" width="24" />
              </span>
              <p>{label}</p>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Mobile overlay */}
      {isOpen && <div className="fixed tablet:hidden" onClick={onClose} />}
    </>
  );
}

export function MenuBar() {
  return (
    <div className="bg-white w-full h-fit flex justify-end px-3 py-2.5">
      <p className="cursor-pointer hover:scale-115 transition-all duration-300 ease-in-out">
        {/* User Icon SVG */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="#676562"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
            stroke="#676562"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 20.662V19C7 18.4696 7.21071 17.9609 7.58579 17.5858C7.96086 17.2107 8.46957 17 9 17H15C15.5304 17 16.0391 17.2107 16.4142 17.5858C16.7893 17.9609 17 18.4696 17 19V20.662"
            stroke="#676562"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </p>
    </div>
  );
}

/**
 * @returns Dashboard if pathname matches the current path
 * and with Main Component is returned
 */
export default function Dashboard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/dashboard" && <Main />}
      {children}
    </>
  );
}
