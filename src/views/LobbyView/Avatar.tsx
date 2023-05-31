interface AvatarProps {
  name: string;
  level: number;
  actionPoint: number;
}

export default function Avatar({ name, level, actionPoint }: AvatarProps) {
  return (
    <div className="rounded-2xl shadow-md p-6">
      {name} | Lv. {level} | {actionPoint}/120
    </div>
  );
}
