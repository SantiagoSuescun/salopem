"use client"

import Image from "next/image"
import { Instagram } from "lucide-react"
import { motion } from "framer-motion"

export default function InstagramGallery() {
    const instagramImages = [
        {
            id:1,
            src: "/instagram/Insta 7.jpg",
            alt: "Publicación 1 de Instagram",
        },
        {
            id: 2,
            src: "/instagram/Insta 8.jpg",
            alt: "Publicación 2 de Instagram",
        },
        {
            id: 3,
            src: "/instagram/Insta 3.jpg",
            alt: "Publicación 3 de Instagram",
        },
        {
            id: 4,
            src: "/instagram/Insta 4.jpg",
            alt: "Publicación 4 de Instagram",
        },
        {
            id: 5,
            src: "/instagram/Insta 5.jpg",
            alt: "Publicación 5 de Instagram",
        },
        {
            id: 6,
            src: "/instagram/Insta 6.jpg",
            alt: "Publicación 6 de Instagram",
        },
        {
            id: 7,
            src: "/instagram/Insta 7.jpg",
            alt: "Publicación 7 de Instagram",
        },
        {
            id: 8,
            src: "/instagram/Insta 8.jpg",
            alt: "Publicación 8 de Instagram",
        },
    ]

    const handleFollowClick = () => {
        // Replace with your actual Instagram URL
        window.open("https://instagram.com/salopem", "_blank")
    }

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Gallery Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 max-w-6xl mx-auto">
                    {instagramImages.map((image, index) => (
                        <a
                            key={image.id}
                            href="https://instagram.com/salopem"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block h-full w-full"
                        >
                            <motion.div
                                className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
                                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.7, delay: index * 0.08, type: "spring" }}
                                whileHover={{ scale: 1.07, boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover group-hover:brightness-110 transition-all duration-300"
                                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 25vw"
                                />

                                {/* Hover overlay */}
                                <motion.div
                                    className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center"
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 0.2 }}
                                >
                                    <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </motion.div>
                            </motion.div>
                        </a>
                    ))}
                </div>

                {/* Follow Button */}
                <div className="flex justify-center mt-8">
                    <button
                        onClick={handleFollowClick}
                        className="bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-500 hover:to-cyan-600 text-white font-semibold py-3 px-8 rounded-full flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        <Instagram className="w-5 h-5" />
                        <span>Síguenos</span>
                    </button>
                </div>

                {/* WhatsApp Button */}
                <div className="flex justify-end mt-12">
                    <a
                        href="https://wa.me/573001234567" // Cambia por tu número real
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300"
                    >
                        {/* Icono de WhatsApp SVG blanco */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="white" fillOpacity="0.0"/><path d="M16 6.667c-5.147 0-9.333 4.186-9.333 9.333 0 1.647.44 3.25 1.273 4.653l-1.36 4.973a1 1 0 0 0 1.227 1.227l4.973-1.36A9.29 9.29 0 0 0 16 25.333c5.147 0 9.333-4.186 9.333-9.333S21.147 6.667 16 6.667zm0 16c-1.44 0-2.85-.38-4.08-1.1a1 1 0 0 0-.74-.093l-3.36.92.92-3.36a1 1 0 0 0-.093-.74A7.32 7.32 0 0 1 8 16c0-4.413 3.587-8 8-8s8 3.587 8 8-3.587 8-8 8zm4.267-5.227c-.227-.113-1.347-.667-1.553-.747-.207-.08-.36-.113-.513.113-.153.227-.587.747-.72.893-.133.147-.267.167-.493.06-.227-.107-.96-.353-1.83-1.123-.677-.6-1.133-1.34-1.267-1.567-.133-.227-.014-.353.1-.46.107-.1.24-.26.36-.393.12-.133.16-.227.24-.38.08-.153.04-.287-.02-.393-.06-.107-.533-1.28-.73-1.753-.193-.46-.387-.397-.533-.403-.14-.006-.3-.008-.46-.008-.16 0-.42.06-.64.3-.22.24-.84.827-.84 2.013 0 1.187.865 2.334.985 2.493.12.16 1.7 2.6 4.113 3.547.576.248 1.025.397 1.375.508.577.184 1.102.158 1.518.096.463-.07 1.427-.582 1.63-1.144.202-.563.202-1.045.14-1.145-.06-.1-.22-.16-.46-.28z" fill="#fff"/></svg>
                        <span>Escríbenos</span>
                    </a>
                </div>
            </div>
        </section>
    )
}
