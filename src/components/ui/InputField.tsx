type InputFieldProps = React.ComponentProps<"input">;

export default function InputField(props: InputFieldProps) {
  return <input className="ml-2 border-solid border-black border" {...props} />;
}
