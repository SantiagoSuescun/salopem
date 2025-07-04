"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useCartStore } from "@/lib/cartStore"

interface Product {
  id: number
  name: string
  price: string
  image: string
  color: string
  gradient: string
  description?: string
}

const products: Product[] = [
  {
    id: 1,
    name: "Nami Perfume Capilar",
    price: "$28.000",
    image: "/images/webp/Producto 4.webp",
    color: "bg-amber-50",
    gradient: "from-amber-400 to-orange-400",
    description: "Aroma frutal con proteína de seda y germen de trigo.",
  },
  {
    id: 2,
    name: "Zoet Perfume Capilar",
    price: "$28.000",
    image: "/images/webp/Producto 2.webp",
    color: "bg-rose-50",
    gradient: "from-rose-300 to-pink-400",
    description: "Aroma dulce para un toque delicado y duradero.",
  },
  {
    id: 3,
    name: "Shampoo Salopém",
    price: "$30.000",
    image: "/images/webp/HI_salopem_500_ml_shampoo-removebg-preview.webp",
    color: "bg-violet-50",
    gradient: "from-violet-400 to-purple-400",
    description: "Hidratación intensiva con Vitamina E y Pro B5.",
  },
  {
    id: 4,
    name: "Kit Crecimiento Kamala",
    price: "$65.000",
    image: "/images/webp/Productos Kamala 3.webp",
    color: "bg-emerald-50",
    gradient: "from-emerald-300 to-teal-400",
    description: "Incluye: Shampoo, Acondicionador y Tónico capilar.",
  },
  {
    id: 5,
    name: "Línea Completa Mio",
    price: "$55.000",
    image: "/images/webp/Productos Mio 1.webp",
    color: "bg-sky-50",
    gradient: "from-sky-300 to-blue-400",
    description: "Tratamiento y shampoo para vitalidad y frescura.",
  },
  {
    id: 6,
    name: "Línea Hidratación Salopem",
    price: "$58.000",
    image: "/images/webp/Productos Salopem 2.webp",
    color: "bg-indigo-50",
    gradient: "from-indigo-300 to-violet-400",
    description: "Shampoo y Acondicionador para una hidratación superior.",
  },
];

const CARD_WIDTH = 256;
const GAP = 24;
const VISIBLE = 4; // Cambia según diseño

export default function ProductCarousel() {
  // Carrusel extendido con clones al inicio y final
  const extended = [
    ...products.slice(-VISIBLE),
    ...products,
    ...products.slice(0, VISIBLE),
  ];
  const [pos, setPos] = useState(VISIBLE);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [noTransition, setNoTransition] = useState(false); // Para el "reset" instantáneo
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const total = products.length;
  const addProduct = useCartStore((state) => state.addProduct);

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      handleMove(1);
    }, 3500);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [pos, total, isPaused]);

  // El reset profesional: SIN transición
  useEffect(() => {
    if (!isAnimating) return;
    if (pos === extended.length - VISIBLE) {
      setTimeout(() => {
        setNoTransition(true);
        setPos(VISIBLE);
      }, 350);
    } else if (pos === 0) {
      setTimeout(() => {
        setNoTransition(true);
        setPos(total);
      }, 350);
    } else {
      setTimeout(() => setIsAnimating(false), 350);
    }
  }, [pos, isAnimating, total, extended.length]);

  // Cuando cambia la posición SIN transición, reactivamos transición después de pintar
  useEffect(() => {
    if (noTransition) {
      setTimeout(() => {
        setNoTransition(false);
        setIsAnimating(false);
      }, 30); // 30ms es suficiente para el reset visual
    }
  }, [noTransition]);

  const handleMove = (dir: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setPos((prev) => prev + dir);
  };

  // Desplazamiento
  const x = -pos * (CARD_WIDTH + GAP);

  return (
    <section className="w-full flex flex-col items-center justify-center overflow-hidden p-4">
      <div
        className="relative w-full max-w-6xl flex items-center justify-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Flechas separadas */}
        <Button
          onClick={() => handleMove(-1)}
          size="icon"
          className="absolute left-[-60px] top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-[#2a9d8f] rounded-full shadow-lg backdrop-blur-sm"
        >
          <ChevronLeft />
        </Button>
        <Button
          onClick={() => handleMove(1)}
          size="icon"
          className="absolute right-[-60px] top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-[#2a9d8f] rounded-full shadow-lg backdrop-blur-sm"
        >
          <ChevronRight />
        </Button>
        <div className="w-full overflow-hidden">
          <motion.div
            className="flex gap-6 py-4"
            animate={{ x }}
            transition={
              noTransition
                ? { duration: 0 }
                : {
                    x: {
                      type: isAnimating ? "spring" : false,
                      stiffness: 300,
                      damping: 40,
                      duration: 0.35,
                    },
                  }
            }
            style={{ willChange: "transform" }}
          >
            {extended.map((product, i) => (
              <div
                key={`slide-${product.id}-${i}`}
                className="w-64 h-[340px] max-md:ml-[9px] shadow-md shadow-gray-400/20 p-4 bg-[#ebfaf9ff] rounded-2xl flex flex-col items-center justify-between flex-shrink-0"
              >
                <div className="relative w-56 h-40 mb-2">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain drop-shadow-xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="text-center flex flex-col gap-2 flex-1 justify-end">
                  <span className="font-bold text-base text-gray-800 truncate">
                    {product.name}
                  </span>
                  {product.description && (
                    <p className="text-sm text-gray-600 h-10">
                      {product.description}
                    </p>
                  )}
                  <span className="text-lg font-bold text-gray-900">
                    {product.price} COP
                  </span>
                </div>
                <div className="w-full flex justify-center">
                  <Button
                    className="mt-2 px-6 py-1 bg-purple-500 hover:bg-purple-500 text-white font-semibold rounded-lg text-xs"
                    onClick={() =>
                      addProduct({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                      })
                    }
                  >
                    Agregar
                  </Button>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
