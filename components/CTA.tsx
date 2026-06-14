"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="bg-black py-40 px-8">

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >

        <p className="text-yellow-500 tracking-[6px] mb-6">
          BOOK NOW
        </p>

        <h2
          className="
         text-7xl md:text-9xl
font-black
          lg:text-8xl
          leading-tight
          text-white
          "
        >
          READY FOR YOUR
          <br />
          TRANSFORMATION?
        </h2>

        <p
          className="
          text-lg
text-gray-300
          mt-8
          max-w-2xl
          mx-auto
          "
        >
          Experience luxury beauty services crafted
          for confidence, elegance and unforgettable moments.
        </p>

        <button
          className="
bg-yellow-500
text-black
px-8
py-4
mt-12
rounded-full
font-semibold
hover:scale-105
transition-all
duration-300
"
        >
          Book Appointment
        </button>

      </motion.div>

    </section>
  );
}