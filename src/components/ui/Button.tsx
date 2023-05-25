type ButtonProps = React.PropsWithChildren<React.ComponentProps<"button">>;

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button className="p-2 bg-black text-white" {...props}>
      {children}
    </button>
  );
}
