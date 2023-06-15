import type { LocationDescriptor } from "history";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";

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
  return <Button className="m-2 p-2" {...props} onClick={onClick} />;
}
