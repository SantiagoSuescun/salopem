"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring, easeOut } from "framer-motion"
import { ChevronLeft, ChevronRight, Play, Pause, Star, Heart, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

import { cosmeticProducts } from "@/constants"
import Link from "next/link"

interface Slide {
  id: number
  title: string
  subtitle: string
  description: string
  image: string
  bgColor: string
  textColor: string
  animationType: "wave" | "glitch" | "matrix" | "fade" | "bounce" | "shimmer"
  imageAnimation: "cursor" | "parallax" | "tilt" | "magnetic" | "float"
  benefits: string[]
  price: string
}



const bgColors = [
  "from-purple-50 via-purple-100 to-purple-200",
  "from-violet-50 via-violet-100 to-violet-200",
  "from-fuchsia-50 via-fuchsia-100 to-purple-100",
  "from-purple-100 via-violet-100 to-purple-200",
  "from-purple-50 via-violet-50 to-fuchsia-100",
  "from-purple-100 via-purple-200 to-violet-100",
  "from-violet-100 via-fuchsia-100 to-purple-100",
]


const slides: Slide[] = cosmeticProducts.map((product, i) => ({
  id: i + 1,
  title: product.name,
  subtitle: Array.isArray(product.category) ? product.category.join(" / ") : product.category,
  description: product.description,
  benefits: product.benefits,
  price: product.price,
  image: `/images/webp/${product.image}`, // Mantener las rutas originales
  bgColor: bgColors[i % bgColors.length],
  textColor: "text-gray-800",
  animationType: ["wave", "glitch", "matrix", "fade", "bounce", "shimmer"][
    i % 6
  ] as "wave" | "glitch" | "matrix" | "fade" | "bounce" | "shimmer",
  imageAnimation: "float",

}));


const InteractiveImage = ({
  src,
  alt,
  animationType,
  slideKey,
  isMobile,
}: {
  src: string
  alt: string
  animationType: string
  slideKey: number
  isMobile: boolean
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const scale = useSpring(1, { stiffness: 300, damping: 30 })

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || isMobile) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseX = event.clientX - centerX
    const mouseY = event.clientY - centerY

    // Animación sutil sin cambio de posición
    x.set(mouseX * 0.02)
    y.set(mouseY * 0.02)
    scale.set(1.03)
  }

  const handleMouseLeave = () => {
    if (isMobile) return
    x.set(0)
    y.set(0)
    scale.set(1)
  }

  return (
    <div
      ref={ref}
      className={`${isMobile ? "relative" : "absolute"}relative z-10 cursor-none group`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        key={`image-${slideKey}-${animationType}`}
        style={{
          x: isMobile ? 0 : x,
          y: isMobile ? 0 : y,
          scale: isMobile ? 1 : scale,
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: easeOut }}
        className={`w-[360px] h-[450px] lg:w-[420px] lg:h-[520px] relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-xl lg:shadow-2xl`}
      >
        <Image
          src={src}
          alt={alt}
          width={500}
          height={600}
          className="w-full h-full object-cover"
        />

        {/* Efectos flotantes solo en desktop */}
        {!isMobile && (
          <>
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 3, -3, 0],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute -top-6 -right-6 w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-pink-300/30 to-purple-300/30 rounded-full backdrop-blur-sm"
            />

            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -20, 0],
                  x: [0, 10, -10, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
                className={`absolute w-2 h-2 bg-pink-400 rounded-full`}
                style={{
                  top: `${20 + i * 15}%`,
                  right: `${10 + i * 5}%`,
                }}
              />
            ))}
          </>
        )}


      </motion.div>
    </div>
  )
}

// Animación de texto simple
const FadeTextSimple = ({ text, delay = 0, slideKey }: { text: string; delay?: number; slideKey: number }) => {
  return (
    <motion.div
      key={`fade-simple-${slideKey}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, ease: easeOut }}
      className="font-sans"
    >
      {text}
    </motion.div>
  )
}

export default function ResponsiveAnimatedCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [direction, setDirection] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setDirection(1)
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 7000)

    return () => clearInterval(interval)
  }, [isPlaying])

  const nextSlide = () => {
    setDirection(1)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1)
    setCurrentSlide(index)
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? (isMobile ? 300 : 1000) : isMobile ? -300 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? (isMobile ? 300 : 1000) : isMobile ? -300 : -1000,
      opacity: 0,
    }),
  }

  const current = slides[currentSlide]

  const particlePositions = [
    { left: "30%", top: "20%" },
    { left: "30%", top: "50%" },
    { left: "60%", top: "80%" },
    { left: "40%", top: "30%" },
    { left: "50%", top: "60%" },
    { left: "50%", top: "10%" },
    { left: "20%", top: "70%" },
    { left: "40%", top: "40%" },
  ]

  return (
    <div className="relative w-full h-[670px] sm:h-[600px] md:h-[650px] lg:h-[670px] overflow-visible rounded-xl lg:rounded-2xl shadow-xl lg:shadow-2xl">
      {/* Iconos de redes sociales en la esquina superior derecha */}

      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className={`absolute inset-0 bg-gradient-to-br ${current.bgColor} overflow-hidden`}
        >
          {/* Partículas de fondo - solo en desktop */}
          {!isMobile && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {particlePositions.map((pos, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -100, 0],
                    x: [0, 50, -50, 0],
                    opacity: [0, 0.6, 0],
                    scale: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 8 + i,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: i * 1.2,
                  }}
                  className="absolute w-3 h-3 lg:w-4 lg:h-4 bg-gradient-to-r from-pink-400/30 to-purple-400/30 rounded-full"
                  style={{
                    left: pos.left,
                    top: pos.top,
                  }}
                />
              ))}
            </div>
          )}

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative">
            {/* Layout responsivo */}
            <div
              className={`w-full ${isMobile
                ? "flex flex-col justify-center space-y-6"
                : "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
                }`}
            >
              {/* Contenido de texto - NO CENTRADO */}
              <div
                className={`${current.textColor} z-10 ${isMobile ? "max-w-sm mx-auto" : "space-y-6"
                  }`}
              >
                <div className={`${isMobile ? "space-y-2" : "space-y-3"}`}>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className={`flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider ${isMobile ? "justify-center" : ""
                      }`}
                  >
                    <Heart className="w-3 h-3 sm:w-4 sm:h-4 " />
                    {current.subtitle}
                  </motion.div>

                  <h1
                    className={`font-bold leading-tight font-sans ${isMobile
                      ? "text-2xl sm:text-3xl text-center"
                      : "text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-left"
                      }`}
                  >
                    <FadeTextSimple
                      text={current.title}
                      delay={0.4}
                      slideKey={currentSlide}
                    />
                  </h1>
                </div>

                <div
                  className={`opacity-90 font-sans ${isMobile
                    ? "text-base text-center max-w-xs mx-auto"
                    : "text-base lg:text-lg max-w-lg text-left"
                    }`}
                >
                  <FadeTextSimple
                    text={current.description}
                    delay={0.8}
                    slideKey={currentSlide}
                  />
                </div>

                {/* Beneficios */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                  className={`space-y-2 ${isMobile ? "max-w-xs mx-auto" : ""}`}
                >
                  <h3
                    className={`font-semibold text-gray-700 text-sm lg:text-base ${isMobile ? "text-center" : "text-left"
                      }`}
                  >
                    Beneficios principales:
                  </h3>
                  <div
                    className={`flex flex-wrap gap-2 font-sans ${isMobile ? "justify-center" : ""
                      }`}
                  >
                    {current.benefits.map((benefit, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{
                          delay: 1.6 + index * 0.15,
                          duration: 0.6,
                          type: "spring",
                          stiffness: 200,
                        }}
                        className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-white/90 to-pink-50/90 rounded-full text-xs sm:text-sm font-medium text-gray-700 shadow-lg border border-pink-200/50 cursor-pointer font-sans"
                      >
                        ✨ {benefit}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Botones de acción */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2, duration: 0.8 }}
                  className={`flex gap-3 lg:gap-4 pt-4 ${isMobile ? "justify-center sm:flex-row" : ""
                    }`}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 30px rgba(236, 72, 153, 0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size={isMobile ? "default" : "lg"}
                      className="bg-purple-600 text-white hover:bg-purple-500  px-4 sm:px-6 lg:px-8 shadow-lg text-sm lg:text-base cursor-pointer"
                    >
                      <Link
                        href={`/tienda/${current.id}`}
                        className="flex justify-center items-center"
                      >
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                          }}
                        >
                          <ShoppingBag className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                        </motion.div>
                        Comprar Ahora
                      </Link>

                    </Button>
                  </motion.div>
                </motion.div>
              </div>

              {/* Imagen - mantiene posición fija */}
              <div
                className={`relative ${isMobile
                  ? "w-full flex justify-center"
                  : "h-full w-full flex justify-center items-center"
                  }`}
              >
                <InteractiveImage
                  src={current.image}
                  alt={current.title}
                  animationType={"float"}
                  slideKey={currentSlide}
                  isMobile={isMobile}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controles de navegación responsivos */}
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 lg:gap-6 z-30">
        <div className="flex gap-1.5 lg:gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 rounded-full transition-all duration-300 ${index === currentSlide
                ? "bg-pink-500 scale-125"
                : "bg-white/60 hover:bg-white/80"
                }`}
            />
          ))}
        </div>
      </div>

      {/* Botones de navegación responsivos */}
      <Button
        size="sm"
        variant="outline"
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 lg:left-6 top-1/2 transform -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30 z-30 p-2"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
      </Button>

      <Button
        size="sm"
        variant="outline"
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 lg:right-6 top-1/2 transform -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30 z-30 p-2"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
      </Button>

      {/* Barra de progreso
      <div className="absolute top-0 left-0 w-full h-1 sm:h-2 bg-white/10 z-30">
        <motion.div
          key={currentSlide}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 7, ease: "linear" }}
          className="h-full bg-gradient-to-r from-pink-400 to-purple-500"
        />
      </div> */}
    </div>
  );
}
