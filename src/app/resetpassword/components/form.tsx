"use client";

import React, { useState } from "react";
import { Input } from "./input";
import { useRouter } from "next/navigation";
import FormErrorMessage from "./errormessage";

// Regular expression for email validation
export const validateEmail = (email: string) => {
  const regex = /^[a-z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return regex.test(email);
};

/**
 * @returns **Validation form for email**
 */
export default function EmailValidationForm() {
  const [email, setEmail] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);

  const router = useRouter();

  // Validate Email
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setEmail(value);
    if (value === "") {
      setIsValid(true);
    } else if (value.length >= 8) {
      setIsValid(validateEmail(value) || value === "");
    } else {
      setIsValid(false);
    }
  };

  // handle submit and redirect to reset password page
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push("/resetpassword/setpassword");
  }
  return (
    <>
      <form className="flex flex-col w-full" onSubmit={(e) => handleSubmit(e)}>
        <label className="font-semibold text-lg">Email address</label>

        <Input
          valid={isValid}
          OnHandleChange={handleChange}
          input_value={email}
        />

        {/* Show Error Message */}
        <FormErrorMessage state={isValid} />

        {/* Allow to click if email is valid; else don't */}
        <button
          disabled={!isValid || email === ""}
          className={`p-3 rounded-full font-semibold text-white cursor-pointer 
            ${
              !isValid || email === ""
                ? "bg-orange-400/50 cursor-not-allowed"
                : "bg-orange-500/60 hover:bg-orange-500/90"
            }`}
        >
          Send a password reset URL
        </button>
      </form>
    </>
  );
}
