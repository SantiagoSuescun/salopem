import { Phone, MapPin, Mail } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
            <div className="container mx-auto px-6 py-12 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12">
                    {/* Logo and Description */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-xl">
                                    <Image
                                        src={"/logo-fotter/Logo Salopem Footer.webp"}
                                        alt="logo salento"
                                        width={200}
                                        height={200}
                                    />
                                </span>
                            </div>
                        </div>
                        <p className="text-purple-100 text-sm leading-relaxed">
                            Nos dedicamos a transformar tu imagen, creamos productos
                            naturales y tecnología para crear productos únicos hechos para
                            ti.
                        </p>
                    </div>

                    {/* Menu */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Menú</h3>
                        <ul className="space-y-2">
                            {[
                                "Inicio",
                                "Nosotros",
                                "Productos",
                                "Servicios",
                                "Blog",
                                "Contacto",
                            ].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="text-purple-200 hover:text-white transition-colors duration-200 text-sm flex items-center"
                                    >
                                        <span className="w-1 h-1 bg-purple-300 rounded-full mr-3"></span>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Contacto</h3>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <MapPin className="w-4 h-4 text-purple-300 flex-shrink-0" />
                                <span className="text-purple-200 text-sm">
                                    Barrancabermeja, Santander
                                </span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="w-4 h-4 text-purple-300 flex-shrink-0" />
                                <span className="text-purple-200 text-sm">
                                    +57 33 2014878
                                </span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="w-4 h-4 text-purple-300 flex-shrink-0" />
                                <span className="text-purple-200 text-sm">
                                    contactosalopem@gmail.com
                                </span>
                            </div>
                            <section
                                className="relative w-[90%] mx-auto min-h-[180px] md:min-h-[100px] -ml-6 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#6330A5] via-[#E6DBF8] to-[#E0C4FF] rounded-3xl shadow-xl mb-12 select-none"
                            >
                                {/* Fondos difusos animados (opcional, puedes dejar solo el gradiente si prefieres) */}
                                {/* Copa, texto y logo alineados horizontalmente y centrados */}
                                <div className="relative z-10 flex flex-row items-center justify-center gap-4 py-4 w-full">
                                    {/* SVG Copa pequeña sin animación */}
                                    <svg width="28" height="28" viewBox="0 0 68 68" fill="none">
                                        <circle cx="34" cy="34" r="33" fill="#fff" fillOpacity="0.93" />
                                        <ellipse cx="34" cy="22" rx="19" ry="12" fill="#FFD700" fillOpacity="0.98" />
                                        <ellipse cx="34" cy="25.5" rx="13.5" ry="8.5" fill="#FFF6C1" />
                                        <path d="M20 22 C22 42, 46 42, 48 22" stroke="#FFD700" strokeWidth="4" fill="none" />
                                        <rect x="30" y="34" width="8" height="20" rx="4" fill="#6330A5" />
                                        <rect x="26" y="54" width="16" height="6" rx="3" fill="#8C5FC0" />
                                        <ellipse cx="34" cy="60" rx="8" ry="2.5" fill="#C4A2F8" />
                                    </svg>
                                    {/* Texto pequeño con color original */}
                                    <span
                                        className="font-extrabold text-center tracking-tight"
                                        style={{
                                            fontSize: 'clamp(0.8rem, 1.5vw, 1.1rem)',
                                            color: '#2E124E',
                                            textShadow: '0 1px 4px #B595F2, 0 1px 0 #fff',
                                            display: 'inline-block',
                                            whiteSpace: 'nowrap'
                                        }}
                                    >
                                        Móving for <br />
                                        Innovation


                                    </span>
                                    {/* Logo Salopem pequeño */}
                                    <Image
                                        src="/images/webp/Logo Salopem.webp"
                                        alt="Logo Salopem"
                                        width={32}
                                        height={24}
                                        className="object-contain"
                                        priority
                                    />
                                </div>

                            </section>
                        </div>
                    </div>

                    {/* Payment Methods */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">
                            Medios de Pago
                        </h3>
                        <div className="space-y-4">
                            {/* Wompi */}
                            <span className="text-purple-800 font-bold text-lg">
                                <Image
                                    src={"/logo-fotter/Logo Wompi.webp"}
                                    alt="Wompi"
                                    width={120}
                                    height={30}
                                />
                            </span>

                            {/* Payment Icons */}
                            <div className="flex flex-wrap gap-3">
                                <Image
                                    src={"/logo-fotter/Logo Bancolombia.webp"}
                                    alt="Bancolombia"
                                    width={120}
                                    height={30}
                                />
                                <Image
                                    src={"/logo-fotter/Logo Nequi.webp"}
                                    alt="Nequi"
                                    width={120}
                                    height={30}
                                />
                            </div>
                        </div>
                        {/* Credit Cards */}
                        <div className="flex space-x-2">
                            <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
                                <Image
                                    src={"/logo-fotter/Logo Visa.webp"}
                                    alt="Visa"
                                    width={60}
                                    height={30}
                                />
                            </div>
                            <Image
                                src={"/logo-fotter/Logo Mastercard.webp"}
                                alt="MC"
                                width={60}
                                height={30}
                            />
                        </div>
                    </div>
                </div>

                {/* Social Media */}
                <div className=" absolute right-12 bottom-28 cursor-pointer">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                        <div className="flex items-center space-x-3">
                            <span className="text-purple-200 text-sm">Síguenos:</span>
                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                <Image src={"/logo-fotter/Logo Chat.webp"} alt="chat" width={50} height={50} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Copyright */}
                <div className="mt-6 pt-6 border-t border-purple-500">
                    <div className="flex flex-col md:flex-row justify-between items-center text-xs text-purple-300">
                        <p>Todos los derechos reservados © 2025 Salopem</p>
                        <p>Desarrollado por Factory Interactive Media</p>
                    </div>
                </div>

            </div>
        </footer>
    );
}
