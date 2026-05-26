"use client";

import Link from "next/link";
import Image from "next/image";

const vehicles = [
  {
    id: "vclass",
    name: "Mercedes-Benz V Class",
    price: "R1,800",
    image: "/vclass.jpg",
  },

  {
    id: "c180",
    name: "Mercedes C180",
    price: "R950",
    image: "/c180.jpg",
  },

  {
    id: "audi",
    name: "Audi A4",
    price: "R1,200",
    image: "/audi.jpg",
  },
];

export default function VehiclesPage() {
  return (
    <main className="min-h-screen bg-[#070B14] text-white overflow-hidden relative">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-300px] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[#d4af37]/20 blur-[180px] rounded-full" />

      {/* NAVBAR */}
      <nav className="relative z-20 flex items-center justify-between px-10 py-8">

        <Link href="/">
          <h1 className="text-[1.2rem] tracking-[0.45em] font-light cursor-pointer">
            YEMI LUXEE
          </h1>
        </Link>

        <div className="flex items-center gap-10 uppercase text-sm tracking-[0.25em] text-white/70">
          <Link href="/">Home</Link>
          <Link href="/vehicles">Fleet</Link>
          <Link href="/">Experience</Link>
          <Link href="/">Contact</Link>
        </div>
      </nav>

      {/* TITLE */}
      <div className="relative z-20 text-center mt-4 mb-14">

        <p className="text-[#d4af37] tracking-[0.4em] uppercase text-sm mb-5">
          Choose Your Vehicle
        </p>

        <h1 className="text-6xl font-light tracking-[0.06em]">
          Luxury Fleet
        </h1>
      </div>

      {/* VEHICLES */}
      <div className="relative z-20 flex flex-wrap justify-center gap-10 px-10 pb-24">

        {vehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            className="
              relative
              w-[360px]
              rounded-[36px]
              border
              border-white/10
              bg-white/[0.04]
              backdrop-blur-[20px]
              overflow-hidden
              group
              transition-all
              duration-500
              hover:border-[#d4af37]/40
              hover:shadow-[0_0_50px_rgba(212,175,55,0.2)]
              flex
              flex-col
            "
          >

            {/* GLASS EFFECT */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-white/[0.08]
                to-transparent
                pointer-events-none
              "
            />

            {/* IMAGE */}
            <div className="relative h-[380px] overflow-hidden">

              <Image
                src={vehicle.image}
                alt={vehicle.name}
                fill
                className="
                  object-cover
                  group-hover:scale-[1.05]
                  transition-all
                  duration-700
                "
              />

              {/* FADE */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-transparent to-transparent" />
            </div>

            {/* CONTENT */}
            <div className="relative z-10 px-8 pt-6 pb-8 flex flex-col flex-1">

              {/* FIXED HEIGHT TITLE */}
              <div className="min-h-[90px]">

                <h2 className="text-[2rem] font-light tracking-[0.08em] leading-tight">
                  {vehicle.name}
                </h2>
              </div>

              <p className="text-[#d4af37] uppercase tracking-[0.3em] text-sm mb-8">
                Starting From {vehicle.price}
              </p>

              {/* BUTTON */}
              <div className="mt-auto">

                <Link href={`/checkout/${vehicle.id}`}>
                  <button
                    className="
                      w-full
                      h-16
                      rounded-2xl
                      bg-[#d4af37]
                      text-black
                      tracking-[0.35em]
                      text-sm
                      hover:scale-[1.02]
                      transition-all
                      duration-300
                      shadow-[0_0_30px_rgba(212,175,55,0.45)]
                    "
                  >
                    SELECT VEHICLE
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}