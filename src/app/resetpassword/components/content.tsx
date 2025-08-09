import Link from "next/link";
import Form from "./form";

/**
 * Reset Password Content
 * contains title, message, form, redirect to login button
 */
export default function ResetContent() {
  return (
    <div className="w-[30%] mx-auto my-auto flex flex-col gap-5 items-center">
      <h1 className="font-bold text-xl text-center">
        Please enter your current email address. We will send you a URL for
        resetting your password via email
      </h1>
      <p className="font-normal text-center text-gray-800">
        Please enter your current email address and we will send you a link to
        reset your password
      </p>
      <Form />

      <Link href="/login" className="font-[500] text-lg text-black">
        Return to login screen
      </Link>
    </div>
  );
}
