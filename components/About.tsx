"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const words = [
  { text: "We are ", accent: false },
  { text: "Virtual Alliance Studios", accent: true },
  { text: ", a ", accent: false },
  { text: "Creative", accent: true },
  { text: " and ", accent: false },
  { text: "Digital marketing agency", accent: true },
  { text: ". We are ", accent: false },
  { text: "Creators", accent: true },
  { text: ", ", accent: false },
  { text: "Storytellers", accent: true },
  { text: " and ", accent: false },
  { text: "Innovators", accent: true },
  { text: " committed to elevating your brand in the digital space.", accent: false },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6 max-w-5xl mx-auto text-center">
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-2xl md:text-3xl font-semibold leading-relaxed text-white"
      >
        {words.map((w, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.1 + i * 0.04, duration: 0.4 }}
            className={w.accent ? "text-[#c0392b] font-bold" : ""}
          >
            {w.text}
          </motion.span>
        ))}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
        className="mt-8 text-lg text-white/60 leading-relaxed max-w-3xl mx-auto"
      >
        Our core services include{" "}
        <span className="text-[#c0392b] font-semibold">Creative Digital Marketing</span>,{" "}
        <span className="text-[#c0392b] font-semibold">Brand Strategies</span>,{" "}
        <span className="text-[#c0392b] font-semibold">Expert Graphic Design</span>,{" "}
        <span className="text-[#c0392b] font-semibold">Engaging Video Editing</span> and{" "}
        <span className="text-[#c0392b] font-semibold">Comprehensive Branding Solutions</span>{" "}
        that captivate audiences and drive measurable success.
      </motion.p>
    </section>
  );
}
