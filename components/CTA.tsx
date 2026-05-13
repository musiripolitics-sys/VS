"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

export default function CTA() {
  return (
    <section id="contact" className="py-16 px-6 max-w-5xl mx-auto">
      <FadeIn>
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
          className="relative overflow-hidden border border-[#c0392b]/60 rounded-3xl px-10 py-14 flex flex-col md:flex-row items-center justify-between gap-8"
          style={{
            background: "linear-gradient(135deg, rgba(192,57,43,0.06) 0%, transparent 60%)",
          }}
        >
          {/* Glow */}
          <div className="absolute inset-0 pointer-events-none rounded-3xl"
            style={{ boxShadow: "inset 0 0 80px rgba(192,57,43,0.06)" }}
          />

          <h2 className="text-3xl md:text-4xl font-black text-white leading-snug relative z-10">
            Got an idea? You&apos;ve <br className="hidden md:block" />
            landed in the right place
          </h2>

          <motion.a
            href="mailto:info@virallstudios.com"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            className="relative z-10 bg-white text-black font-black text-lg px-10 py-5 rounded-full flex-shrink-0 hover:bg-[#c0392b] hover:text-white transition-colors duration-250"
          >
            Let&apos;s Talk
          </motion.a>
        </motion.div>
      </FadeIn>
    </section>
  );
}
