"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener(
        "mousemove",
        moveCursor
      );
    };
  }, []);

  return (
    <div
      className="
      fixed
      w-8
      h-8
      rounded-full
      border
      border-yellow-500
      pointer-events-none
      z-[9999]
      mix-blend-difference
      transition-transform
      duration-75
      "
      style={{
        left: position.x - 16,
        top: position.y - 16,
      }}
    />
  );
}