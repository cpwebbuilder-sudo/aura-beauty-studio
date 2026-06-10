"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="
      fixed
      inset-0
      bg-black
      z-[9999]
      flex
      items-center
      justify-center
      "
    >
      <motion.h1
  initial={{
    opacity: 0,
    scale: 0.8,
    letterSpacing: "0px",
  }}
  animate={{
    opacity: 1,
    scale: 1,
    letterSpacing: "12px",
  }}
  transition={{
    duration: 1.2,
  }}
>
  AURA
</motion.h1>
    </motion.div>
  );
}