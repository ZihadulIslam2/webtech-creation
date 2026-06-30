import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#020d0e] border-t border-white/10 relative">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00df89]/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Brand */}
          <div>
            <h3 className="text-white font-black text-2xl mb-4">Crafix</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Subscription based website design and maintenance packages providing everything you need to launch and scale.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-[#00df89] transition-colors hover:scale-110"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#00df89] transition-colors hover:scale-110"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.117.6c-.588.227-.975.498-1.325.848-.35.35-.621.737-.848 1.325-.267.788-.468 1.658-.528 2.936C1.032 8.333 1.016 8.74 1.016 12s.015 3.667.072 4.947c.06 1.277.261 2.148.528 2.936.227.588.498.975.848 1.325.35.35.737.621 1.325.848.788.268 1.658.468 2.936.528 1.27.057 1.677.072 4.947.072s3.667-.015 4.947-.072c1.277-.06 2.148-.26 2.936-.528.588-.227.975-.498 1.325-.848.35-.35.621-.737.848-1.325.268-.788.468-1.658.528-2.936.057-1.27.072-1.677.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.26-2.148-.528-2.936-.227-.588-.498-.975-.848-1.325-.35-.35-.737-.621-1.325-.848-.788-.268-1.658-.468-2.936-.528C15.667.048 15.26.032 12 .032z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#00df89] transition-colors hover:scale-110"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#services"
                  className="text-gray-400 hover:text-[#00df89] transition-colors text-sm"
                >
                  Startup Website
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-gray-400 hover:text-[#00df89] transition-colors text-sm"
                >
                  Business Website
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-gray-400 hover:text-[#00df89] transition-colors text-sm"
                >
                  E-Commerce Website
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#about"
                  className="text-gray-400 hover:text-[#00df89] transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#portfolios"
                  className="text-gray-400 hover:text-[#00df89] transition-colors text-sm"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="text-gray-400 hover:text-[#00df89] transition-colors text-sm"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@crafix.tech"
                  className="text-gray-400 hover:text-[#00df89] transition-colors text-sm font-semibold"
                >
                  hello@crafix.tech
                </a>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-400 hover:text-[#00df89] transition-colors text-sm"
                >
                  Start Consultation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-white/10 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            &copy; 2026 Crafix. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#legal"
              className="text-gray-500 hover:text-gray-400 text-sm transition-colors"
            >
              Legal Mentions
            </Link>
            <Link
              href="#privacy"
              className="text-gray-500 hover:text-gray-400 text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#cookies"
              className="text-gray-500 hover:text-gray-400 text-sm transition-colors"
            >
              Cookies Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
