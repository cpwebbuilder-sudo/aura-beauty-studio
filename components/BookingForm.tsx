"use client";

import { useState } from "react";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");

  const handleBooking = () => {
    const message = `
Name: ${name}
Phone: ${phone}
Service: ${service}
    `;

    const whatsappUrl = `https://wa.me/919999999999?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      className="
      bg-black
      text-white
      py-32
      px-8
      "
    >
      <div className="max-w-3xl mx-auto">

        <h2
          className="
          text-5xl
          md:text-7xl
          font-bold
          mb-12
          text-center
          "
        >
          Book Your Appointment
        </h2>

        <div className="space-y-6">

          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          className="
w-full
bg-white/5
backdrop-blur-xl
border
border-white/10
rounded-2xl
px-6
py-4
text-white
"
          />

          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value)
            }
           className="
w-full
bg-white/5
backdrop-blur-xl
border
border-white/10
rounded-2xl
px-6
py-4
text-white
"
          />

          <select
            value={service}
            onChange={(e) =>
              setService(e.target.value)
            }
            className="
            w-full
            bg-zinc-900
            p-5
            rounded-xl
            "
          >
            <option value="">
              Select Service
            </option>

            <option>
              Bridal Makeup
            </option>

            <option>
              Hair Styling
            </option>

            <option>
              Skin Care
            </option>

            <option>
              Nail Art
            </option>
          </select>

          <button
            onClick={handleBooking}
           className="
border
border-[#D4AF37]
px-8
py-4
hover:bg-[#D4AF37]
hover:text-black
transition-all
duration-500
"
          >
            Book on WhatsApp
          </button>

        </div>

      </div>
    </section>
  );
}