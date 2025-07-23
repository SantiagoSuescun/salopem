// components/VisionMissionCard.tsx
import Image from "next/image";

interface VisionMissionCardProps {
  icon: string;
  title: string;
  text: string;
  extra?: React.ReactNode;
}

export default function VisionMissionCard({
  icon,
  title,
  text,
}: VisionMissionCardProps) {
  return (
    <div className="flex flex-col items-center text-center justify-between p-6 border rounded-xl shadow-md bg-white h-[450px] w-full min-h-[450px]">
      <div className="flex items-center justify-center w-28 h-28 rounded-full bg-gray-100 mb-2">
        <Image src={icon} height={40} width={80} alt={title} />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <div className="text-gray-600 flex-1">{text}</div>
    </div>
  );
}
