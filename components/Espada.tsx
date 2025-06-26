'use client';

import { motion, useInView } from 'framer-motion';
import React, { useState, useRef } from 'react';

export default function EspadaLaserBarra(text: { text: string }) {
  const [barsDone, setBarsDone] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Cuando ambas barras terminen, muestra el texto
  const showTitle = barsDone >= 2;

  return (
    <div ref={ref} className="flex flex-col justify-center items-center bg-white h-20 my-12">
      {isInView && (
        <>
          {/* Título animado desde la barra */}
          {showTitle && (
            <motion.h2
              className="text-2xl font-bold text-purple-700 mb-6 uppercase"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {text.text}
            </motion.h2>
          )}
          {/* Barra animada */}
          <div className="relative w-[220px] h-[14px] overflow-visible">
            {/* Mitad izquierda */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "50%" }}
              transition={{
                duration: 1.6,
                ease: [0.42, 0, 0.58, 1.2],
                type: "spring",
                stiffness: 120,
                damping: 12,
              }}
              className="absolute left-1/2 top-0 h-full bg-purple-700 rounded-l-full shadow-lg"
              style={{ transform: "translateX(-100%)" }}
              onAnimationComplete={() => setBarsDone((prev) => prev + 1)}
            />
            {/* Mitad derecha */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "50%" }}
              transition={{
                duration: 1.6,
                ease: [0.42, 0, 0.58, 1.2],
                type: "spring",
                stiffness: 120,
                damping: 12,
              }}
              className="absolute left-1/2 top-0 h-full bg-teal-400 rounded-r-full shadow-lg"
              onAnimationComplete={() => setBarsDone((prev) => prev + 1)}
            />
            {/* Línea del centro */}
            <div className="absolute left-1/2 top-0 h-full w-[4px] bg-white z-10 transform -translate-x-1/2 rounded-full shadow" />
          </div>
        </>
      )}
    </div>
  );
}
