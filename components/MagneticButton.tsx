"use client";

import { useRef } from "react";

export default function MagneticButton() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const handleMouseLeave = () => {
    if (!buttonRef.current) return;

    buttonRef.current.style.transform =
      "translate(0px,0px)";
  };

  return (
    <button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="
      px-10
      py-5
      bg-yellow-500
      text-black
      rounded-full
      transition-all
      duration-300
      "
    >
      Book Appointment
    </button>
  );
}