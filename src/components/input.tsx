import type { InputHTMLAttributes } from "react";

type InputProps = {
  ref?: React.Ref<HTMLInputElement> | null;
  label?: string;
  errorMessage?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ errorMessage, label, ref, ...props }: InputProps) => {
  return (
    <>
      <input
        className={`w-full bg-transparent p-2 rounded-md focus:outline-none text-primary 
          ${errorMessage ? "border-red-600 border-2" : "border-input border rounded-md"}`}
        {...props}
        ref={ref}
      />

      {errorMessage && (
        <span className="text-sm text-red-600 font-semibold mt-1">
          {errorMessage}
        </span>
      )}
    </>
  );
};
