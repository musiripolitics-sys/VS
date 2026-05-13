"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const testimonials = [
  {
    logo: "/clients/fj-travels.png",
    name: "Riyaz Ahamed",
    company: "FJ Tours and Travels",
    text: "Virtual Alliance Studios has transformed our brand presence with their outstanding creative designs and engaging video content. Their work has helped us attract more travelers, strengthen our digital reach, and tell our story with real impact.",
  },
  {
    logo: "/clients/osia.png",
    name: "Maneesh Jain",
    company: "Osia Home Appliances",
    text: "Virtual Alliance Studios has enhanced our brand with eye catching creative posters. Their work has attracted more customers, strengthened our online presence, and helped us connect effectively with our audience.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <FadeIn className="text-center mb-14">
        <motion.p
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "backOut" }}
          className="text-6xl font-black text-white"
        >
          70+
        </motion.p>
        <p className="text-2xl font-bold text-white mt-1">Happy Clients</p>
        <p className="text-white/40 mt-3 text-base tracking-wide">Don&apos;t just take our words</p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <FadeIn key={i} delay={i * 0.12} direction={i === 0 ? "left" : "right"}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="flex gap-5 items-start bg-white/5 border border-white/8 rounded-2xl p-6 hover:border-[#c0392b]/30 transition-colors duration-300"
            >
              {/* Logo badge */}
              <div className="w-20 h-16 rounded-xl flex-shrink-0 bg-white flex items-center justify-center p-2 overflow-hidden">
                <Image
                  src={t.logo}
                  alt={t.company}
                  width={80}
                  height={48}
                  className="object-contain w-full h-full"
                />
              </div>
              <div>
                <p className="text-white/75 text-sm leading-relaxed mb-4">{t.text}</p>
                <p className="text-white font-semibold text-sm">{t.name}</p>
                <p className="text-white/35 text-xs mt-0.5">{t.company}</p>
              </div>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
