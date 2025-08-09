import { LOGO } from "@/components/svgs";

/**
 * ReUsable Component
 * @returns Logo
 */
export default function Logo() {
  return (
    <div className="border-b-2 py-6 px-3">
      <LOGO className="h-auto w-auto" />
    </div>
  );
}
