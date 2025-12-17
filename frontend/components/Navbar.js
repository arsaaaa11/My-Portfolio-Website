import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-gray-800">
      <nav className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl md:text-2xl font-extrabold tracking-tight text-sky-400"
        >
          Md Arsalan Mirza
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 border rounded-xl border-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          ☰
        </button>

        {/* Nav Links */}
        <ul
          className={`md:flex gap-6 font-medium transition-all duration-300 ${
            open ? "block mt-4 md:mt-0" : "hidden md:flex"
          }`}
        >
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative hover:text-sky-400 transition-colors group"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-sky-400 transition-all group-hover:w-full"></span>
              </a>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              className="px-4 py-2 bg-sky-500 rounded-lg text-white hover:bg-sky-400 transition-all"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
