"use client";

import { motion } from "framer-motion";

const reels = [
  "/videos/reel1.mp4",
  "/videos/reel2.mp4",
  "/videos/reel3.mp4",
  "/videos/reel4.mp4",
];

export default function ReelsWall() {
  return (
    <section id="gallery" className="bg-black text-white py-40">

      <div className="max-w-7xl mx-auto px-8">

        <p className="text-yellow-500 tracking-[6px] mb-4">
          SOCIAL SHOWCASE
        </p>

        <h2 className="text-5xl md:text-7xl font-bold mb-20">
          Latest Reels
        </h2>

      </div>

      <div className="flex gap-8 overflow-x-auto px-8 pb-4 justify-center">

        {reels.map((video, index) => (
          <motion.div
            key={index}
            whileHover={{
  scale: 1.05,
  y: -15,
}}
            className="
              min-w-[300px]
              md:min-w-[350px]
              h-[620px]
              rounded-[30px]
              overflow-hidden
              bg-zinc-900
              border
              border-zinc-800
            "
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            >
              <source src={video} type="video/mp4" />
            </video>
          </motion.div>
        ))}

      </div>

    </section>
  );
}