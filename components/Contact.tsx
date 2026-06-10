"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white py-40 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-yellow-500 tracking-[6px] mb-6"
        >
          CONTACT US
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="
          text-5xl
          md:text-7xl
          font-bold
          mb-16
          "
        >
          Let's Create Your
          <br />
          Perfect Look
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-20">

          <div>
            <p className="text-gray-400 mb-6">
              Email
            </p>

            <h3 className="text-2xl mb-10">
              hello@aurastudio.com
            </h3>

            <p className="text-gray-400 mb-6">
              Phone
            </p>

            <h3 className="text-2xl mb-10">
              +91 98765 43210
            </h3>

            <p className="text-gray-400 mb-6">
              Location
            </p>

            <h3 className="text-2xl">
              Chennai, Tamil Nadu
            </h3>
          </div>

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="
              w-full
              bg-zinc-900
              p-5
              rounded-xl
              outline-none
              "
            />

            <input
              type="email"
              placeholder="Email"
              className="
w-full
bg-zinc-900
border
border-zinc-800
focus:border-[#D4AF37]
outline-none
p-5
rounded-xl
"
            />

            <textarea
              placeholder="Your Message"
              rows={6}
              className="
              w-full
              bg-zinc-900
              p-5
              rounded-xl
              outline-none
              "
            />

            <button
              className="
              bg-yellow-500
              text-black
              px-8
              py-4
              rounded-full
              font-semibold
              "
            >
              Send Message
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}