export default function VALogo({ size = 48 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size * 1.25}
      viewBox="0 0 120 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* V shape */}
      <path
        d="M10 20 L55 100 L100 20"
        stroke="white"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* A crossbar */}
      <path
        d="M32 65 L78 65"
        stroke="white"
        strokeWidth="10"
        strokeLinecap="round"
      />
      {/* Pen nib accent on top right of A */}
      <path
        d="M100 20 L112 8 L108 24 Z"
        fill="white"
      />
      {/* Studios text - represented as a subtle underline decoration */}
      <path
        d="M15 130 Q60 118 105 130"
        stroke="white"
        strokeWidth="2"
        fill="none"
        opacity="0.4"
      />
    </svg>
  );
}
