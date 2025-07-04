import { Phone, MapPin, Mail } from "lucide-react"
import Image from "next/image"

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
