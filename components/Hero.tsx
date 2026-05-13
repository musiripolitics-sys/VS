"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    word: "Give",
    sub: "your brand the story it deserves",
    bg: "bg-white",
    textColor: "text-black",
  },
  {
    word: "Craft",
    sub: "visuals that stop the scroll",
    bg: "bg-[#f9e4d4]",
    textColor: "text-black",
  },
  {
    word: "Tell",
    sub: "stories that move people",
    bg: "bg-[#ddeeff]",
    textColor: "text-black",
  },
  {
    word: "Build",
    sub: "brands that last a lifetime",
    bg: "bg-[#eafaf1]",
    textColor: "text-black",
  },
  {
    word: "Design",
    sub: "experiences worth remembering",
    bg: "bg-[#fdf0f0]",
    textColor: "text-black",
  },
];

const portfolioGrid = [
  { img: "/portfolio/onum-creative.png",   title: "Onum Creative",  sub: "Branding" },
  { img: "/portfolio/selfie-museum.png",   title: "Selfie Museum",  sub: "Logo" },
  { img: "/portfolio/bites-rakhi.png",     title: "Bites & Rakhi",  sub: "Campaign" },
  { img: "/portfolio/bni.png",             title: "BNI",            sub: "Branding" },
  { img: "/portfolio/melees.png",          title: "Melees",         sub: "Social" },
  { img: "/portfolio/jannal-kaapi.png",    title: "Jannal Kaapi",   sub: "Social" },
  { img: "/portfolio/austin-distel-tLZhFRLj6nY-unsplash.jpg", title: "Digital Mktg", sub: "Social" },
  { img: "/portfolio/cherrydeck-rMILC1PIwM0-unsplash.jpg",    title: "Creatives",    sub: "Design" },
  { img: "/portfolio/collabstr-k8plFiceP0I-unsplash.jpg",     title: "Collab",       sub: "Social" },
  { img: "/portfolio/videodeck-co-GRUhkcD9k8o-unsplash.jpg",  title: "Video",        sub: "Content" },
  { img: "/portfolio/usama-akram-fSNRz2sGU5M-unsplash.jpg",   title: "Photography",  sub: "Brand" },
  { img: "/portfolio/hopenestclinic_3714718711552110296.webp", title: "Hope Nest",    sub: "Healthcare" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"text" | "grid">("text");

  useEffect(() => {
    if (phase !== "text") return;

    const id = setInterval(() => {
      setIndex((prev) => {
        const next = prev + 1;
        if (next >= slides.length) {
          clearInterval(id);
          setTimeout(() => setPhase("grid"), 600);
          return prev;
        }
        return next;
      });
    }, 1300);

    return () => clearInterval(id);
  }, [phase]);

  const current = slides[index];

  return (
    <section className="hero-bg min-h-screen flex flex-col items-center justify-center pt-24 pb-10 px-4 relative">
      {/* Subtle vignette corners */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.7) 100%)"
      }} />

      <div className="w-full max-w-5xl relative z-10">
        <AnimatePresence mode="wait">
          {phase === "text" ? (
            <motion.div
              key={`card-${index}`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className={`${current.bg} rounded-3xl flex flex-col items-center justify-center gap-4 py-24 px-8`}
              style={{ minHeight: 380 }}
            >
              <motion.span
                key={`word-${index}`}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className={`${current.textColor} text-7xl md:text-9xl font-black tracking-tight`}
              >
                {current.word}
              </motion.span>
              <motion.p
                key={`sub-${index}`}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.35, delay: 0.15, ease: "easeOut" }}
                className="text-black/50 text-lg md:text-xl font-medium"
              >
                {current.sub}
              </motion.p>
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-[#111] rounded-3xl p-3 border border-white/10"
              style={{ minHeight: 380 }}
            >
              <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
                {portfolioGrid.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.04, duration: 0.3, ease: "easeOut" }}
                    className="rounded-xl overflow-hidden relative cursor-pointer hover:scale-105 transition-transform group"
                    style={{ minHeight: 110 }}
                  >
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="150px"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-200 rounded-xl flex flex-col items-start justify-end p-2 opacity-0 group-hover:opacity-100">
                      <span className="text-white text-[10px] font-bold leading-tight drop-shadow">{item.title}</span>
                      <span className="text-white/80 text-[9px] leading-tight">{item.sub}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Slide indicator dots */}
        {phase === "text" && (
          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`rounded-full transition-all duration-300 ${
                  i === index ? "w-6 h-2 bg-white" : "w-2 h-2 bg-white/30"
                }`}
              />
            ))}
          </div>
        )}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center text-white/30 text-xs mt-5 tracking-widest uppercase"
        >
          Scroll to explore
        </motion.p>
      </div>
    </section>
  );
}
