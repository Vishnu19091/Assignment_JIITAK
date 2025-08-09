"use client";

import React, { useState } from "react";

interface inputProp {
  label: string;
  pswd: string;
  onSetPassword: (value: string) => void;
}

/**
 * A reusable Component
 * @param ' label,password, statevariable
 * @returns Password input field
 */
export function PasswordInput({ label, pswd, onSetPassword }: inputProp) {
  const [showPassword, setShowPassword] = useState(false);
  const [isValid, setIsValid] = useState<boolean>(true);

  const validatePassword = (password: string) => {
    const regex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    return regex.test(password);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    onSetPassword(value);
    setIsValid(validatePassword(value) || value === "");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col w-full relative">
      <label htmlFor="password" className="mb-2 font-medium text-gray-700">
        {label}
      </label>

      <input
        type={showPassword ? "text" : "password"}
        id="password"
        value={pswd}
        onChange={handlePasswordChange}
        className={`w-full pr-16 p-3 rounded-2xl bg-white border ${
          !isValid
            ? "border-red-400 focus:border-red-500 caret-red-600"
            : "border-gray-400 focus:border-orange-400 caret-orange-400"
        } focus:outline-none transition-colors duration-200`}
      />

      {/* Reserve space with min-h-[...] and toggle visibility */}
      <p
        className={`font-semibold text-sm mt-2 min-h-[1.25rem] ${
          !isValid ? "text-red-500" : "invisible"
        }`}
      >
        A minimum of 8 characters and a maximum of 20 characters, including
        uppercase and lowercase letters and numbers
      </p>

      <button
        className="absolute right-4 top-[45%] -translate-y-1/2 text-orange-500 font-semibold hover:text-orange-700 transition-colors duration-200 cursor-pointer"
        type="button"
        onClick={togglePasswordVisibility}
      >
        {showPassword ? "Hide" : "Show"}
      </button>
    </div>
  );
}
