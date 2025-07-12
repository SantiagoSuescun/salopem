"use client"
import About from "@/components/landing/about";
import BannerTest from "@/components/landing/BannerTest";
import Blog from "@/components/landing/blog";
import AnimatedCarousel from "@/components/landing/CarouselBaner";
import EspadaLaserBarra from "@/components/landing/Espada";
import Footer from "@/components/landing/footer";
import SocialPhones from "@/components/landing/gallery";
import Navbar from "@/components/landing/Navbar";
import Component from "@/components/landing/Product";
import Services from "@/components/landing/Services";
import TestCapilar from "@/components/landing/TestCapilar";

export default function Home() {
  return (
    <>
      <AnimatedCarousel />
      <EspadaLaserBarra text="Test Capilar" id="Ciudado" />
      <BannerTest />
      <EspadaLaserBarra text="Nuestras Categorias" id="mayoristas" />
      <TestCapilar />
      <EspadaLaserBarra text="Sobre Nosotras" id="sobre-nosotras" />
      <About />
      <Services />
      <EspadaLaserBarra text=" Nuestros Productos" id="productos" />
      <Component />
      <EspadaLaserBarra text="Blog" id="blog" />
      <Blog />
      <EspadaLaserBarra text="Síguenos en nuestras redes" />
      <SocialPhones />
      <Footer />
    </>
  );
}
