// pages/nosotros.jsx

import AchievementsGrid from "@/components/about/achievements-grid";
import SectionWithImage from "@/components/about/section-with-image";
import VisionMissionCard from "@/components/about/vision-mission-card";
import EspadaLaserBarra from "@/components/landing/espada";

export default function NosotrosPage() {
  return (
    <div className="container mx-auto px-4   md:px-6 lg:px-8">
      <EspadaLaserBarra text="Nosotros" />

      {/* Historia */}
      <SectionWithImage
        imageSrc="/nosotros/Salopem01.jpg"
        imageAlt="Historia Salopem"
        title="Historia"
        text="El sueño de Salopém comenzó en junio de 2016, con la creación de productos capilares naturales, fabricados de manera artesanal, sostenible y utilizando técnicas tradicionales. Nuestro primer lanzamiento fue el kit anticaída y de crecimiento KAMALA, que luego evolucionó con el tiempo, incorporando una línea masculina y kits especializados en reparación y nutrición capilar. En 2019, fuimos reconocidas como ganadoras del concurso 'Renace y Emprende' organizado por la Cámara de Comercio de Barrancabermeja, un hito que marcó nuestro crecimiento como emprendedoras. En 2020, la pandemia nos impulsó a explorar nuevas oportunidades comerciales, incursionando en áreas como bioseguridad, limpieza y la venta de productos saludables de Fuxión. Este período también trajo consigo la decisión de cerrar nuestro salón de belleza y estructurar un modelo de ventas en línea a través de catálogos digitales."
        imageLeft={true}
      />

      {/* Transformación 2024 */}
      <SectionWithImage
        imageSrc="/nosotros/Salopem2.jpg"
        imageAlt="Transformación 2024"
        title=""
        text="El 2024 fue un año de transformación para Salopém con el inicio del proyecto 'Moving for Innovation', lo que nos permitió fortalecer nuestras capacidades en innovación empresarial. Además, participamos en INNOVA FEST en Bogotá en diciembre de 2024, donde nuestro proceso fue reconocido públicamente. En enero de 2025, fuimos galardonadas por nuestro proyecto de innovación empresarial en Santander, y actualmente estamos realizando adecuaciones para la construcción de nuestra propia planta de producción, marcando un nuevo capítulo en nuestra historia."
        imageLeft={false}
      />

      {/* Misión y Visión */}
      <section className="grid md:grid-cols-2 mx-auto gap-5  my-12">
        <VisionMissionCard
          icon="/icon/Misión.png"
          title="Misión"
          text="En Salopém SAS nos especializamos en la creación de productos capilares con extractos 100% naturales, formulados con ingredientes de alta calidad y libres de químicos agresivos. Nuestro objetivo es ofrecer soluciones efectivas a los problemas capilares de nuestros clientes, a través de un enfoque personalizado y asesoría experta. Promovemos el bienestar y el cuidado natural del cabello, con el compromiso de ser una marca confiable, innovadora y responsable."
        />
        <VisionMissionCard
          icon="/icon/Visión.png"
          title="Visión"
          text="Ser una empresa líder en Colombia y Latinoamérica en la fabricación y comercialización de productos capilares, ofreciendo soluciones personalizadas para cada tipo de cabello. Nuestro objetivo es expandir nuestra presencia tanto a nivel nacional como internacional, consolidándonos como una marca reconocida por la calidad, innovación y efectividad de nuestros productos. Nos destacamos por nuestra capacidad de adaptación a las necesidades cambiantes del mercado, con la meta de convertirnos en el referente en belleza y cuidado capilar natural, siempre comprometidos con el medio ambiente y la salud de nuestros consumidores."
        />
      </section>

      {/* Logros y Reconocimientos */}
      <AchievementsGrid />
    </div>
  );
}
