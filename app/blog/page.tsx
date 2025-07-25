"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import EspadaLaserBarra from "@/components/landing/espada";

const cards = [
  {
    id: 1,
    title: "Nueva línea de productos capilares",
    category: "Lanzamiento",
    description:
      "Descubre nuestra nueva línea de productos pensados para todo tipo de cabello. Fórmulas naturales y resultados profesionales.",
    image: "/images/Blog 1.png",
    categoryColor: "bg-purple-500",
    instagramUrl: "https://instagram.com/p/123456789",
    facebookUrl: "https://facebook.com/posts/987654321",
    tiktokUrl: "https://tiktok.com/@salopem/video/123456789",
  },
  {
    id: 2,
    title: "Participamos en la Feria de Belleza",
    category: "Novedades",
    description:
      "¡Estuvimos presentes en la feria más importante del sector! Mira los mejores momentos y tips de nuestros especialistas.",
    image: "/images/Blog 2.png",
    categoryColor: "bg-teal-500",
    instagramUrl: "https://instagram.com/p/234567890",
    facebookUrl: "https://facebook.com/posts/876543210",
    tiktokUrl: "https://tiktok.com/@salopem/video/234567890",
  },
  {
    id: 3,
    title: "Consejos para un cabello sano",
    category: "Tips",
    description:
      "Te damos las mejores recomendaciones para mantener tu cabello fuerte, sano y brillante durante todo el año.",
    image: "/images/Blog 3.png",
    categoryColor: "bg-cyan-500",
    instagramUrl: "https://instagram.com/p/345678901",
    facebookUrl: "https://facebook.com/posts/765432109",
    tiktokUrl: "https://tiktok.com/@salopem/video/345678901",
  },
  {
    id: 4,
    title: "Nueva línea de productos capilares",
    category: "Lanzamiento",
    description:
      "Descubre nuestra nueva línea de productos pensados para todo tipo de cabello. Fórmulas naturales y resultados profesionales.",
    image: "/images/Blog 1.png",
    categoryColor: "bg-purple-500",
    instagramUrl: "https://instagram.com/p/123456789",
    facebookUrl: "https://facebook.com/posts/987654321",
    tiktokUrl: "https://tiktok.com/@salopem/video/123456789",
  },
  {
    id: 5,
    title: "Participamos en la Feria de Belleza",
    category: "Novedades",
    description:
      "¡Estuvimos presentes en la feria más importante del sector! Mira los mejores momentos y tips de nuestros especialistas.",
    image: "/images/Blog 2.png",
    categoryColor: "bg-teal-500",
    instagramUrl: "https://instagram.com/p/234567890",
    facebookUrl: "https://facebook.com/posts/876543210",
    tiktokUrl: "https://tiktok.com/@salopem/video/234567890",
  },
  {
    id: 6,
    title: "Consejos para un cabello sano",
    category: "Tips",
    description:
      "Te damos las mejores recomendaciones para mantener tu cabello fuerte, sano y brillante durante todo el año.",
    image: "/images/Blog 3.png",
    categoryColor: "bg-cyan-500",
    instagramUrl: "https://instagram.com/p/345678901",
    facebookUrl: "https://facebook.com/posts/765432109",
    tiktokUrl: "https://tiktok.com/@salopem/video/345678901",
  },
];

export default function BlogPages() {
  return (

    <div className="container mx-auto px-4 ">
      <EspadaLaserBarra text="Blog" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
        {cards.map((card, idx) => {
          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.7,
                delay: idx * 0.12,
                type: "spring",
              }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#f3e8ff] to-[#e0f2fe] text-gray-800 shadow-lg transition-transform hover:scale-105"
            >
              {/* Category Badge */}
              <div className="absolute top-4 right-4 z-10">
                <Badge
                  className={`${card.categoryColor} text-white border-0 px-3 py-1 text-sm font-medium rounded-full`}
                >
                  {card.category}
                </Badge>
              </div>
              {/* Image */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform hover:scale-110"
                />
              </div>
              {/* Content */}
              <div className="p-6 flex flex-col gap-3">
                <h3 className="text-xl font-bold mb-1 text-gray-900">
                  {card.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

    </div >
  );
}
