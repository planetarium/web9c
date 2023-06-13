import { useEffect, useRef } from "react";
import { gql, useQuery } from "urql";

export type TransactionResultStatus =
  | "INVALID"
  | "STAGING"
  | "SUCCESS"
  | "FAILURE";

const TransactionResultQuery = gql`
  query ($txId: TxId!) {
    transaction {
      transactionResult(txId: $txId) {
        txStatus
      }
    }
  }
`;

export function useTransactionResult(txId: string): TransactionResultStatus {
  const ref = useRef<TransactionResultStatus>("INVALID");
  const [{ data, error, fetching }, executeQuery] = useQuery({
    query: TransactionResultQuery,
    variables: {
      txId,
    },
  });

  useEffect(() => {
    if (!fetching) {
      const id = setTimeout(
        () => executeQuery({ requestPolicy: "network-only" }),
        1000
      );
      return () => clearTimeout(id);
    }
  }, [fetching, executeQuery]);

  if (error) {
    throw error;
  }

  if (fetching) {
    return ref.current;
  }

  ref.current = data.transaction.transactionResult.txStatus;
  return ref.current;
}
