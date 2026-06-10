"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "500+",
    label: "Happy Clients",
  },
  {
    number: "120+",
    label: "Bridal Makeups",
  },
  {
    number: "5+",
    label: "Years Experience",
  },
  {
    number: "98%",
    label: "Client Satisfaction",
  },
];

export default function Stats() {
  return (
    <section className="bg-black text-white py-32 px-8">
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-4 gap-10">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
              }}
              className="text-center"
            >
              <h2
                className="
                text-5xl
                md:text-7xl
                font-bold
                text-yellow-500
                "
              >
                {item.number}
              </h2>

              <p
                className="
                mt-4
                text-gray-400
                uppercase
                tracking-[3px]
                "
              >
                {item.label}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}