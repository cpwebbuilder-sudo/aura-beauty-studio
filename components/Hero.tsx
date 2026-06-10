"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen overflow-hidden">

  {/* Video */}
  <video
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/videos/hero-video.mp4" type="video/mp4" />
  </video>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50 z-10" />

  {/* Content */}
  <div className="relative z-20 h-full flex flex-col justify-center items-center text-center">

    <motion.h1
  initial={{
    opacity: 0,
    y: 100,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 1.2,
  }}
  className="
  text-white
  text-7xl
  md:text-9xl
  font-bold
  "
>
  AURA
</motion.h1>
<motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.6 }}
  className="
  text-yellow-500
  tracking-[8px]
  mt-4
  "
>
  LUXURY BEAUTY STUDIO
</motion.p>

   

    <p className="text-white mt-6 text-lg">
      Beauty Beyond Ordinary
    </p>

    <button className="mt-8 px-8 py-4 border border-yellow-500 text-white">
      Book Appointment <span className="group-hover:translate-x-2 transition">
 →
</span>
    </button>

  </div>
<div
  className="
  absolute
  bottom-10
  left-1/2
  -translate-x-1/2
  text-white
  text-center
  "
>
  <div className="animate-bounce">
    ↓
  </div>

  <p className="tracking-[6px] text-xs">
    SCROLL
  </p>
</div>
</section>
  );
}