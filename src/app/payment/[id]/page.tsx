"use client";

import { useParams } from "next/navigation";

const vehicles: any = {
  vclass: {
    name: "Mercedes-Benz V Class",
    price: 1800,
  },

  c180: {
    name: "Mercedes C180",
    price: 950,
  },

  audi: {
    name: "Audi A4",
    price: 1200,
  },
};

export default function PaymentPage() {

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
    <main className="min-h-screen bg-[#050816] text-white flex items-center justify-center px-6">

      <div className="w-full max-w-2xl rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl p-10">

        <p className="text-[#d4af37] tracking-[0.4em] text-sm uppercase">
          Secure Your Booking
        </p>

        <h1 className="text-5xl mt-4 font-light">
          Payment
        </h1>

        <div className="mt-12 space-y-6">

          <div className="flex items-center justify-between">

            <p className="text-white/60">
              Vehicle
            </p>

            <p className="text-xl">
              {vehicle.name}
            </p>

          </div>

          <div className="flex items-center justify-between">

            <p className="text-white/60">
              Deposit Required
            </p>

            <p className="text-4xl font-bold text-[#d4af37]">
              R{deposit.toLocaleString()}
            </p>

          </div>

          <div className="border-t border-white/10 pt-8 space-y-5">

            <input
              type="text"
              placeholder="Cardholder Name"
              className="w-full h-16 rounded-2xl bg-white/5 border border-white/10 px-6 outline-none"
            />

            <input
              type="text"
              placeholder="Card Number"
              className="w-full h-16 rounded-2xl bg-white/5 border border-white/10 px-6 outline-none"
            />

            <div className="grid grid-cols-2 gap-5">

              <input
                type="text"
                placeholder="MM/YY"
                className="w-full h-16 rounded-2xl bg-white/5 border border-white/10 px-6 outline-none"
              />

              <input
                type="text"
                placeholder="CVV"
                className="w-full h-16 rounded-2xl bg-white/5 border border-white/10 px-6 outline-none"
              />

            </div>

            <button className="w-full h-16 rounded-2xl bg-[#d4af37] text-black tracking-[0.35em] text-sm hover:scale-[1.01] transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.45)]">

              COMPLETE PAYMENT

            </button>

          </div>

        </div>

      </div>

    </main>
  );
}