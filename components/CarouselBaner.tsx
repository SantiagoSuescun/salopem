"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring, easeOut } from "framer-motion"
import { ChevronLeft, ChevronRight, Play, Pause, Star, Heart, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

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
    rating: number
    position: "normal" | "overflow-left" | "overflow-right" | "overflow-top" | "overflow-bottom"
    size: "small" | "medium" | "large"
}

// Productos cosméticos y cremas con información detallada
const cosmeticProducts = [
    {
        name: "Crema Hidratante Premium",
        category: "Cuidado Facial",
        description:
            "Hidratación profunda con ácido hialurónico y vitamina E para una piel radiante",
        benefits: ["Hidratación 24h", "Anti-edad", "Piel suave"],
        price: "$45.99",
        rating: 4.8,
        image: "HI_salopem_500_ml_shampoo-removebg-preview.png",
        position: "normal",
        size: "medium",
    },
    {
        name: "Serum Facial Revitalizante",
        category: "Tratamiento Intensivo",
        description:
            "Fórmula concentrada con retinol y péptidos para renovar tu piel",
        benefits: ["Reduce arrugas", "Ilumina", "Regenera"],
        price: "$89.99",
        rating: 4.9,
        image: "22-removebg-preview.png",
        position: "normal",
        size: "medium",
    },
    {
        name: "Crema Contorno de Ojos",
        category: "Cuidado Específico",
        description: "Elimina ojeras y bolsas con cafeína y colágeno marino",
        benefits: ["Anti-ojeras", "Reafirma", "Hidrata"],
        price: "$32.99",
        rating: 4.7,
        image: "14-removebg-preview.png",
        position: "normal",
        size: "medium",
    },
    {
        name: "Mascarilla Purificante",
        category: "Limpieza Profunda",
        description: "Arcilla volcánica y carbón activado para poros perfectos",
        benefits: ["Purifica poros", "Controla grasa", "Suaviza"],
        price: "$28.99",
        rating: 4.6,
        image: "16-removebg-preview.png",
        position: "normal",
        size: "medium",
    },
    {
        name: "Crema Corporal Nutritiva",
        category: "Cuidado Corporal",
        description: "Manteca de karité y aceites esenciales para piel sedosa",
        benefits: ["Nutrición intensa", "Aroma relajante", "Absorción rápida"],
        price: "$24.99",
        rating: 4.8,
        image: "Acondicionador_kamala_500ml-removebg-preview.png",
        position: "normal",
        size: "medium",
    },
    {
        name: "Exfoliante Facial Suave",
        category: "Renovación Celular",
        description: "Microperlas naturales y ácidos frutales para piel nueva",
        benefits: ["Renueva piel", "Textura suave", "Brillo natural"],
        price: "$19.99",
        rating: 4.5,
        image: "17-removebg-preview.png",
        position: "normal",
        size: "small",
    },
    {
        name: "Crema Anti-Edad Premium",
        category: "Anti-Envejecimiento",
        description: "Colágeno y elastina para combatir los signos del tiempo",
        benefits: ["Reduce arrugas", "Reafirma", "Luminosidad"],
        price: "$125.99",
        rating: 4.9,
        image: "13-removebg-preview.png",
        position: "normal",
        size: "medium",
    },
    {
        name: "Aceite Facial Regenerador",
        category: "Tratamiento Nocturno",
        description: "Aceites preciosos de rosa mosqueta y argán para regeneración",
        benefits: ["Regenera", "Nutre profundo", "Anti-manchas"],
        price: "$67.99",
        rating: 4.8,
        image: "Aceite_de_aguacate_kamala_120_ml-removebg-preview.png",
        position: "normal",
        size: "small",
    },
    {
        name: "Crema Solar Facial SPF50",
        category: "Protección Solar",
        description: "Protección máxima con filtros minerales y antioxidantes",
        benefits: ["Protección UV", "Anti-manchas", "Base maquillaje"],
        price: "$38.99",
        rating: 4.7,
        image: "Aceite_de_Romero_120_ml-removebg-preview.png",
        position: "normal",
        size: "large",
    },
    {
        name: "Tónico Facial Equilibrante",
        category: "Preparación Piel",
        description: "Agua de rosas y niacinamida para equilibrar el pH",
        benefits: ["Equilibra pH", "Minimiza poros", "Prepara piel"],
        price: "$22.99",
        rating: 4.6,
        image: "10-removebg-preview.png",
        position: "normal",
        size: "medium",
    },
];

const productImages = [
    "HI_salopem_500_ml_shampoo-removebg-preview.webp",
    "22-removebg-preview.webp",
    "14-removebg-preview.webp",
    "16-removebg-preview.webp",
    "Acondicionador_kamala_500ml-removebg-preview.webp",
    "17-removebg-preview.webp",
    "13-removebg-preview.webp",
    "Aceite_de_aguacate_kamala_120_ml-removebg-preview.webp",
    "Aceite_de_Romero_120_ml-removebg-preview.webp",
    "10-removebg-preview.webp",
]

const bgColors = [
    "from-rose-50 via-pink-100 to-rose-200",
    "from-purple-50 via-violet-100 to-purple-200",
    "from-blue-50 via-sky-100 to-blue-200",
    "from-green-50 via-emerald-100 to-green-200",
    "from-yellow-50 via-amber-100 to-yellow-200",
    "from-orange-50 via-orange-100 to-orange-200",
    "from-teal-50 via-cyan-100 to-teal-200",
    "from-indigo-50 via-indigo-100 to-indigo-200",
    "from-pink-50 via-rose-100 to-pink-200",
]

const slides: Slide[] = cosmeticProducts.map((product, i) => ({
    id: i + 1,
    title: product.name,
    subtitle: product.category,
    description: product.description,
    benefits: product.benefits,
    price: product.price,
    rating: product.rating,
    image: `/images/webp/${productImages[i]}`, // Mantener las rutas originales
    bgColor: bgColors[i % bgColors.length],
    textColor: "text-gray-800",
    animationType: ["wave", "glitch", "matrix", "fade", "bounce", "shimmer"][i % 6] as
        | "wave"
        | "glitch"
        | "matrix"
        | "fade"
        | "bounce"
        | "shimmer",
    imageAnimation: "float",
    position: product.position as "normal" | "overflow-left" | "overflow-right" | "overflow-top" | "overflow-bottom",
    size: product.size as "small" | "medium" | "large",
}))

// Componente de imagen responsivo que mantiene posición fija
const getImageSize = (size: string, isMobile: boolean) => {
    if (isMobile) {
        switch (size) {
            case "small":
                return "w-[200px] h-[250px] sm:w-[250px] sm:h-[300px]"
            case "medium":
                return "w-[220px] h-[280px] sm:w-[280px] sm:h-[350px]"
            case "large":
                return "w-[250px] h-[320px] sm:w-[320px] sm:h-[400px]"
            default:
                return "w-[220px] h-[280px] sm:w-[280px] sm:h-[350px]"
        }
    }

    // Desktop - mantener tamaños originales
    switch (size) {
        case "small":
            return "w-[320px] h-[400px] lg:w-[380px] lg:h-[480px]"
        case "medium":
            return "w-[360px] h-[450px] lg:w-[420px] lg:h-[520px]"
        case "large":
            return "w-[400px] h-[500px] lg:w-[460px] lg:h-[580px]"
        default:
            return "w-[360px] h-[450px] lg:w-[420px] lg:h-[520px]"
    }
}

const getImagePosition = (position: string, isMobile: boolean) => {
    if (isMobile) {
        return "relative z-10 mx-auto" // En móvil siempre centrado
    }

    // Desktop - mantener posiciones originales
    switch (position) {
        case "overflow-left":
            return "-left-10 xl:-left-20 top-1/2 -translate-y-1/2 z-20"
        case "overflow-right":
            return "-right-10 xl:-right-20 top-1/2 -translate-y-1/2 z-20"
        case "overflow-top":
            return "left-1/2 -translate-x-1/2 -top-8 xl:-top-16 z-20"
        case "overflow-bottom":
            return "left-1/2 -translate-x-1/2 -bottom-8 xl:-bottom-16 z-20"
        default:
            return "relative z-10"
    }
}

const InteractiveImage = ({
    src,
    alt,
    animationType,
    slideKey,
    position,
    size,
    isMobile,
}: {
    src: string
    alt: string
    animationType: string
    slideKey: number
    position: string
    size: string
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
            className={`${isMobile ? "relative" : "absolute"} ${getImagePosition(position, isMobile)} cursor-none group`}
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
                className={`${getImageSize(size, isMobile)} relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-xl lg:shadow-2xl`}
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

                {/* Overlay de información del producto */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 lg:p-4"
                >
                    <div className="text-white text-xs lg:text-sm">
                        <div className="flex items-center gap-1 mb-1">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className={`w-2.5 h-2.5 lg:w-3 lg:h-3 ${i < Math.floor(slides[slideKey]?.rating || 0) ? "fill-yellow-400 text-yellow-400" : "text-gray-400"}`}
                                />
                            ))}
                            <span className="ml-1 text-xs">{slides[slideKey]?.rating}</span>
                        </div>
                        <div className="font-semibold text-sm lg:text-base">{slides[slideKey]?.price}</div>
                    </div>
                </motion.div>
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
                            className={`w-full ${isMobile ? "flex flex-col justify-center space-y-6" : "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"}`}
                        >
                            {/* Contenido de texto - NO CENTRADO */}
                            <div className={`${current.textColor} z-10 ${isMobile ? "max-w-sm mx-auto" : "space-y-6"}`}>
                                <div className={`${isMobile ? "space-y-2" : "space-y-3"}`}>
                                    <motion.div
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2, duration: 0.6 }}
                                        className={`flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider ${isMobile ? "justify-center" : ""}`}
                                    >
                                        <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-pink-500" />
                                        {current.subtitle}
                                    </motion.div>

                                    <h1
                                        className={`font-bold leading-tight font-sans ${isMobile ? "text-2xl sm:text-3xl text-center" : "text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-left"}`}
                                    >
                                        <FadeTextSimple text={current.title} delay={0.4} slideKey={currentSlide} />
                                    </h1>
                                </div>

                                <div
                                    className={`opacity-90 font-sans ${isMobile ? "text-base text-center max-w-xs mx-auto" : "text-base lg:text-lg max-w-lg text-left"}`}
                                >
                                    <FadeTextSimple text={current.description} delay={0.8} slideKey={currentSlide} />
                                </div>

                                {/* Rating y precio */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.2, duration: 0.6 }}
                                    className={`flex items-center gap-3 lg:gap-4 ${isMobile ? "justify-center" : ""}`}
                                >
                                    <div className="flex items-center gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-3 h-3 sm:w-4 sm:h-4 ${i < Math.floor(current.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                                            />
                                        ))}
                                        <span className="ml-1 text-xs sm:text-sm font-medium">({current.rating})</span>
                                    </div>
                                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-pink-600">{current.price}</div>
                                </motion.div>

                                {/* Beneficios */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.4, duration: 0.6 }}
                                    className={`space-y-2 ${isMobile ? "max-w-xs mx-auto" : ""}`}
                                >
                                    <h3
                                        className={`font-semibold text-gray-700 text-sm lg:text-base ${isMobile ? "text-center" : "text-left"}`}
                                    >
                                        Beneficios principales:
                                    </h3>
                                    <div className={`flex flex-wrap gap-2 font-sans ${isMobile ? "justify-center" : ""}`}>
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
                                    className={`flex gap-3 lg:gap-4 pt-4 ${isMobile ? "justify-center sm:flex-row" : ""}`}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(236, 72, 153, 0.3)" }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Button
                                            size={isMobile ? "default" : "lg"}
                                            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 px-4 sm:px-6 lg:px-8 shadow-lg text-sm lg:text-base"
                                        >
                                            <motion.div
                                                animate={{ rotate: [0, 10, -10, 0] }}
                                                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                                            >
                                                <ShoppingBag className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                                            </motion.div>
                                            Comprar Ahora
                                        </Button>
                                    </motion.div>

                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                        <Button
                                            size={isMobile ? "default" : "lg"}
                                            variant="outline"
                                            className="border-gray-400 text-gray-700 hover:bg-gray-100 px-4 sm:px-6 lg:px-8 text-sm lg:text-base bg-white/80"
                                        >
                                            <motion.div
                                                animate={{ scale: [1, 1.2, 1] }}
                                                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                                            >
                                                <Heart className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                                            </motion.div>
                                            Favoritos
                                        </Button>
                                    </motion.div>
                                </motion.div>
                            </div>

                            {/* Imagen - mantiene posición fija */}
                            <div
                                className={`relative ${isMobile ? "w-full flex justify-center" : "h-full w-full flex justify-center items-center"}`}
                            >
                                <InteractiveImage
                                    src={current.image}
                                    alt={current.title}
                                    animationType={"float"}
                                    slideKey={currentSlide}
                                    position={isMobile ? "normal" : current.position}
                                    size={current.size}
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
                            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-pink-500 scale-125" : "bg-white/60 hover:bg-white/80"
                                }`}
                        />
                    ))}
                </div>

                <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="bg-white/20 border-white/30 text-white hover:bg-white/30 p-2"
                >
                    {isPlaying ? <Pause className="w-3 h-3 sm:w-4 sm:h-4" /> : <Play className="w-3 h-3 sm:w-4 sm:h-4" />}
                </Button>
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

            {/* Barra de progreso */}
            <div className="absolute top-0 left-0 w-full h-1 sm:h-2 bg-white/10 z-30">
                <motion.div
                    key={currentSlide}
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 7, ease: "linear" }}
                    className="h-full bg-gradient-to-r from-pink-400 to-purple-500"
                />
            </div>
        </div>
    )
}
