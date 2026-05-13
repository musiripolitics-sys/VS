export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-16 px-6 mt-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div>
          <div className="mb-4">
            <span className="text-white font-black text-2xl">VA</span>
            <br />
            <span className="text-white text-sm" style={{ fontFamily: "cursive", letterSpacing: "2px" }}>
              Studios
            </span>
          </div>
          <p className="text-white/50 text-sm leading-relaxed mb-6">
            We&apos;re a creative digital marketing agency dedicated to building powerful brands that inspire and drive results.
          </p>
          {/* Socials */}
          <div className="flex gap-4">
            {["f", "in", "li", "✉"].map((icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-[#c0392b] hover:text-[#c0392b] transition text-sm font-bold"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Services</h4>
          <ul className="space-y-3">
            {["Social Media Marketing", "Logos", "Printables", "Content Marketing", "See all"].map((s) => (
              <li key={s}>
                <a href="#services" className="text-white/50 text-sm hover:text-white transition">{s}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Company</h4>
          <ul className="space-y-3">
            {["About us", "Services", "Portfolio", "Career", "Contact"].map((s) => (
              <li key={s}>
                <a href="#" className="text-white/50 text-sm hover:text-white transition">{s}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Contact</h4>
          <ul className="space-y-4">
            <li className="flex gap-3 items-start">
              <span className="text-[#c0392b] mt-0.5">✉</span>
              <a href="mailto:info@virallstudios.com" className="text-white/50 text-sm hover:text-white transition">
                info@virallstudios.com
              </a>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-[#c0392b] mt-0.5">📞</span>
              <a href="tel:+917708874237" className="text-white/50 text-sm hover:text-white transition">
                +91 7708 874 237
              </a>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-[#c0392b] mt-0.5">📍</span>
              <p className="text-white/50 text-sm">
                S Park St, Secretariat Colony, Venkstapuram Ambattur, Chennai, Tamil Nadu 600053
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/30 text-xs">© 2025 Virtual Alliance Studios. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="text-white/30 text-xs hover:text-white transition">Privacy Policy</a>
          <a href="#" className="text-white/30 text-xs hover:text-white transition">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
}
