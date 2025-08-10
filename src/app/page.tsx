import Image from "next/image";
import Link from "next/link";
import Logo from "./resetpassword/components/logo";
import { NavHome } from "@/components/svgs";

// TODO: ADD LOADING STATE TO submit buttons

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center px-4 py-8">
      {/* LOGO Card */}
      <Logo />

      {/* Navigation */}

      {/* Navigation Card */}
      <div className="font-sans w-full max-w-sm border border-black rounded-2xl p-6 sm:p-8">
        <p className="flex flex-row gap-3 items-center border-b-2 border-black mb-4 pb-2 text-3xl">
          <span>
            <NavHome className="h-8 w-8" />
          </span>
          Navigation
        </p>

        <div className="flex flex-col gap-4">
          <Link
            href="/dashboard"
            className="hover:underline underline-offset-8 w-fit"
          >
            Dashboard
          </Link>
          <Link
            href="/login"
            className="hover:underline underline-offset-8 w-fit"
          >
            Login
          </Link>
          <Link
            href="/resetpassword"
            className="hover:underline underline-offset-8 w-fit"
          >
            Reset Password
          </Link>
        </div>
      </div>
    </div>
  );
}
