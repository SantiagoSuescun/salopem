import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';
import { Button } from './ui/button';

function ProductosSuperpuestos({ imagenes }: { imagenes: string[] }) {
    const ref = useRef<HTMLDivElement>(null);

    return (
        <div className='flex-1 w-[280]' >

            <Image
                src={`/images/webp/${imagenes[0]}`}
                alt={imagenes[0]}
                width={320}
                height={220}
                className=" absolute bottom-4 right-0"
                style={{ display: 'block', borderRadius: 0, margin: 0, padding: 0, boxShadow: 'none' }}
            />

            <Image
                src={`/images/webp/${imagenes[1]}`}
                alt={imagenes[1]}
                width={320}
                height={220}
                className="absolute bottom-4 right-[80] "
                style={{ display: 'block', borderRadius: 0, margin: 0, padding: 0, boxShadow: 'none' }}
            />

            <Image
                src={`/images/webp/${imagenes[2]}`}
                alt={imagenes[2]}
                width={320}
                height={220}
                className="absolute bottom-4 right-[162]"
                style={{ display: 'block', borderRadius: 0, margin: 0, padding: 0, boxShadow: 'none' }}
            />

            <Image
                src={`/images/webp/${imagenes[3]}`}
                alt={imagenes[3]}
                width={250}
                height={220}
                className="absolute bottom-4 right-[56]"
                style={{ display: 'block', borderRadius: 0, margin: 0, padding: 0, boxShadow: 'none' }}
            />

            <Image
                src={`/images/webp/${imagenes[4]}`}
                alt={imagenes[4]}
                width={280}
                height={220}
                className="absolute bottom-3 right-[150]"
                style={{ display: 'block', borderRadius: 0, margin: 0, padding: 0, boxShadow: 'none' }}
            />
            <Image
                src={`/images/webp/${imagenes[5]}`}
                alt={imagenes[4]}
                width={100}
                height={220}
                className="absolute bottom-3 right-[170]"
                style={{ display: 'block', borderRadius: 0, margin: 0, padding: 0, boxShadow: 'none' }}
            />
        </div>
    );
}

export default function BannerTest() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const productos = [
        'Shampoo_kamala_500_ml-removebg-preview.webp',
        'HI_salopem_500_ml_shampoo-removebg-preview.webp',
        '24-removebg-preview.webp',
        'Aceite_de_aguacate_kamala_120_ml-removebg-preview.webp',
        '17-removebg-preview.webp',
        '10-removebg-preview.webp',
    ];
    return (
        <div ref={ref} className="w-full overflow-hidden relative my-6 min-h-[320px] lg:min-h-[380px] flex max-lg:flex-col items-end justify-center bg-gradient-to-br from-purple-700 via-purple-500 to-indigo-500">
            <div className="flex flex-row items-center justify-center lg:justify-between w-full h-full gap-2  px-2  ">
                {/* Mujer a la izquierda, alineada abajo */}
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="max-lg:hidden flex-shrink-0 w-[160px] md:w-[200px] lg:w-[380px] h-auto z-20 flex items-end"
                    style={{ alignSelf: 'flex-end' }}
                >
                    <Image
                        src="/images/webp/mujer.webp"
                        alt="Mujer diagnóstico"
                        width={460}
                        height={500}
                        className="object-"
                        priority
                    />
                </motion.div>
                {/* Texto en el centro, siempre centrado */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                    className=" flex flex-col items-center justify-center text-center lg:-ml-35 "
                >
                    <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 text-center ">
                        "Tu diagnóstico <br /> está listo"
                    </h1>
                    <Button className="px-8 py-3 rounded-full text-base md:text-lg font-semibold text-white bg-cyan-500 hover:bg-cyan-600 transition-colors duration-200">
                        ¡Solicítalo ya!
                    </Button>
                </motion.div>
                {/* Productos alineados horizontalmente, pegados, a la derecha */}
                <div className='max-lg:hidden'>
                    <ProductosSuperpuestos imagenes={productos} />
                </div>
            </div>
        </div>
    );
}


