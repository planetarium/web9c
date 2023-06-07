import { Equipment } from "../../../../graphql";
import ItemIcon from "./ItemIcon";

interface EquipmentTabProps {
  items: Equipment[];
}

export default function EquipmentTab({ items }: EquipmentTabProps) {
  return (
    <>
      {items.map((x) => (
        <div className="p-1 border-4 w-32 h-20 inline-block" key={x.itemId}>
          <ItemIcon id={x.id} />
          <span>+{x.level}</span>
        </div>
      ))}
    </>
  );
}
