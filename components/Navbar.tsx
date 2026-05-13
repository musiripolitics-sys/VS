"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-4 flex items-center justify-between transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/logos/va-studios-logo-color.png"
          alt="VA Studios"
          width={60}
          height={60}
          className="object-contain"
          priority
        />
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-8">
        <Link href="#" className="text-[#c0392b] text-sm font-semibold hover:opacity-80 transition">
          Home
        </Link>
        <Link href="#portfolio" className="text-white/80 text-sm font-medium hover:text-white hover:text-[#c0392b] transition">
          Portfolio
        </Link>
        <Link href="#services" className="text-white/80 text-sm font-medium hover:text-white hover:text-[#c0392b] transition">
          Services
        </Link>
        <Link href="#contact" className="text-white/80 text-sm font-medium hover:text-white hover:text-[#c0392b] transition">
          Contact
        </Link>
        <a
          href="#contact"
          className="border border-white/60 text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-white hover:text-black transition duration-200"
        >
          Schedule a Call
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-white p-1"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <AnimatePresence mode="wait">
            {mobileOpen ? (
              <path key="close" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path key="open" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </AnimatePresence>
        </svg>
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-white/10 px-6 py-5 flex flex-col gap-5 md:hidden"
          >
            {["Home", "Portfolio", "Services", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                className="text-white/80 text-sm font-medium hover:text-[#c0392b] transition"
                onClick={() => setMobileOpen(false)}
              >
                {item}
              </Link>
            ))}
            <a
              href="#contact"
              className="border border-white/40 text-white text-sm font-medium px-5 py-2.5 rounded-full text-center hover:bg-white hover:text-black transition"
              onClick={() => setMobileOpen(false)}
            >
              Schedule a Call
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
