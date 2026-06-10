"use client";

import { motion } from "framer-motion";

const transformations = [
  {
    before: "/images/before1.jpg",
    after: "/images/after1.jpg",
  },
  {
    before: "/images/before2.jpg",
    after: "/images/after2.jpg",
  },
];

export default function Transformations() {
  return (
    <section id="gallery" className="bg-black text-white py-40 px-8">

      <div className="max-w-7xl mx-auto">

        <p className="text-yellow-500 tracking-[6px] mb-6">
          TRANSFORMATIONS
        </p>

        <h2 className="text-5xl md:text-7xl font-bold mb-20">
          Before & After
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          {transformations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="
                overflow-hidden
                rounded-3xl
                border
                border-zinc-800
              "
            >
              <div className="grid grid-cols-2">

                <div>
                  <img
                    src={item.before}
                    alt="before"
                    className="
                      w-full
                      h-[500px]
                      object-cover
                    "
                  />
                  <div className="bg-zinc-900 py-4 text-center">
                    Before
                  </div>
                </div>

                <div>
                  <img
                    src={item.after}
                    alt="after"
                    className="
                      w-full
                      h-[500px]
                      object-cover
                    "
                  />
                  <div className="bg-yellow-500 text-black py-4 text-center font-semibold">
                    After
                  </div>
                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}