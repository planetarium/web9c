interface ItemIconProps {
  id: number;
}

export default function ItemIcon({ id }: ItemIconProps) {
  return (
    <img
      className="w-16 h-16 inline"
      src={`https://raw.githubusercontent.com/planetarium/NineChronicles/development/nekoyume/Assets/Resources/UI/Icons/Item/${id}.png`}
    />
  );
}
