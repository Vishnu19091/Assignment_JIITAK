"use client";

import { useState } from "react";
import { Input } from "../resetpassword/components/input";
import { validateEmail } from "../resetpassword/components/form";
import FormErrorMessage from "../resetpassword/components/errormessage";
import { PasswordInput } from "../resetpassword/setpassword/components/pswdinput";
import Link from "next/link";
import router, { useRouter } from "next/navigation";
import { toast, ToastContainer, Slide } from "react-toastify";

{
  /*
TODO:
title: login

add input fields
EMAIL Address
passwords

button: login

forgot password link-> this redirects to the '/resetpassword' page
  */
}

/**
 * @returns **Login Form**
 */
export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);

  const [isAccoutBlocked, setIsAccoutBlocked] = useState<boolean>(false);

  const [password, setpassword] = useState<string>("");

  const router = useRouter();

  // Handle form submission
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (isAccoutBlocked) {
      // show account blocked message for a couple of seconds then don't redirect to dashboard page
      toast.error("Account Blocked can't login now!", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: true,
        pauseOnHover: true,
        draggable: true,
        transition: Slide,
      });
    } else if (email.length > 8 && password.length > 8) {
      // show success message for a couple of seconds then redirect to dashboard page
      toast.success("Form submitted successfully! You'll be redirected", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: true,
        pauseOnHover: true,
        draggable: true,
        transition: Slide,
      });

      setTimeout(() => {
        router.push("/dashboard");
      }, 4500);
    } else {
      // show error message for a couple of seconds then don't redirect to dashboard page
      toast.error("Please fix the errors before submitting.", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: true,
        pauseOnHover: true,
        draggable: true,
        transition: Slide,
      });
    }
    // console.log("clicked");
  }

  // Validate Email
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setEmail(value);
    if (value === "") {
      setIsEmailValid(true);
    } else if (value.length >= 8) {
      setIsEmailValid(validateEmail(value) || value === "");
    } else {
      setIsEmailValid(false);
    }
  };

  return (
    <div className="w-full px-4 tablet:p-0 tablet:w-[30%] mx-auto my-auto flex flex-col gap-5 items-center">
      <h1 className="text-5xl font-semibold">Login</h1>

      <form onSubmit={handleSubmit}>
        <label className="self-start">Email Address</label>

        <Input
          OnHandleChange={handleChange}
          valid={isEmailValid}
          input_value={email}
          className="w-full"
        />
        <FormErrorMessage state={isEmailValid} />

        <PasswordInput
          pswd={password}
          onSetPassword={setpassword}
          label="Password"
        />

        <button
          type="submit"
          disabled={!isEmailValid || email === ""}
          className={`p-3 rounded-full w-full font-semibold text-white cursor-pointer 
          ${
            !isEmailValid || email === "" || password.length < 8
              ? "bg-orange-400/50 cursor-not-allowed"
              : "bg-orange-500/60 hover:bg-orange-500/90"
          }`}
        >
          Submit
        </button>
      </form>

      {/* Redirect to resetpassword page */}
      <Link
        href={"/resetpassword"}
        className="text-gray-500 hover:text-black transition-colors duration-300 ease-in-out"
      >
        Forgot your password?
      </Link>

      <button
        className="cursor-pointer"
        onClick={() => setIsAccoutBlocked(!isAccoutBlocked)}
      >
        {isAccoutBlocked ? "Blocked" : "Open"}
      </button>

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
    </div>
  );
}

// V$ag_11*03
