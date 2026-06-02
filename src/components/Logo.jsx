import React from "react";

export function Logo({ h = 40, inv = false }) {
  // Beautiful golden emblem crest SVG which serves as a highly premium default placeholder.
  // The user can easily swap this with an <img src={logoImg} /> tag if they add a logo asset file.
  return (
    <svg 
      width={h} 
      height={h} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ 
        filter: inv ? "brightness(0) invert(1)" : "none",
        flexShrink: 0 
      }}
    >
      <circle cx="50" cy="50" r="46" stroke="#C9A020" strokeWidth="4" />
      <polygon points="50,20 75,40 65,75 35,75 25,40" fill="#C9A020" />
      <polygon points="50,28 68,43 60,68 40,68 32,43" fill="#1A4A2E" />
      <path d="M50 32 L50 62 M38 47 L62 47" stroke="#C9A020" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
