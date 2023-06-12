import React from "react";
import { MakeTransactionUrl } from "../../constants";

type NcscanTransactionLinkProps = {
  txId: string;
};

export function NcscanTransactionLink({
  txId,
  ...props
}: React.PropsWithChildren<NcscanTransactionLinkProps>) {
  return (
    <a href={MakeTransactionUrl(txId)} {...props}>
      {MakeTransactionUrl(txId)}
    </a>
  );
}
