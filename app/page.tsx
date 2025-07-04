"use client"
import About from "@/components/about";
import BannerTest from "@/components/BannerTest";
import Blog from "@/components/blog";
import AnimatedCarousel from "@/components/CarouselBaner";
import EspadaLaserBarra from "@/components/Espada";
import Footer from "@/components/footer";
import SocialPhones from "@/components/gallery";
import InstagramGallery from "@/components/gallery";
import Navbar from "@/components/Navbar";
import Component from "@/components/Product";
import SalopemBanner from "@/components/SalopemBanner";
import Services from "@/components/Services";
import ResponsiveAnimatedCarousel from "@/components/TestCapilar";
import TestCapilar from "@/components/TestCapilar";

export default function Home() {
  return (
    <>
      <Navbar />
      <AnimatedCarousel />
      <EspadaLaserBarra text="Test Capilar" id="Ciudado" />
      <BannerTest />
      <EspadaLaserBarra text="Nuestras Categorias" id="tienda" />
      <TestCapilar />
      <EspadaLaserBarra text="Sobre Nosotras" id="about" />
      <About />
      <Services />
      <EspadaLaserBarra text=" Nuestros Productos" id="product" />
      <Component />
      <EspadaLaserBarra text="Blog" id="blog" />
      <Blog />
      <EspadaLaserBarra text="Síguenos en nuestras redes" />
      <SocialPhones />
      <SalopemBanner />
      <Footer />
    </>
  );
}
