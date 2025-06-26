"use client"
import About from "@/components/about";
import BannerTest from "@/components/BannerTest";
import Blog from "@/components/blog";
import AnimatedCarousel from "@/components/CarouselBaner";
import EspadaLaserBarra from "@/components/Espada";
import Footer from "@/components/footer";
import InstagramGallery from "@/components/gallery";
import Navbar from "@/components/Navbar";
import Component from "@/components/Product";
import Services from "@/components/Services";
import ResponsiveAnimatedCarousel from "@/components/TestCapilar";
import TestCapilar from "@/components/TestCapilar";

export default function Home() {
  return (
    <>
      <Navbar />
      <AnimatedCarousel />
      <EspadaLaserBarra text="Test Capilar" />
      <BannerTest />
      <EspadaLaserBarra text="Nuestras Categorias" />
      <TestCapilar />
      <EspadaLaserBarra text="Sobre Nosotros" />
      <About />
      <Services />
      <EspadaLaserBarra text=" Nuestros Productos" />
      <Component />
      <EspadaLaserBarra text="Blog" />
      <Blog />
      <EspadaLaserBarra text="Instagram" />
      <InstagramGallery />
      <Footer />
    </>
  );
}
