import React from "react";

type InputFieldProps = React.ComponentProps<"input">;
type PasswordFieldProps = {
  invalid?: boolean;
  message?: string;
} & InputFieldProps;

export const PasswordField = React.forwardRef<
  HTMLInputElement,
  PasswordFieldProps
>(({ invalid, message, ...props }, ref) => {
  const borderColor = invalid ? "border-red-800" : "border-black";
  return (
    <div className="inline-block p-2">
      <input
        ref={ref}
        className={`block mt-2 border-solid ${borderColor} border`}
        {...props}
      />
      {message && <span className="absolute">{message}</span>}
    </div>
  );
});

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  (props, ref) => {
    return (
      <input
        ref={ref}
        className="block mt-2 border-solid border-black border"
        {...props}
      />
    );
  }
);

export default InputField;
