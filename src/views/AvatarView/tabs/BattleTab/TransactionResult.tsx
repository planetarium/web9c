import { NcscanTransactionLink } from "../../../../components/ui/NcscanTransactionLink";
import { useTransactionResult } from "../../../../hooks";

type TransactionResultProps = {
  txId: string;
};

export default function TransactionResult({ txId }: TransactionResultProps) {
  const txResult = useTransactionResult(txId);

  if (txResult == "STAGING") {
    return <span>Staging...</span>;
  }

  if (txResult == "SUCCESS") {
    return (
      <span>
        The transaction was processed well.{" "}
        <NcscanTransactionLink txId={txId} />
      </span>
    );
  }

  if (txResult == "FAILURE") {
    return (
      <span>
        The transaction was failed. <NcscanTransactionLink txId={txId} />
      </span>
    );
  }

  return (
    <span>Wait response or there is no transaction by the txid. ({txId})</span>
  );
}
