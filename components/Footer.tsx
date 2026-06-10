export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-8 py-20">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand */}

          <div>
            <h2 className="text-white text-5xl font-bold tracking-[4px]">
              AURA
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Luxury Beauty Studio creating unforgettable beauty
              experiences through elegance, artistry and premium care.
            </p>
          </div>

          {/* Contact */}

          <div>
            <h3 className="text-white text-xl font-semibold mb-6">
              Contact
            </h3>

            <div className="space-y-3 text-gray-400">
              <p>hello@aurastudio.com</p>
              <p>+91 98765 43210</p>
              <p>Chennai, Tamil Nadu</p>
            </div>
          </div>

          {/* Social */}

          <div>
            <h3 className="text-white text-xl font-semibold mb-6">
              Follow Us
            </h3>

            <ul className="space-y-3">

              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-yellow-500 transition"
                >
                  Instagram
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-yellow-500 transition"
                >
                  Facebook
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-yellow-500 transition"
                >
                  WhatsApp
                </a>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500 text-sm">
            © 2026 Aura Beauty Studio. All Rights Reserved.
          </p>

          <p className="text-gray-600 text-sm mt-4 md:mt-0">
            Designed with Next.js & Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
}