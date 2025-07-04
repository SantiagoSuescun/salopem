"use client"
import { nav } from '@/constants'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './ui/button'
import { useCartStore } from "@/lib/cartStore"
import Link from 'next/link'

function Navbar() {
    const [active, setActive] = useState("")
    const [hovered, setHovered] = useState<string | null>(null)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const cartCount = useCartStore(state => state.getCount())

    return (
        <nav
            id="inicio"
            className="w-full  px-2 md:px-8 py-4 bg-white shadow flex items-center justify-between relative z-50"
        >
            {/* Logo a la izquierda */}
            <div className="flex items-center gap-4">
                <Image
                    src={"/images/webp/Logo.webp"}
                    alt="logo"
                    width={100}
                    height={50}
                    className="md:w-[160px] md:h-[60px] w-[90px] h-[40px] object-contain"
                />
            </div>
            {/* Menú centrado (desktop), visible siempre, scrollable si es necesario */}
            <div className="hidden xl:flex relative flex-1 justify-center">
                <div className="flex gap-2 overflow-x-auto scrollbar-thin scrollbar-thumb-purple-200 scrollbar-track-transparent">
                    {nav.map((item) => (
                        <Link
                            href={item.url}
                            key={item.url}
                            className="relative flex flex-col items-center px-2 overflow-hidden"
                            onMouseEnter={() => setHovered(item.url)}
                            onMouseLeave={() => setHovered(null)}
                            onClick={() => setActive(item.url)}
                            style={{ cursor: "pointer", whiteSpace: "nowrap" }}
                        >
                            <span
                                className={`text-[17px] font-medium  rounded transition-colors duration-200 ${active === item.url
                                    ? "text-purple-700 font-semibold"
                                    : "text-gray-700"
                                    }`}
                            // No truncar texto ni poner tooltip
                            >
                                {item.name}
                            </span>
                            <AnimatePresence>
                                {(hovered ? hovered === item.url : active === item.url) && (
                                    <motion.div
                                        layoutId="underline"
                                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-7 h-1 rounded-full bg-purple-500"
                                        initial={{ opacity: 0, y: 6 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 6 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 500,
                                            damping: 30,
                                        }}
                                    />
                                )}
                            </AnimatePresence>
                        </Link>
                    ))}
                </div>
            </div>
            {/* Menú hamburguesa (mobile) */}
            <div className="xl:hidden flex items-center">
                <Button
                    className="p-2 rounded-full bg-purple-100 hover:bg-purple-200 text-purple-700 mr-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Abrir menú"
                >
                    <svg
                        width="28"
                        height="28"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <line x1="4" y1="6" x2="20" y2="6" />
                        <line x1="4" y1="12" x2="20" y2="12" />
                        <line x1="4" y1="18" x2="20" y2="18" />
                    </svg>
                </Button>
            </div>
            {/* Search, perfil y carrito a la derecha (desktop) */}
            <div className="hidden xl:flex items-center gap-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Buscar..."
                        className="pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-300 bg-gray-50 text-sm"
                    />
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <svg
                            width="18"
                            height="18"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <circle cx="11" cy="11" r="7" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                    </span>
                </div>
                <Button className="p-2 rounded-full bg-purple-100 hover:bg-purple-200 text-purple-700 transition-colors">
                    <svg
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <circle cx="12" cy="8" r="4" />
                        <path d="M4 20c0-4 4-7 8-7s8 3 8 7" />
                    </svg>
                </Button>
                <Button className="p-2 rounded-full bg-purple-100 hover:bg-purple-200 text-purple-700 transition-colors relative">
                    <svg
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <circle cx="9" cy="21" r="1" />
                        <circle cx="20" cy="21" r="1" />
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg>
                    {cartCount > 0 && (
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-white animate-pulse">
                            {cartCount}
                        </span>
                    )}
                </Button>
            </div>
            {/* Menú mobile desplegable */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 bg-black/30 z-40 flex flex-col"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <motion.div
                            initial={{ x: 80, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 80, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="bg-white w-4/5 max-w-xs h-full shadow-xl p-6 flex flex-col gap-6"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex items-center mb-4">
                                <Image
                                    src={"/images/Logo.png"}
                                    alt="logo"
                                    width={90}
                                    height={40}
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                {nav.map((item) => (
                                    <Link
                                        key={item.url}
                                        href={item.url}
                                        onClick={() => {
                                            setActive(item.url);
                                            setMobileMenuOpen(false);
                                        }}
                                        className={`text-[25px] text-left px-3 rounded transition-colors duration-200 ${active === item.url
                                            ? "text-purple-700 bg-purple-100"
                                            : "text-gray-700"
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                            <div className="flex gap-4 mt-6">
                                <Button className="p-3 rounded-full bg-purple-100 hover:bg-purple-200 text-purple-700 transition-colors">
                                    <svg
                                        width="28"
                                        height="28"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle cx="12" cy="8" r="4" />
                                        <path d="M4 20c0-4 4-7 8-7s8 3 8 7" />
                                    </svg>
                                </Button>
                                <Button className="p-3 rounded-full bg-purple-100 hover:bg-purple-200 text-purple-700 transition-colors relative">
                                    <svg
                                        width="28"
                                        height="28"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle cx="9" cy="21" r="1" />
                                        <circle cx="20" cy="21" r="1" />
                                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                                    </svg>
                                    {cartCount > 0 && (
                                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-white animate-pulse">
                                            {cartCount}
                                        </span>
                                    )}
                                </Button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

export default Navbar
