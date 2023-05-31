import React from "react";

type InputFieldProps = React.ComponentProps<"input">;

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  (props, ref) => {
    return (
      <input
        ref={ref}
        className="ml-2 border-solid border-black border"
        {...props}
      />
    );
  }
);

export default InputField;
