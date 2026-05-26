"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="
        fixed
        top-0
        left-0
        w-full
        z-[9999]
        flex
        items-center
        justify-between
        px-10
        py-8
        pointer-events-auto
      "
    >
      {/* LOGO */}
      <Link
        href="/"
        className="
          text-2xl
          tracking-[0.35em]
          font-semibold
          text-white
          cursor-pointer
          hover:text-[#d4af37]
          transition-all
          duration-300
        "
      >
        YEMI LUXEE
      </Link>

      {/* LINKS */}
      <div
        className="
          flex
          items-center
          gap-10
          text-sm
          tracking-[0.2em]
          text-white
        "
      >
        <Link
          href="/"
          className="
            hover:text-[#d4af37]
            transition-all
            duration-300
          "
        >
          Home
        </Link>

        <Link
          href="/vehicles"
          className="
            hover:text-[#d4af37]
            transition-all
            duration-300
            cursor-pointer
          "
        >
          Fleet
        </Link>

        <Link
          href="/experience"
          className="
            hover:text-[#d4af37]
            transition-all
            duration-300
          "
        >
          Experience
        </Link>

        <Link
          href="/contact"
          className="
            hover:text-[#d4af37]
            transition-all
            duration-300
          "
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}