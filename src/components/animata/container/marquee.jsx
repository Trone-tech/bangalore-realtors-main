import React from "react";

/**
 * Marquee component for creating scrolling content
 * @param {Object} props Component props
 * @param {React.ReactNode} props.children Content to be scrolled
 * @param {string} props.className Additional CSS classes
 * @param {boolean} props.reverse Direction of scrolling (true for right to left)
 * @param {boolean} props.pauseOnHover Whether to pause scrolling on hover
 * @returns {JSX.Element} Marquee component
 */
export default function Marquee({
  children,
  className,
  reverse = false,
  pauseOnHover = false,
}) {
  return (
    <div className={`marquee-container ${className || ""}`}>
      <div 
        className={`marquee ${reverse ? "marquee-reverse" : ""} ${pauseOnHover ? "marquee-pause-on-hover" : ""}`}
      >
        <div className="marquee-content">
          {children}
        </div>
        <div className="marquee-content" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
