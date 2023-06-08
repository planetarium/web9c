import { useNavigate } from "react-router";

interface AvatarProps {
  name: string;
  level: number;
  actionPoint: number;
  address: string;
}

export default function Avatar({
  name,
  level,
  actionPoint,
  address,
}: AvatarProps) {
  const navigate = useNavigate();

  return (
    <div className="rounded-2xl shadow-md p-6">
      {name} | Lv. {level} | {actionPoint}/120
      <button
        onClick={() => navigate(`/avatar/${address}`)}
        className="m-2 p-1 bg-black text-white primary"
      >
        Inventory
      </button>
    </div>
  );
}
