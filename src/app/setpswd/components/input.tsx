interface InputProp {
  OnHandleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  input_value?: string;
  valid?: boolean;
}

export function Input({ input_value, valid, OnHandleChange }: InputProp) {
  return (
    <input
      type="text"
      value={input_value}
      onChange={OnHandleChange}
      className={`border border-gray-400 bg-white focus:outline-none
            
            ${
              !valid
                ? "focus:border-red-400 caret-red-600"
                : "focus:border-orange-400 caret-orange-400"
            }
            [caret:orange_4px]
            rounded-2xl p-3 mb-5`}
    />
  );
}
