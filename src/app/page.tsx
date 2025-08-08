import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans w-fit mx-auto my-[15rem] p-8 sm:p-20">
      <div className="border border-black rounded-2xl py-2 px-4 text-3xl translate-y-[50%]">
        <p className="border-b-2 w-full mb-4">Navigation</p>
        <div className="flex flex-col gap-4">
          <Link
            href={"/dashboard"}
            className="hover:underline underline-offset-8"
          >
            Dashboard
          </Link>
          <Link href={"/login"} className="hover:underline underline-offset-8">
            Login
          </Link>
          <Link
            href={"/setpswd"}
            className="hover:underline underline-offset-8"
          >
            Set Password
          </Link>
        </div>
      </div>
    </div>
  );
}
