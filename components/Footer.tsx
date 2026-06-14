import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black">
      <div className="max-w-7xl mx-auto px-8 py-20">

        <div className="grid md:grid-cols-3 gap-16">

          {/* Brand */}
          <div>
            <h2 className="text-5xl font-bold text-white">
              AURA
            </h2>

            <p className="text-zinc-400 mt-5 leading-8">
              Luxury Beauty Studio creating unforgettable
              beauty experiences through elegance,
              artistry and premium care.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-xl mb-6">
              Contact
            </h3>

            <div className="space-y-5 text-zinc-400">

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-yellow-500" />
                hello@aurastudio.com
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-yellow-500" />
                +91 98765 43210
              </div>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-yellow-500" />
                Chennai, Tamil Nadu
              </div>

            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold text-xl mb-6">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <a
                href="#"
                className="
                w-12 h-12
                rounded-full
                bg-zinc-900
                flex items-center justify-center
                text-white
                hover:bg-yellow-500
                hover:text-black
                transition
                "
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="
                w-12 h-12
                rounded-full
                bg-zinc-900
                flex items-center justify-center
                text-white
                hover:bg-yellow-500
                hover:text-black
                transition
                "
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="
                w-12 h-12
                rounded-full
                bg-zinc-900
                flex items-center justify-center
                text-white
                hover:bg-yellow-500
                hover:text-black
                transition
                "
              >
                <FaWhatsapp />
              </a>

            </div>
          </div>

        </div>

        <div className="border-t border-zinc-800 mt-16 pt-8 flex justify-between text-zinc-500 text-sm">

          <p>
            © 2026 Aura Beauty Studio
          </p>

        

        </div>
      </div>
    </footer>
  );
}