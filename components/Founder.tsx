"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

export default function Founder() {
  return (
    <section
      className="py-28 px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #1a0505 0%, #0a0a0a 100%)" }}
    >
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(192,57,43,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Meet our Founder &amp; Managing Director
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="text-white font-semibold text-lg mb-3">
            We treat our clients as alliances, sharing the same goals and mission to win.
          </p>
          <p className="text-white/55 text-base leading-relaxed max-w-2xl mx-auto mb-14">
            We turn their online presence into real growth through custom strategies, powerful creatives
            and videos, and a unified system of social media, SEO, ads, and automation that converts
            activity into revenue
          </p>
        </FadeIn>

        {/* Founder card */}
        <FadeIn delay={0.25}>
          <div className="relative inline-flex flex-col items-center">
            {/* Speech bubble name tag */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.4, ease: "backOut" }}
              className="bg-white rounded-2xl px-6 py-3 shadow-xl mb-[-14px] z-10 relative"
            >
              <p className="font-black text-black text-sm">Mr. Vaseem Akram</p>
              <p className="text-gray-500 text-xs">Founder &amp; MD</p>
              {/* Speech bubble tail */}
              <div className="absolute left-1/2 bottom-[-8px] -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white" />
            </motion.div>

            {/* Circular founder photo */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
              className="w-56 h-56 rounded-full border-4 border-white/20 overflow-hidden"
            >
              <Image
                src="/images/vaseem-akram.png"
                alt="Mr. Vaseem Akram – Founder & MD"
                width={224}
                height={224}
                className="object-cover w-full h-full"
              />
            </motion.div>

            {/* Decorative rings */}
            <div className="absolute inset-[-12px] rounded-full border border-white/8 pointer-events-none" />
            <div className="absolute inset-[-26px] rounded-full border border-white/4 pointer-events-none" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
