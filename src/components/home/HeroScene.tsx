"use client";

import { useState } from "react";
import Link from "next/link";

const vehicles = [
  {
    name: "MERCEDES-BENZ V CLASS",
    embed:
      "https://sketchfab.com/models/631d3b92b755434a825af88284ef2afe/embed?autostart=1&ui_infos=0&ui_controls=0&ui_stop=0&ui_watermark=0&ui_watermark_link=0&ui_hint=0&transparent=1&preload=1",
  },
  {
    name: "AUDI A4",
    embed:
      "https://sketchfab.com/models/4305fdbb6257412bacb7d85caa131a23/embed?autostart=1&ui_infos=0&ui_controls=0&ui_stop=0&ui_watermark=0&ui_watermark_link=0&ui_hint=0&transparent=1&preload=1",
  },
  {
    name: "MERCEDES C180",
    embed:
      "https://sketchfab.com/models/4b61657a204c44dcbce3d32ab2ce2a7c/embed?autostart=1&ui_infos=0&ui_controls=0&ui_stop=0&ui_watermark=0&ui_watermark_link=0&ui_hint=0&transparent=1&preload=1",
  },
];

export default function HeroScene() {
  const [currentVehicle, setCurrentVehicle] = useState(0);
  const [loading, setLoading] = useState(false);

  const nextVehicle = () => {
    setLoading(true);

    setCurrentVehicle((prev) =>
      prev === vehicles.length - 1 ? 0 : prev + 1
    );
  };

  const prevVehicle = () => {
    setLoading(true);

    setCurrentVehicle((prev) =>
      prev === 0 ? vehicles.length - 1 : prev - 1
    );
  };

  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#07070b]
        text-white
      "
    >
      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.18),_transparent_60%)]
        "
      />

      {/* NAVBAR */}
      <nav
        className="
          absolute
          top-0
          left-0
          w-full
          z-[100]
          flex
          items-center
          justify-between
          px-10
          py-8
        "
      >
        <h1
          className="
            text-2xl
            tracking-[0.35em]
            font-semibold
          "
        >
          YEMI LUXEE
        </h1>

        <div
          className="
            flex
            items-center
            gap-10
            text-sm
            tracking-[0.2em]
          "
        >
          <a href="#">Home</a>
          <a href="#">Fleet</a>
          <a href="#">Experience</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div
        className="
          relative
          z-10
          flex
          flex-col
          items-center
          justify-center
          min-h-screen
          px-6
          pt-32
        "
      >
        {/* WHERE TO BUTTON */}
        <Link
          href="/booking"
          className="relative z-[100]"
        >
          <button
            className="
              mb-6
              border
              border-[#d4af37]
              text-[#d4af37]
              px-10
              py-4
              rounded-full
              tracking-[0.3em]
              text-sm
              transition-all
              duration-500
              hover:bg-[#d4af37]
              hover:text-black
              cursor-pointer
            "
          >
            WHERE TO?
          </button>
        </Link>

        {/* VEHICLE SHOWCASE */}
        <div
          className="
            relative
            flex
            items-center
            justify-center
            w-full
            max-w-7xl
            h-[560px]
          "
        >
          {/* LARGE CIRCLE */}
          <div
            className="
              absolute
              w-[850px]
              h-[850px]
              rounded-full
              border
              border-white/10
            "
          />

          {/* LEFT BUTTON */}
          <button
            onClick={prevVehicle}
            className="
              absolute
              left-0
              z-30
              w-16
              h-16
              rounded-full
              border
              border-[#d4af37]
              text-[#d4af37]
              text-3xl
              flex
              items-center
              justify-center
              hover:bg-[#d4af37]
              hover:text-black
              transition-all
              duration-300
            "
          >
            ‹
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={nextVehicle}
            className="
              absolute
              right-0
              z-30
              w-16
              h-16
              rounded-full
              bg-[#d4af37]
              text-black
              text-3xl
              flex
              items-center
              justify-center
              hover:scale-110
              transition-all
              duration-300
            "
          >
            ›
          </button>

          {/* MODEL AREA */}
          <div
            className="
              relative
              w-full
              h-full
              flex
              items-center
              justify-center
            "
          >
            {/* FULL LOADER */}
            {loading && (
              <div
                className="
                  absolute
                  inset-0
                  z-50
                  flex
                  items-center
                  justify-center
                  bg-[#07070b]
                  pointer-events-none
                "
              >
                {/* GLOW */}
                <div
                  className="
                    absolute
                    w-[500px]
                    h-[500px]
                    rounded-full
                    bg-[#d4af37]/10
                    blur-3xl
                  "
                />

                {/* OUTER RING */}
                <div
                  className="
                    absolute
                    w-56
                    h-56
                    rounded-full
                    border
                    border-[#d4af37]/20
                  "
                />

                {/* SPINNING RING */}
                <div
                  className="
                    absolute
                    w-56
                    h-56
                    rounded-full
                    border-t-2
                    border-[#d4af37]
                    animate-spin
                  "
                />

                {/* LOGO */}
                <div
                  className="
                    relative
                    z-10
                    flex
                    items-center
                    justify-center
                    w-32
                    h-32
                    rounded-full
                    bg-black/40
                    backdrop-blur-xl
                    border
                    border-[#d4af37]/20
                  "
                >
                  <img
                    src="/YL.png"
                    alt="Yemi Luxee"
                    className="
                      w-16
                      object-contain
                    "
                  />
                </div>
              </div>
            )}

            {/* 3D MODEL */}
            <iframe
              key={vehicles[currentVehicle].embed}
              title={vehicles[currentVehicle].name}
              frameBorder="0"
              allowFullScreen
              allow="autoplay; fullscreen; xr-spatial-tracking"
              src={vehicles[currentVehicle].embed}
              className="
                relative
                z-10
                w-full
                h-full
                bg-transparent
              "
              onLoad={() => {
                setTimeout(() => {
                  setLoading(false);
                }, 2200);
              }}
            />
          </div>
        </div>

        {/* VEHICLE NAME */}
        <h2
          className="
            mt-6
            text-5xl
            tracking-[0.25em]
            text-[#d4af37]
            text-center
          "
        >
          {vehicles[currentVehicle].name}
        </h2>

        {/* SUBTEXT */}
        <p
          className="
            mt-4
            tracking-[0.4em]
            text-sm
            text-white/70
            text-center
          "
        >
          LUXURY CHAUFFEUR EXPERIENCE
        </p>
      </div>
    </section>
  );
}