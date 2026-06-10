"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Priya",
    text: "Amazing bridal makeup. I felt confident and beautiful.",
  },
  {
    name: "Divya",
    text: "Professional service and luxury experience.",
  },
  {
    name: "Ananya",
    text: "Best beauty studio I've visited so far.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-black text-white py-32 px-8">
      <div className="max-w-7xl mx-auto">

        <p className="text-[#D4AF37] tracking-[6px] mb-6">
          TESTIMONIALS
        </p>

        <h2 className="text-5xl md:text-7xl font-bold mb-20">
          What Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8 min-h-[100px] px-2">

          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="
                bg-zinc-900
border
border-zinc-800
                p-8
                rounded-3xl
              "
            >
              <p className="text-gray-300 mb-6">
                "{item.text}"
              </p>

              <h3 className="font-semibold">
                {item.name}
              </h3>
              <h3 className="text-[#D4AF37] text-3xl md:text-4xl font-bold mb-10">★★★★★</h3>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}