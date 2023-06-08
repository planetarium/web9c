import { Costume } from "../../../../../api";
import ItemIcon from "./ItemIcon";

interface CostumeTabProps {
  items: Costume[];
}

export default function CostumeTab({ items }: CostumeTabProps) {
  return (
    <>
      {items.map((x) => (
        <div className="p-1 border-4 w-32 h-20 inline-block" key={x.itemId}>
          <ItemIcon id={x.id} />
        </div>
      ))}
    </>
  );
}
