import { Consumable } from "../../../../graphql";

interface ConsumableTabProps {
  items: { item: Consumable; count: number }[];
}

export default function ConsumableTab({ items }: ConsumableTabProps) {
  return (
    <>
      {...items.map(({ item, count }) => (
        <div className="p-1 border-4 w-32 h-20 inline-block" key={item.itemId}>
          <img
            className="w-16 h-16 inline"
            src={`https://raw.githubusercontent.com/planetarium/NineChronicles/development/nekoyume/Assets/Resources/UI/Icons/Item/${item.id}.png`}
          />
          <span>{count}</span>
        </div>
      ))}
    </>
  );
}
