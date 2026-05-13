import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import WhatWeDo from "@/components/WhatWeDo";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Portfolio from "@/components/Portfolio";
import WhyDigitalMarketing from "@/components/WhyDigitalMarketing";
import Founder from "@/components/Founder";
import WeDoNothing from "@/components/WeDoNothing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ClientLogos />
        <WhatWeDo />
        <About />
        <Testimonials />
        <Portfolio />
        <WhyDigitalMarketing />
        <Founder />
        <WeDoNothing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
