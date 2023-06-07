import { Material } from "../../../../graphql";

interface MaterialTabProps {
  items: { item: Material; count: number }[];
}

export default function MaterialTab({ items }: MaterialTabProps) {
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
