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
  const id = params.id as string;

  const vehicle = vehicles[id];

  if (!vehicle) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        Vehicle not found
      </main>
    );
  }

  const deposit = Math.round(vehicle.price * 0.6);

  return (
    <main className="min-h-screen bg-[#050816] text-white px-10 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT */}
        <div className="rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl p-8">

          <div className="relative h-[420px] flex items-center justify-center overflow-hidden rounded-[25px] bg-white/5">

            <img
              src={vehicle.image}
              alt={vehicle.name}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="mt-8">
            <h1 className="text-4xl tracking-[0.2em] text-[#d4af37] uppercase">
              {vehicle.name}
            </h1>

            <p className="mt-3 text-white/70 tracking-[0.3em] uppercase text-sm">
              Starting From R{vehicle.price.toLocaleString()}
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl p-8">

          <h1 className="text-5xl font-light mb-10">
            Your Journey
          </h1>

          <div className="space-y-6">

            <div>
              <p className="text-white/40 text-sm tracking-[0.3em] uppercase">
                Vehicle
              </p>

              <h2 className="text-2xl mt-2">
                {vehicle.name}
              </h2>
            </div>

            <div>
              <p className="text-white/40 text-sm tracking-[0.3em] uppercase">
                Pickup
              </p>

              <h2 className="text-xl mt-2">
                Sandton City
              </h2>
            </div>

            <div>
              <p className="text-white/40 text-sm tracking-[0.3em] uppercase">
                Destination
              </p>

              <h2 className="text-xl mt-2">
                OR Tambo Airport
              </h2>
            </div>

            <div>
              <p className="text-white/40 text-sm tracking-[0.3em] uppercase">
                Date & Time
              </p>

              <h2 className="text-xl mt-2">
                28 May • 18:30
              </h2>
            </div>

            {/* PRICE SECTION */}

            <div className="border-t border-white/10 pt-6 space-y-4">

              <div className="flex items-center justify-between">
                <p className="text-white/60">
                  Total Trip Cost
                </p>

                <p className="text-2xl font-semibold">
                  R{vehicle.price.toLocaleString()}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-[#d4af37]">
                  60% Deposit Required
                </p>

                <p className="text-3xl font-bold text-[#d4af37]">
                  R{deposit.toLocaleString()}
                </p>
              </div>

              <p className="text-sm text-white/40 leading-relaxed">
                To secure your chauffeur booking, a 60% deposit is required upfront.
                The remaining balance can be paid before pickup.
              </p>

            </div>

            {/* INPUTS */}

            <input
              type="text"
              placeholder="Full Name"
              className="w-full h-16 rounded-2xl bg-white/5 border border-white/10 px-6 outline-none"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full h-16 rounded-2xl bg-white/5 border border-white/10 px-6 outline-none"
            />

            <textarea
              placeholder="Special Requests"
              className="w-full h-40 rounded-2xl bg-white/5 border border-white/10 px-6 py-5 outline-none resize-none"
            />

            {/* BUTTON */}

            <Link href={`/payment/${id}`}>
              <button className="w-full h-16 rounded-2xl bg-[#d4af37] text-black tracking-[0.35em] text-sm hover:scale-[1.01] transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.45)]">
                PAY DEPOSIT
              </button>
            </Link>

          </div>
        </div>
      </div>
    </main>
  );
}