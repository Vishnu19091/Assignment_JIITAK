import { usePathname } from "next/navigation";
import Link from "next/link";

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
