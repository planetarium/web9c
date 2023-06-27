import { Consumable } from "../../../../../api";
import ItemIcon from "./ItemIcon";

interface ConsumableTabProps {
  items: { item: Consumable; count: number }[];
}

export default function ConsumableTab({ items }: ConsumableTabProps) {
  return (
    <>
      {...items.map(({ item, count }) => (
        <div className="p-1 border-4 w-32 h-20 inline-block" key={item.itemId}>
          <ItemIcon id={item.id} />
          <span>{count}</span>
        </div>
      ))}
    </>
  );
}
