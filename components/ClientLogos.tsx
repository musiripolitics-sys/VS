import Image from "next/image";
import FadeIn from "./FadeIn";

const logos = [
  { src: "/clients/osia.png",        alt: "OSIA Home Appliances" },
  { src: "/clients/sp-computer.png", alt: "SP Computer" },
  { src: "/clients/nutstart.png",    alt: "NutStart" },
  { src: "/clients/sparsh.png",      alt: "Sparsh" },
  { src: "/clients/sv-medcity.png",  alt: "SV Medcity" },
  { src: "/clients/coffee-mama.png", alt: "Coffee Mama" },
  { src: "/clients/gcat.png",        alt: "GCAT" },
  { src: "/clients/fj-travels.png",  alt: "FJ Travels" },
  { src: "/clients/wow.png",         alt: "Wow" },
  { src: "/clients/hope-nest.png",   alt: "Hope Nest" },
  { src: "/clients/workzen.png",     alt: "Workzen" },
  { src: "/clients/njord.svg",       alt: "NJORD" },
];

export default function ClientLogos() {
  const doubled = [...logos, ...logos];

  return (
    <FadeIn>
      <section className="py-10 border-t border-b border-white/8 overflow-hidden">
        <div className="marquee-track">
          {doubled.map((logo, i) => (
            <div
              key={i}
              className="mx-10 flex items-center justify-center flex-shrink-0"
              style={{ width: 120, height: 48 }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={48}
                className="object-contain max-h-10 w-auto opacity-70 hover:opacity-100 transition-opacity duration-200 brightness-0 invert"
              />
            </div>
          ))}
        </div>
      </section>
    </FadeIn>
  );
}
