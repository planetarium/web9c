import { Equipment } from "../../../../../api";
import ItemIcon from "./ItemIcon";

interface EquipmentTabProps {
  items: Equipment[];
  selectedItemIds: string[];
  onClickItem: (itemId: string) => void;
}

const EquipmentSection = ({
  items,
  onClickItem,
  additionalClassName,
}: {
  items: Equipment[];
  onClickItem: (itemid: string) => void;
  additionalClassName: (itemId: string) => string;
}) => {
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
};

export default function EquipmentTab({
  items,
  selectedItemIds,
  onClickItem,
}: EquipmentTabProps) {
  function additionalClassName(itemId: string): string {
    return selectedItemIds.includes(itemId) ? " bg-blue-300/[0.20]" : "";
  }

  const sectionCommonProps = {
    onClickItem,
    additionalClassName,
  } as const;

  function compareEquipment(a: Equipment, b: Equipment): number {
    if (a.grade > b.grade) {
      return -1;
    }

    if (a.grade < b.grade) {
      return 1;
    }

    if (a.level > b.level) {
      return -1;
    }

    if (a.level < b.level) {
      return 1;
    }

    return 0;
  }
  const ITEM_SUB_TYPES = [
    "Weapon",
    "Armor",
    "Belt",
    "Necklace",
    "Ring",
  ] as const;

  return (
    <div>
      {...ITEM_SUB_TYPES.map((type) => (
        <div key={type}>
          <h3>{type}</h3>
          <div>
            <EquipmentSection
              items={items
                .sort(compareEquipment)
                .filter((x) => x.itemSubType === type)}
              {...sectionCommonProps}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
