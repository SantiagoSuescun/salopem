"use client";
import { motion } from "framer-motion";

const SOCIALS = [
    {
        name: "Instagram",
        url: "https://instagram.com/",
        icon: "/social/instagram-ui.jpg", // Imagen mockup de pantalla, reemplázala por la tuya real
        color: "from-pink-200 via-fuchsia-100 to-purple-200",
    },
    {
        name: "Facebook",
        url: "https://facebook.com/",
        icon: "/social/facebook-ui.jpg",
        color: "from-blue-100 via-blue-200 to-blue-300",
    },
    {
        name: "TikTok",
        url: "https://tiktok.com/",
        icon: "/social/tiktok-ui.jpg",
        color: "from-gray-100 via-zinc-100 to-gray-200",
    },
];

export default function SocialPhones() {
    return (
        <div className="flex flex-col items-center gap-8 my-12">
            
            <div className="flex justify-center gap-8 flex-wrap">
                {SOCIALS.map((social, i) => (
                    <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{
                            y: -20,
                            rotate: (i - 1) * 5,
                            scale: 1.07,
                            boxShadow: "0 12px 30px 0 rgba(100,0,255,0.10)",
                        }}
                        whileTap={{ scale: 0.96, rotate: (i - 1) * 9 }}
                        className={`
              bg-gradient-to-br ${social.color}
              relative rounded-3xl shadow-2xl p-1 w-[150px] h-[240px] md:w-[200px] md:h-[350px]
              flex flex-col items-center justify-center cursor-pointer transition-transform duration-200
              group hover:ring-4 hover:ring-purple-200
            `}
                        aria-label={social.name}
                    >
                        {/* Marco del celular */}
                        <div className="absolute z-10 w-full h-full rounded-3xl border-4 border-white pointer-events-none" />
                        {/* Botón superior (notch) */}
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-2 bg-gray-200 rounded-lg" />
                        {/* Pantalla */}
                        <div className="w-[90%] h-[90%] bg-white rounded-2xl overflow-hidden shadow-inner flex items-center justify-center mt-5 mb-2 relative z-20">
                            {/* Imagen UI, pon tu mockup real (cambia src) */}
                            <img
                                src={social.icon}
                                alt={`UI de ${social.name}`}
                                className="object-cover w-full h-full transition-transform duration-300 "
                                draggable={false}
                            />
                        </div>
                        {/* Botón Home */}
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-8 h-1.5 bg-gray-300 rounded-full z-20" />
                    </motion.a>
                ))}
            </div>
        </div>
    );
}
