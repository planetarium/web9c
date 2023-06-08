import { Equipment } from "../../../../../api";
import ItemIcon from "./ItemIcon";

interface EquipmentTabProps {
  items: Equipment[];
  selectedItemIds: string[];
  onClickItem: (itemId: string) => void;
}

export default function EquipmentTab({
  items,
  selectedItemIds,
  onClickItem,
}: EquipmentTabProps) {
  function additionalClassName(itemId: string): string {
    return selectedItemIds.includes(itemId) ? " bg-blue-300/[0.20]" : "";
  }

  return (
    <>
      {items.map((x) => (
        <div
          onClick={() => onClickItem(x.itemId || "")}
          className={
            "p-1 border-4 w-32 h-20 inline-block" +
            additionalClassName(x.itemId ?? "")
          }
          key={x.itemId}
        >
          <ItemIcon id={x.id} />
          <span className="bg-sky">+{x.level}</span>
        </div>
      ))}
    </>
  );
}
