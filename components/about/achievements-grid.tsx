// components/AchievementsGrid.jsx

import EspadaLaserBarra from "../landing/Espada";
import AchievementCard from "./achievement-card";

const achievements = [
  {
    image: "/logros/Radio Diversa.jpg",
    title: "Radio Diversa",
    description:
      "En 2024 la página Radio Diversa hizo un artículo, reconociendo nuestro trabajo.",
  },
  {
    image: "/logros/PikPng.com_logo-santander-png_4736602.png",
    title: "Proyecto Santander",
    description:
      "En enero de 2025 ganamos proyecto de innovación empresarial en Santander.",
  },
  {
    image: "/logros/Feria-Prototipado.jpg",
    title: "Innova Fest",
    description: "Participación en INNOVA FEST en diciembre de 2024 en Bogotá.",
  },
  {
    image: "/logros/innovations.png",
    title: "Moving For Innovation",
    description: "Ganadoras del Moving For Innovation.",
  },
  {
    image: "/logros/renacelogo.png",
    title: "Renace y Emprende",
    description:
      "Ganadoras del concurso 'RENACE Y EMPRENDE' del año 2019 Cámara de Comercio de Barrancabermeja.",
  },
];

export default function AchievementsGrid() {
  return (
    <section className="py-12">
      <EspadaLaserBarra text="Logros y Reconocimientos"/>

      <div className="flex flex-wrap justify-center gap-x-12 gap-y-10">
        {achievements.map((item, idx) => (
          <AchievementCard key={idx} {...item} />
        ))}
      </div>
    </section>
  );
}
