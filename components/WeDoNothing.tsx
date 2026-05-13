"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function WeDoNothing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [crossed, setCrossed] = useState(false);
  const [showReplace, setShowReplace] = useState(false);

  useEffect(() => {
    if (!inView) return;
    const t1 = setTimeout(() => setCrossed(true), 800);
    const t2 = setTimeout(() => setShowReplace(true), 1300);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [inView]);

  return (
    <section ref={ref} className="py-24 px-6 text-center overflow-hidden">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-white/40 text-sm uppercase tracking-[0.3em] mb-6"
      >
        As an agency
      </motion.p>

      <div className="flex flex-wrap justify-center items-baseline gap-x-4 gap-y-2">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-5xl md:text-7xl font-black text-white"
        >
          We do
        </motion.span>

        <span className="relative inline-block">
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-5xl md:text-7xl font-black text-[#c0392b] relative"
          >
            nothing
            {/* Strike-through line */}
            <motion.span
              initial={{ scaleX: 0 }}
              animate={crossed ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute left-0 right-0 top-1/2 h-1.5 bg-white origin-left rounded-full"
              style={{ marginTop: "-2px" }}
            />
          </motion.span>
        </span>

        {showReplace && (
          <motion.span
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, ease: "backOut" }}
            className="text-5xl md:text-7xl font-black text-[#c0392b]"
          >
            everything
          </motion.span>
        )}

        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.3 }}
          className="text-5xl md:text-7xl font-black text-white"
        >
          ...
        </motion.span>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.6, duration: 0.5 }}
        className="text-white/35 mt-8 text-base max-w-xl mx-auto leading-relaxed"
      >
        We handle creatives, videos, logos, web design, social media, and branding —{" "}
        so you can focus on running your business.
      </motion.p>
    </section>
  );
}
