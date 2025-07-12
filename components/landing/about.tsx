import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

function About() {
    return (
        <section className="w-full flex flex-col lg:flex-row items-center justify-center py-8 px-4 lg:px-12 gap-6 lg:gap-12">
            {/* Texto */}
            <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="flex-1 bg-[#2bccc7ff] max-lg:p-6 rounded-2xl shadow-lg max-w-xl w-full h-[300px] lg:h-[400px] flex items-center justify-center"
            >
                <div className="flex flex-col justify-center  h-full w-full px-4 md:px-8 text-black">
                    <p className="mb-2 text-base md:text-xl leading-relaxed  ">
                        Salopém venta y fabricación productos capilares.<br />
                        Nos enfocamos en brindar soluciones innovadoras para el cuidado del cabello, combinando ingredientes naturales y tecnología para garantizar resultados efectivos y saludables.
                    </p>
                    <p className="mb-2 text-base md:text-xl leading-relaxed  ">
                        Cuidamos tu cabello, transformamos tu imagen.<br />
                        Fusionamos naturaleza y tecnología para crear productos capilares únicos, hechos para ti.
                    </p>
                    <p className="text-base md:text-xl font-bold mt-2" >
                        ¡Tu camino hacia un cabello saludable comienza aquí!
                    </p>
                </div>
            </motion.div>
            {/* Imagen */}
            <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="flex-1 flex items-center justify-center max-w-xl w-full h-[300px] md:h-[400px]"
            >
                <div className="relative w-full h-full">
                    <Image
                        src="/images/Foto Nosotros.jpg"
                        alt="Foto equipo Salopém"
                        fill
                        className="rounded-2xl shadow-xl object-cover w-full h-full"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
            </motion.div>
        </section>
    )
}

export default About
