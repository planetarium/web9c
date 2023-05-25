import type { LocationDescriptor } from "history";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

type ButtonLinkProps = Omit<
  React.ComponentProps<typeof Button>,
  "onClick" | "type"
> & {
  to: LocationDescriptor;
};

export function ButtonLink({
  to,
  ...props
}: React.PropsWithChildren<ButtonLinkProps>) {
  const navigate = useNavigate();
  const onClick = useCallback(() => navigate(to), [navigate, to]);
  return <Button {...props} onClick={onClick} />;
}
