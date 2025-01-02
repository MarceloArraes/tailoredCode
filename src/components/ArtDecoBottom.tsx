export const ArtDecoSvgBottom = () => {
  return (
    <div className="relative">
      {/* Corner decorations */}
      <svg
        className="absolute left-0 top-0 h-16 w-16 text-primary"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 80 100 100"
        fill="currentColor"
      >
        <path d="M0 0 L100 100 L0 100 Z" />
        <circle cx="50" cy="50" r="30" fill="black" />
      </svg>

      <svg
        className="absolute right-0 top-0 h-16 w-16 rotate-90 text-primary"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path d="M0 0 L100 0 L100 100 Z" />
        <circle
          cx="30"
          cy="30"
          r="10"
          fill="none"
          stroke="black"
          strokeWidth="4"
          strokeDasharray="125.6 125.6"
        />
        <rect
          x="27.5"
          y="21.5"
          width="5"
          height="17"
          fill="black"
          // stroke="black"
          // stroke-width="2"
        />
        <rect
          x="21.5"
          y="27.5"
          width="17"
          height="5"
          fill="black"
          // stroke="black"
          // stroke-width="1"
        />
      </svg>
    </div>
  );
};
