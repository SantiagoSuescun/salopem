import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function Blog() {
    const cards = [
        {
            id: 1,
            title: "Salopem Tienda",
            category: "Tips",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, tincidunt turpis at.",
            image: "/images/Blog 1.png",
            categoryColor: "bg-purple-500",
        },
        {
            id: 2,
            title: "Variedad de Productos",
            category: "Tratamiento",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, tincidunt turpis at.",
            image: "/images/Blog 2.png",
            categoryColor: "bg-teal-500",
        },
        {
            id: 3,
            title: "Feria en Barrancabermeja",
            category: "Novedades",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, tincidunt turpis at.",
            image: "/images/Blog 3.png",
            categoryColor: "bg-cyan-500",
        },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cards.map((card, idx) => {
                    const ref = useRef(null);
                    const isInView = useInView(ref, { once: true, margin: "-50px" });
                    return (
                        <motion.div
                            ref={ref}
                            key={card.id}
                            initial={{ opacity: 0, y: 60, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
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
                            <div className="relative h-48 w-full overflow-hidden">
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
            {/* Botón Ver más fuera del grid */}
            <div className="flex justify-center mt-10">
                <button className="px-8 py-3 bg-teal-500 text-white font-semibold rounded-full shadow hover:bg-[#b3a6e6] transition-colors text-lg">
                    Ver más
                </button>
            </div>
        </div>
    );
}
