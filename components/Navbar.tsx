"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "SERVICES", href: "#services" },
  { label: "GALLERY", href: "#gallery" },
  { label: "CONTACT", href: "#contact" },
];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Navbar */}

      <nav
        className={`
          fixed
          top-0
          left-0
          w-full
          z-50
          transition-all
          duration-500
          hover:text-[#D4AF37]
          ${
            scrolled
              ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-4"
              : "bg-transparent py-6"
          }
        `}
      >
        <div
          className="
            max-w-7xl
            mx-auto
            px-8
            flex
            justify-between
            items-center
          "
        >
          <a
            href="#home"
            className="
              text-white
              text-3xl
              font-bold
              tracking-[4px]
              hover:text-[#D4AF37]
            "
          >
            AURA
          </a>

          <button
            onClick={() => setMenuOpen(true)}
            className="
              text-white
              uppercase
              tracking-[3px]
              hover:text-yellow-500
              transition
            "
          >
            Menu
          </button>
        </div>
      </nav>

      {/* Overlay Menu */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              bg-black
              z-[999]
              flex
              items-center
              justify-center
            "
          >
            {/* Close */}

            <button
              onClick={() => setMenuOpen(false)}
              className="
                absolute
                top-10
                right-10
                text-white
                text-4xl
              "
            >
              ✕
            </button>

            {/* Logo */}

            <div className="absolute top-10 left-10">
              <h1
                className="
                  text-white
                  text-4xl
                  font-bold
                  tracking-[4px]
                "
              >
                AURA
              </h1>
            </div>

            {/* Menu Links */}

            <div
              className="
                flex
                flex-col
                items-center
                gap-8
              "
            >
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="
                    text-white
                    text-6xl
                    md:text-8xl
                    font-bold
                    hover:text-yellow-500
                    transition-all
                    duration-300
                    flex
                    items-center
                    gap-4
                  "
                >
                  <span className="text-yellow-500 text-xl">
                    0{index + 1}
                  </span>

                  {item.label}
                </motion.a>
              ))}
            </div>

            {/* Contact */}

            <div className="absolute bottom-10 left-10">
              <p className="text-gray-400">
                hello@aurastudio.com
              </p>

              <p className="text-gray-400 mt-2">
                +91 98765 43210
              </p>
            </div>

            {/* Social */}

            <div className="absolute bottom-10 right-10 flex gap-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-gray-400
                  hover:text-yellow-500
                  transition
                "
              >
                Instagram
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-gray-400
                  hover:text-yellow-500
                  transition
                "
              >
                Facebook
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}