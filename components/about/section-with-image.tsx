// components/SectionWithImage.jsx
import Image from "next/image";

export default function SectionWithImage({
  imageSrc,
  imageAlt,
  title,
  text,
  imageLeft = true,
}: {
  imageSrc: string;
  imageAlt: string;
  title?: string;
  text: string;
  imageLeft?: boolean;
}) {
  return (
    <section className={`grid md:grid-cols-2 gap-8 items-center mb-12`}>
      {imageLeft && (
        <div className="flex justify-center">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={500}
            height={500}
            className="object-cover rounded-lg"
          />
        </div>
      )}
      <div className="space-y-4">
        {title && (
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            {title}
          </h2>
        )}
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {text}
        </p>
      </div>
      {!imageLeft && (
        <div className="flex justify-center">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={500}
            height={500}
            className="object-cover rounded-lg"
          />
        </div>
      )}
    </section>
  );
}
