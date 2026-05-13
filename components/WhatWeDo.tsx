"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const services = [
  {
    gradient: "linear-gradient(135deg, #7c4a2d 0%, #3a1a08 100%)",
    tagline: "Creatives is the soul of design in business.",
    label: "Creatives",
    darkText: false,
    img: "/portfolio/onum-creative.png",
    imgAlt: "NutStart festive box creative design",
  },
  {
    gradient: "linear-gradient(135deg, #e8e0d0 0%, #cfc6b4 100%)",
    tagline: "Web design turns presence into experience",
    label: "Web Design",
    darkText: true,
    img: "/portfolio/cherrydeck-rMILC1PIwM0-unsplash.jpg",
    imgAlt: "Web design team working",
  },
  {
    gradient: "linear-gradient(135deg, #1e5c8a 0%, #0a2535 100%)",
    tagline: "Videos are the pulse of emotion in media",
    label: "Content Marketing",
    darkText: false,
    img: "/portfolio/videodeck-co-GRUhkcD9k8o-unsplash.jpg",
    imgAlt: "Video content production studio",
  },
  {
    gradient: "linear-gradient(135deg, #c9a800 0%, #6b5500 100%)",
    tagline: "Logos speak before words do",
    label: "Logos",
    darkText: false,
    img: "/portfolio/selfie-museum.png",
    imgAlt: "Selfie Museum logo design",
  },
];

export default function WhatWeDo() {
  return (
    <section id="services" className="py-20 px-6 max-w-6xl mx-auto">
      <FadeIn>
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl md:text-5xl font-black text-white">What we do</h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#c0392b] text-white text-sm font-bold px-6 py-3 rounded-full hover:bg-[#a93226] transition"
          >
            More Magic
          </motion.button>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((s, i) => (
          <FadeIn key={i} delay={i * 0.08}>
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.25 }}
              className="rounded-3xl overflow-hidden relative cursor-pointer group"
              style={{ background: s.gradient, minHeight: 320 }}
            >
              {/* Tagline — top left */}
              <div className="absolute top-8 left-8 max-w-[52%] z-10">
                <p className={`text-lg font-bold leading-snug ${s.darkText ? "text-black" : "text-white"}`}>
                  {s.tagline}
                </p>
              </div>

              {/* Real image — right panel */}
              <div className="absolute right-0 top-0 bottom-0 w-[46%] overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.imgAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {/* Fade left edge into card bg */}
                <div
                  className="absolute inset-y-0 left-0 w-12 z-10"
                  style={{
                    background: `linear-gradient(to right, ${s.gradient.match(/#[a-f0-9]{6}/i)?.[0] ?? "#111"}, transparent)`,
                  }}
                />
              </div>

              {/* Hover shimmer */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/4 transition-colors duration-300 rounded-3xl z-10" />

              {/* Label button — bottom left */}
              <div className="absolute bottom-7 left-8 z-20">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold shadow-lg ${
                    s.darkText
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {s.label}
                </motion.button>
              </div>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
