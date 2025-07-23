// components/AchievementCard.jsx
import Image from "next/image";

export default function AchievementCard({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg p-5 w-80 h-80 gap-4 hover:shadow-2xl transition-all">
      <Image
        src={image}
        alt={title}
        width={150}
        height={80}
        className="object-contain mb-2"
      />
      <h3 className="text-lg font-semibold text-center">{title}</h3>
      <p className="text-gray-600 text-center text-sm">{description}</p>
    </div>
  );
}
