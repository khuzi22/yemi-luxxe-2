"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

const vehicles: any = {
  vclass: {
    name: "Mercedes-Benz V Class",
    price: 1800,
    image: "/vclass.jpg",
  },

  c180: {
    name: "Mercedes C180",
    price: 950,
    image: "/c180.jpg",
  },

  audi: {
    name: "Audi A4",
    price: 1200,
    image: "/audi.jpg",
  },
};

export default function CheckoutPage() {
  const params = useParams();

  const vehicle = vehicles[params.id];

  if (!vehicle) {
    return (
      <main className="min-h-screen bg-[#070B14] flex items-center justify-center text-white">
        Vehicle not found
      </main>
    );
  }

  const deposit = Math.round(vehicle.price * 0.6);

  return (
    <main className="min-h-screen bg-[#070B14] text-white overflow-hidden relative">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-300px] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[#d4af37]/20 blur-[180px] rounded-full" />

      {/* NAVBAR */}
      <nav className="relative z-20 flex items-center justify-between px-10 py-8">

        <Link href="/">
          <h1 className="text-[1.1rem] tracking-[0.45em] font-light">
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

      {/* MAIN */}
      <section className="relative z-20 max-w-[1450px] mx-auto px-10 py-10">

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT CARD */}
          <div
            className="
              relative
              rounded-[40px]
              border
              border-white/10
              bg-white/[0.04]
              backdrop-blur-[20px]
              overflow-hidden
              min-h-[780px]
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

            {/* VEHICLE IMAGE */}
            <div className="relative h-[560px] overflow-hidden">

              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="
                  w-full
                  h-full
                  object-cover
                  scale-[1.03]
                "
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-transparent to-transparent" />

              {/* GOLD GLOW */}
              <div className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 w-[450px] h-[220px] bg-[#d4af37]/20 blur-[100px] rounded-full" />
            </div>

            {/* INFO */}
            <div className="relative z-10 px-10 pb-10">

              <h1 className="text-[3rem] leading-none font-light tracking-[0.08em] mb-5">
                {vehicle.name}
              </h1>

              <p className="text-[#d4af37] uppercase tracking-[0.35em] text-sm">
                Starting From R{vehicle.price.toLocaleString()}
              </p>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div
            className="
              relative
              rounded-[40px]
              border
              border-white/10
              bg-white/[0.04]
              backdrop-blur-[20px]
              overflow-hidden
              p-10
            "
          >

            {/* GLASS EFFECT */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-white/[0.06]
                to-transparent
                pointer-events-none
              "
            />

            <div className="relative z-10">

              <p className="text-[#d4af37] tracking-[0.35em] uppercase text-sm mb-4">
                Booking Details
              </p>

              <h1 className="text-6xl font-light mb-12">
                Your Journey
              </h1>

              {/* BOOKING INFO */}
              <div className="space-y-8 border-b border-white/10 pb-10">

                <div>
                  <p className="text-white/50 uppercase tracking-[0.3em] text-xs mb-2">
                    Vehicle
                  </p>

                  <h2 className="text-2xl font-light">
                    {vehicle.name}
                  </h2>
                </div>

                <div>
                  <p className="text-white/50 uppercase tracking-[0.3em] text-xs mb-2">
                    Pickup
                  </p>

                  <h2 className="text-2xl font-light">
                    Sandton City
                  </h2>
                </div>

                <div>
                  <p className="text-white/50 uppercase tracking-[0.3em] text-xs mb-2">
                    Destination
                  </p>

                  <h2 className="text-2xl font-light">
                    OR Tambo Airport
                  </h2>
                </div>

                <div>
                  <p className="text-white/50 uppercase tracking-[0.3em] text-xs mb-2">
                    Date & Time
                  </p>

                  <h2 className="text-2xl font-light">
                    28 May • 18:30
                  </h2>
                </div>
              </div>

              {/* PRICING */}
              <div className="py-10 border-b border-white/10">

                <div className="flex items-center justify-between mb-6">

                  <p className="text-white/70 text-lg">
                    Total Price
                  </p>

                  <h2 className="text-3xl font-semibold">
                    R{vehicle.price.toLocaleString()}
                  </h2>
                </div>

                <div className="flex items-center justify-between mb-6">

                  <p className="text-[#d4af37] text-lg font-medium">
                    60% Deposit Required
                  </p>

                  <h2 className="text-4xl font-bold text-[#d4af37]">
                    R{deposit.toLocaleString()}
                  </h2>
                </div>

                {/* WARNING BOX */}
                <div
                  className="
                    rounded-2xl
                    border
                    border-[#d4af37]/20
                    bg-[#d4af37]/10
                    p-5
                    text-sm
                    text-white/80
                    leading-relaxed
                  "
                >
                  A 60% deposit is required to secure your chauffeur booking.
                  The remaining balance will be paid before pickup.
                </div>
              </div>

              {/* FORM */}
              <div className="space-y-5 pt-10">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="
                    w-full
                    h-16
                    rounded-2xl
                    bg-white/[0.05]
                    border
                    border-white/10
                    px-6
                    outline-none
                    text-white
                    placeholder:text-white/40
                  "
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="
                    w-full
                    h-16
                    rounded-2xl
                    bg-white/[0.05]
                    border
                    border-white/10
                    px-6
                    outline-none
                    text-white
                    placeholder:text-white/40
                  "
                />

                <textarea
                  placeholder="Special Requests"
                  className="
                    w-full
                    h-36
                    rounded-2xl
                    bg-white/[0.05]
                    border
                    border-white/10
                    p-6
                    outline-none
                    text-white
                    placeholder:text-white/40
                    resize-none
                  "
                />

                {/* BUTTON */}
                <Link href={`/payment/${params.id}`}>

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
                    CONFIRM BOOKING
                  </button>

                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}