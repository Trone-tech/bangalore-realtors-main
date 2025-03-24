import React from "react";
import Marquee from "./marquee";

/**
 * Individual testimonial card component
 * 
 * @param {Object} props Component props
 * @param {Object} props.testimonial Testimonial data object
 * @returns {JSX.Element} TestimonialCard component
 */
function TestimonialCard({
  testimonial: { image, name, description },
}) {
  return (
    <div
      className="flex flex-col sm:flex-row h-auto sm:h-44 w-full sm:w-80 md:w-96 overflow-hidden rounded-xl border bg-background dark:border-zinc-700 mx-2 sm:mx-4"
      key={name}
    >
      <div className="relative h-40 sm:h-full w-full sm:w-32 flex-shrink-0 overflow-hidden">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>
      <div className="px-4 py-3 sm:py-2 flex-1">
        <span className="block text-lg font-bold text-foreground">{name}</span>
        <span className="-mt-1 mb-1 block text-sm font-medium leading-loose text-muted-foreground">
          Founder of BAC
        </span>
        <span className="block text-sm text-foreground line-clamp-3">{description}</span>
      </div>
    </div>
  );
}

/**
 * Single row of scrolling testimonials that pauses on hover
 * 
 * @param {Object} props Component props
 * @param {Array} props.data Array of testimonial objects
 * @returns {JSX.Element} ScrollingTestimonials component
 */
export default function ScrollingTestimonials({ data }) {
  return (
    <div className="w-full">
      <Marquee className="[--duration:25s]" pauseOnHover>
        {data.map((testimonial) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} />
        ))}
      </Marquee>
    </div>
  );
}
