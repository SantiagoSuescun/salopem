'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function SalopemWinnersBanner() {
  return (
    <section
      className="relative w-[90%] mx-auto mt-32 min-h-[340px] md:min-h-[430px] flex items-center justify-center overflow-hidden
        bg-gradient-to-br from-[#6330A5] via-[#E6DBF8] to-[#E0C4FF] rounded-3xl shadow-xl mb-12 select-none"
    >
      {/* Fondos difusos animados */}
      <motion.div
        className="absolute left-[5%] top-[15%] w-56 h-56 rounded-full bg-purple-300/40 blur-3xl z-0"
        animate={{ scale: [1, 1.09, 1], opacity: [0.85, 1, 0.85] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[8%] bottom-[18%] w-44 h-44 rounded-full bg-purple-500/30 blur-2xl z-0"
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      />

      {/* Insignia/Copa elegante con buen contraste */}
      <motion.div
        className="absolute left-10 md:left-16 top-8 md:top-14 z-10"
        initial={{ rotate: -15, scale: 0.88 }}
        animate={{ rotate: [0, 9, -8, 0], scale: [0.88, 1, 0.96, 1] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      >
        {/* Copa dorada con detalles violeta */}
        <svg width="68" height="68" viewBox="0 0 68 68" fill="none">
          <circle cx="34" cy="34" r="33" fill="#fff" fillOpacity="0.93" />
          <ellipse cx="34" cy="22" rx="19" ry="12" fill="#FFD700" fillOpacity="0.98" />
          <ellipse cx="34" cy="25.5" rx="13.5" ry="8.5" fill="#FFF6C1" />
          <path d="M20 22 C22 42, 46 42, 48 22" stroke="#FFD700" strokeWidth="4" fill="none" />
          <rect x="30" y="34" width="8" height="20" rx="4" fill="#6330A5" />
          <rect x="26" y="54" width="16" height="6" rx="3" fill="#8C5FC0" />
          <ellipse cx="34" cy="60" rx="8" ry="2.5" fill="#C4A2F8" />
        </svg>
      </motion.div>

      {/* Logo Salopem en esquina */}
      <div className="absolute right-7 md:right-14 top-7 md:top-14 z-10 opacity-90">
        <Image
          src="/images/webp/Logo Salopem.webp"
          alt="Logo Salopem"
          width={90}
          height={36}
          className="object-contain"
          priority
        />
      </div>

      {/* Título principal con contraste alto */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-6 w-full">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="font-extrabold text-center tracking-tight"
          style={{
            fontSize: 'clamp(2.4rem, 7vw, 5.5rem)',
            color: '#2E124E', // Violeta oscuro casi negro
            textShadow: '0 10px 36px #B595F2, 0 2px 0 #fff'
          }}
        >
          Ganadores de<br className="hidden md:block" />
          <span
            style={{
              background: 'linear-gradient(90deg, #F2C744 30%, #6330A5 90%)',
              WebkitBackgroundClip: 'text',
              filter: 'drop-shadow(0 2px 4px #FFD70055)'
            }}
            className="font-black"
          >
            Móving for Innovation
          </span>
        </motion.h1>
        {/* Brillo decorativo animado debajo */}
        <motion.div
          className="mt-4 w-[70vw] max-w-2xl h-3 rounded-full bg-gradient-to-r from-[#FFF8D2] via-[#FFD700] to-[#7C51B8] blur-[2px] opacity-90"
          initial={{ scaleX: 0.7 }}
          animate={{ scaleX: [0.7, 1.08, 0.96, 1] }}
          transition={{ duration: 2.2, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
}
