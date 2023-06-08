import { Material } from "../../../../api";
import ItemIcon from "./ItemIcon";

interface MaterialTabProps {
  items: { item: Material; count: number }[];
}

export default function MaterialTab({ items }: MaterialTabProps) {
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
