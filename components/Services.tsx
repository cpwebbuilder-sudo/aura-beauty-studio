"use client";

import { useState } from "react";

const services = [
  {
    number: "01",
    title: "Bridal Makeup",
    image: "/images/bridal-makeup.jpg",
  },
  {
    number: "02",
    title: "Hair Styling",
    image: "/images/hair-style.jpg",
  },
  {
    number: "03",
    title: "Skin Care",
    image: "/images/skin-care.jpg",
  },
  {
    number: "04",
    title: "Nail Art",
    image: "/images/nail-art.jpg",
  },
];

export default function Services() {
  const [activeImage, setActiveImage] = useState(
    services[0].image
  );

  return (
    <section id="services" className="bg-black text-white py-40 px-8">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">

        {/* Left */}

        <div>

          <p className="text-[#D4AF37] tracking-[6px] mb-10">
            OUR SERVICES
          </p>

          {services.map((service) => (
            <div
              key={service.title}
              onMouseEnter={() =>
                setActiveImage(service.image)
              }
              className="
                border-b
                border-zinc-800
                py-8
                cursor-pointer
                group
              "
            >
              <span className="text-zinc-500 mr-6">
                {service.number}
              </span>

              <span
                className="
                  text-4xl
                  md:text-5xl
                  font-bold
                  group-hover:text-yellow-500
                  transition
                "
              >
                {service.title}
              </span>
            </div>
          ))}

        </div>

        {/* Right */}

        <div>

          <img
            src={activeImage}
            alt=""
            className="
              w-full
              h-[650px]
              object-cover
              rounded-3xl
              transition-all
              duration-500
            "
          />

        </div>

      </div>

    </section>
  );
}