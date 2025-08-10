import { PasswordInput } from "./pswdinput";

interface Props {
  HandleSubmit: (e: React.FormEvent) => void;
  password: string;
  confirmPassword: string;
  onSetPassword: (value: string) => void;
  onSetConfirmPassword: (value: string) => void;
  passwordMatch: boolean;
  errorMessage: string;
}

/**
 * **Reusable component**
 * This component handles multiple password input field
 * @returns
 */
export default function PasswordInputFields({
  HandleSubmit,
  password,
  confirmPassword,
  onSetPassword,
  onSetConfirmPassword,
  passwordMatch,
  errorMessage,
}: Props) {
  return (
    <form className="w-full flex flex-col gap-4" onSubmit={HandleSubmit}>
      <PasswordInput
        label="New Password"
        pswd={password}
        onSetPassword={onSetPassword}
      />
      <PasswordInput
        label="Confirm New Password"
        pswd={confirmPassword}
        onSetPassword={onSetConfirmPassword}
      />

      {!passwordMatch && (
        <p className="text-red-500 font-semibold text-md mb-5">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={!passwordMatch || password === "" || confirmPassword === ""}
        className={`p-3 rounded-full font-semibold text-white cursor-pointer 
            ${
              !passwordMatch || password === ""
                ? "bg-orange-400/50 cursor-not-allowed"
                : "bg-orange-500/60 hover:bg-orange-500/90 cursor-pointer"
            }`}
      >
        Submit
      </button>
    </form>
  );
}
