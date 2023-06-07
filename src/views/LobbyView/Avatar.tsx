interface AvatarProps {
  name: string;
  level: number;
  actionPoint: number;
  onClick?: () => void;
}

export default function Avatar({
  name,
  level,
  actionPoint,
  onClick,
}: AvatarProps) {
  return (
    <div onClick={onClick} className="rounded-2xl shadow-md p-6">
      {name} | Lv. {level} | {actionPoint}/120
    </div>
  );
}
