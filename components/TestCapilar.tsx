'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

const recommendedProducts = [

    {
        logo: '/images/webp/Logo Salopem.webp',
        image: '/images/webp/Producto 4.webp',
        name: 'Perfume Capilar',
        category: 'Aroma y Brillo',
    },

    {
        logo: '/images/webp/Logo Kamala.webp',
        image: '/images/webp/Productos Kamala 3.webp',
        name: 'Línea Kamala',
        category: 'Cuidado Completo',
    },
    {
        logo: '/images/webp/Logo Mio.webp',
        image: '/images/webp/Productos Mio 1.webp',
        name: 'Tu Cabello, tu formula, ',
        category: 'Tu poder',
    },
];

export default function TestCapilar() {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);

    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.3 });

    useEffect(() => {
        const calculateWidth = () => {
            if (carouselRef.current) {
                const scrollWidth = carouselRef.current.scrollWidth;
                const offsetWidth = carouselRef.current.offsetWidth;
                setWidth(scrollWidth - offsetWidth);
            }
        };

        calculateWidth();
        window.addEventListener('resize', calculateWidth);

        return () => {
            window.removeEventListener('resize', calculateWidth);
        };
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.5,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring' as const,
                stiffness: 100,
            },
        },
    };
    return (
        <div ref={containerRef} className="relative flex  min-h-screen items-center justify-center bg-[#EDE9F6] overflow-hidden py-16">
            <motion.div
                initial={{ x: 0 }}
                animate={isInView ? { x: '-100%' } : { x: '0%' }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
                className="absolute top-0 bottom-0 left-0 w-1/2 bg-purple-700 z-30 border-r-2 border-white"
            />

            <motion.div
                initial={{ x: 0 }}
                animate={isInView ? { x: '100%' } : { x: '0%' }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
                className="absolute top-0 bottom-0 right-0 w-1/2 bg-purple-700 z-30 border-l-2 border-white"
            />

            <motion.div
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={containerVariants}
                className="z-20 text-center w-full"
            >
                <motion.div
                    ref={carouselRef}
                    className="cursor-grab overflow-hidden"
                    whileTap={{ cursor: 'grabbing' }}
                >
                    <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        className="flex flex-col lg:flex-row items-center justify-center min-w-0 gap-y-10 gap-x-12 w-full"
                    >
                        {recommendedProducts.map((product, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="flex-shrink-0 flex flex-col items-center max-w-sm w-[90vw] md:w-[28vw]"
                            >
                                <div className="relative w-full h-[40vw] max-h-[420px] min-h-[60px] flex items-center justify-center">
                                    <motion.div
                                        className="absolute bottom-0 w-[70%] h-[70%] bg-gradient-to-br from-violet-200 to-purple-300 rounded-[40px] shadow-xl"
                                        whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -10px rgba(139, 92, 246, 0.3)' }}
                                    />
                                    <motion.div
                                        className="absolute w-full h-full"
                                        whileHover={{ scale: 0.9, rotate: 3 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                    >
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-contain drop-shadow-2xl"
                                            sizes="(max-width: 668px) 80vw, 28vw"
                                        />
                                    </motion.div>
                                </div>
                                <div className="text-center mt-8 flex flex-col items-center justify-start w-full">
                                    <div className="relative w-[10vw] min-w-[120px] h-[60px]">
                                        <Image src={product.logo} alt={`${product.name} logo`} fill className="object-contain" />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl mt-6 font-bold text-purple-900 px-2 leading-tight">
                                        {product.name}
                                    </h3>
                                    <span className="text-lg md:text-xl font-medium text-purple-700 uppercase mt-2">{product.category}</span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

            </motion.div>
        </div>
    );
}
