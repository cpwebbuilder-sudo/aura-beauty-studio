"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="bg-black py-40 px-8">

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >

        <p className="text-yellow-500 tracking-[6px] mb-6">
          BOOK NOW
        </p>

        <h2
          className="
          text-5xl
          md:text-7xl
          lg:text-8xl
          font-bold
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
          mt-12
          px-10
          py-5
          bg-yellow-500
          text-black
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