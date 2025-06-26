"use client"

import { motion, easeInOut } from "framer-motion"
import Image from "next/image"
// import { Truck, HandCoins, Clock, MessageCircle } from 'lucide-react'

const features = [
    {
        image: "/icon/Icon Envios 2.png",
        title: "¡Envíos gratis!",
        description: "Por compras superiores a $150.000 CP",
        delay: 0,
    },
    {
        image: "/icon/Icon Tiempo.png",
        title: "Tiempos de entrega",
        description: "Tiempos de entrega de entre 4 a 7 días hábiles",
        delay: 0.1,
    },
    {
        image: "/icon/Icon Pago.png",

        title: "Pago contra entrega",
        description: "Disponemos entrega en toda el Área Metropolitana",
        delay: 0.2,
    },
    {
        image: "/icon/Icon Asesoria.png",
        title: "Asesoría personalizada",
        description: "Contamos con asesores listos para atender",
        delay: 0.3,
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
}

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 50,
        scale: 0.8,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: 'spring' as const,
            stiffness: 100,
            damping: 15,
            duration: 0.6,
        },
    },
}

const iconVariants = {
    initial: {
        scale: 1,
        rotate: 0,
    },
    animate: {
        scale: [1, 1.1, 1],
        rotate: [0, 5, -5, 0],
        transition: {
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse" as const,
            ease: easeInOut,
        },
    },
    hover: {
        scale: 1.2,
        rotate: 10,
        transition: {
            type: "spring" as const,
            stiffness: 300,
            damping: 10,
        },
    },
}

export default function Services() {
    return (
        <div className="w-full max-w-6xl mx-auto p-8">
            <motion.div
                className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12 w-full"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {features.map((feature, index) => {
                    // const IconServices = feature.icon
                    return (
                        <motion.div
                            key={index}
                            className="text-center group cursor-pointer"
                            variants={cardVariants}
                            whileHover={{ y: -5 }}
                            transition={{ type: 'spring' as const, stiffness: 300, damping: 20 }}
                        >
                            {/* Icon Container */}
                            <motion.div
                                className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-purple-200 to-purple-300 rounded-3xl flex items-center justify-center shadow-lg"
                                whileHover={{
                                    boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)",
                                    scale: 1.05,
                                }}
                                transition={{ type: 'spring' as const, stiffness: 300, damping: 20 }}
                            >
                                <motion.div variants={iconVariants} initial="initial" animate="animate" whileHover="hover">
                                    <Image
                                        src={feature.image}
                                        alt={feature.title}
                                        width={64}
                                        height={64}
                                        className="w-16 h-16 object-contain"
                                    />
                                </motion.div>
                            </motion.div>

                            {/* Title */}
                            <motion.h3
                                className="text-base md:text-xl font-bold text-purple-700 mb-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: feature.delay + 0.3 }}
                            >
                                {feature.title}
                            </motion.h3>

                            {/* Description */}
                            <motion.p
                                className="text-gray-600 text-sm md:text-lg leading-relaxed"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: feature.delay + 0.4 }}
                            >
                                {feature.description}
                            </motion.p>

                            {/* Floating particles effect */}
                            <motion.div
                                className="absolute inset-0 pointer-events-none"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                            >
                                {[...Array(3)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute w-2 h-2 bg-purple-400 rounded-full"
                                        style={{
                                            left: `${20 + i * 30}%`,
                                            top: `${10 + i * 20}%`,
                                        }}
                                        animate={{
                                            y: [-10, -20, -10],
                                            opacity: [0.3, 0.8, 0.3],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Number.POSITIVE_INFINITY,
                                            delay: i * 0.2,
                                        }}
                                    />
                                ))}
                            </motion.div>
                        </motion.div>
                    )
                })}
            </motion.div>

            {/* Background decoration */}
            <motion.div
                className="absolute inset-0 pointer-events-none overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ delay: 1 }}
            >
                <motion.div
                    className="absolute -top-20 -left-20 w-40 h-40 bg-purple-300 rounded-full blur-3xl"
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute -bottom-20 -right-20 w-60 h-60 bg-purple-200 rounded-full blur-3xl"
                    animate={{
                        x: [0, -30, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                />
            </motion.div>
        </div>
    )
}
