"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import PasswordInputFields from "./pswdform";
import { useRouter } from "next/navigation";
import { Slide, ToastContainer, toast } from "react-toastify";

/**
 * Set Password Content
 * contains title, message, form, reset password button
 */
export default function Contents() {
  // lifting state up pass it to child comp
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState<boolean>(true);
  const [pswdMatchError, setpswdMatchError] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    // for empty state
    if (confirmpassword === "") {
      setpswdMatchError("");
      setPasswordMatch(true);

      // for matched state
    } else if (password === confirmpassword) {
      setpswdMatchError("");
      setPasswordMatch(true);

      // for not matching state
    } else {
      setpswdMatchError("Passwords doesn't match!");
      setPasswordMatch(false);
    }
  }, [password, confirmpassword]);

  // handle password submisson
  // pass it to child comp
  const handleSumbitPassword = (e: React.FormEvent) => {
    e.preventDefault();

    if (pswdMatchError === "" && password !== "") {
      // show success message for a couple of seconds then redirect to login page
      toast.success("Form submitted successfully!", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: true,
        pauseOnHover: true,
        draggable: true,
        transition: Slide,
      });

      // redirects after 5 seconds
      setTimeout(() => {
        router.push("/login");
      }, 4500);
    } else {
      // show error message for a couple of seconds then don't redirect to login page
      toast.error("Please fix the errors before submitting.", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: true,
        pauseOnHover: true,
        draggable: true,
        transition: Slide,
      });
    }
  };

  return (
    <div className="mobile:w-full mobile:px-2 mobile:py-4 tablet:p-0 tablet:w-[30%] tablet:mx-auto tablet:my-auto flex flex-col gap-5 items-center">
      <h1 className="font-bold text-xl text-center">Password Reset</h1>
      <p className="font-normal text-center text-gray-800">
        To confirm new password
      </p>

      <PasswordInputFields
        HandleSubmit={handleSumbitPassword}
        password={password}
        confirmPassword={confirmpassword}
        onSetPassword={setPassword}
        onSetConfirmPassword={setConfirmPassword}
        passwordMatch={passwordMatch}
        errorMessage={pswdMatchError}
      />

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
