"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function About() {
  return (
    <section id="about" className="bg-black text-[#D4AF37] py-32 px-8 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
         className="
text-5xl
md:text-7xl
lg:text-8xl
font-bold
leading-[0.9]
 "
        >
          BEAUTY
          <br />
          IS AN
          <br />
          EXPERIENCE
        </motion.h2>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="
            mt-10
            text-gray-400
            text-lg
            md:text-xl
            max-w-2xl
          "
        >
          We craft unforgettable beauty moments through
          luxury styling, premium care and artistic excellence.
        </motion.p>

        {/* Videos */}

        <div className="grid md:grid-cols-2 gap-8 mt-20">

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="
                w-full
                h-[600px]
                object-cover
                rounded-3xl
              "
            >
              <source
                src="/videos/about1.mp4"
                type="video/mp4"
              />
            </video>
          </motion.div>

          <motion.div
  initial={{ opacity: 0, x: 100 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
>
  <video
    ref={(video) => {
      if (video) video.playbackRate = 1.5;
    }}
    autoPlay
    muted
    loop
    playsInline
    className="
      w-full
      h-[600px]
      object-cover
      rounded-3xl
    "
  >
    <source
      src="/videos/about2.mp4"
      type="video/mp4"
    />
  </video>
</motion.div>

        </div>

      </div>

    </section>
  );
}