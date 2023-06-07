import { Costume } from "../../../../graphql";

interface CostumeTabProps {
  items: Costume[];
}

export default function CostumeTab({ items }: CostumeTabProps) {
  return (
    <>
      {items.map((x) => (
        <div className="p-1 border-4 w-32 h-20 inline-block" key={x.itemId}>
          <img
            className="w-16 h-16 inline"
            src={`https://raw.githubusercontent.com/planetarium/NineChronicles/development/nekoyume/Assets/Resources/UI/Icons/Item/${x.id}.png`}
          />
        </div>
      ))}
    </>
  );
}
