"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FadeIn from "./FadeIn";

const items = [
  {
    client: "OSIA",
    category: "Branding",
    img: "/portfolio/onum-creative.png",
    headline: "Turn every room into a Concert Hall",
    sub: "JBL Bluetooth Speaker Campaign",
  },
  {
    client: "Nutstart",
    category: "Branding",
    img: "/portfolio/bites-rakhi.png",
    headline: "NutStart Box – packed with honey & ghee",
    sub: "Festive Season Campaign",
  },
  {
    client: "FJ Tours & Travels",
    category: "Branding",
    img: "/portfolio/melees.png",
    headline: "Sri Lanka is calling. Will you answer?",
    sub: "Travel Campaign Creative",
  },
  {
    client: "Selfie Museum",
    category: "Logo",
    img: "/portfolio/selfie-museum.png",
    headline: "Logos speak before words do",
    sub: "Identity & Logo Design",
  },
  {
    client: "GCAT",
    category: "Branding",
    img: "/portfolio/bni.png",
    headline: "Charity Begins From Heart",
    sub: "Global Cancer Alliance Trust",
  },
  {
    client: "Jannal Kaapi",
    category: "Social",
    img: "/portfolio/jannal-kaapi.png",
    headline: "Every sip tells a story",
    sub: "Social Media Campaign",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-6 max-w-6xl mx-auto">
      <FadeIn>
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl md:text-5xl font-black text-white">Portfolio</h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#c0392b] text-white text-sm font-bold px-6 py-3 rounded-full hover:bg-[#a93226] transition"
          >
            More Magic
          </motion.button>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((item, i) => (
          <FadeIn key={i} delay={i * 0.06}>
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.25 }}
              className="group cursor-pointer"
            >
              <div
                className="rounded-2xl flex flex-col justify-between p-6 relative overflow-hidden"
                style={{ minHeight: 280 }}
              >
                {/* Real image background */}
                <Image
                  src={item.img}
                  alt={item.headline}
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300 rounded-2xl" />

                {/* Top category pill */}
                <div className="relative z-10 flex justify-between items-start">
                  <span className="bg-white/15 backdrop-blur-sm text-white text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                    {item.category}
                  </span>
                  <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                </div>

                {/* Bottom text */}
                <div className="relative z-10">
                  <p className="text-white font-bold text-base leading-snug mb-1">{item.headline}</p>
                  <p className="text-white/60 text-xs">{item.sub}</p>
                </div>
              </div>

              <div className="flex justify-between items-center mt-3 px-1">
                <p className="text-white font-semibold text-sm">{item.client}</p>
                <p className="text-white/35 text-xs">{item.category}</p>
              </div>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
