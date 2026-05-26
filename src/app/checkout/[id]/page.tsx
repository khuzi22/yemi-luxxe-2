"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

const vehicles = {
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
  const params = useParams<{ id: string }>();
  const id = params.id;

  const vehicle = vehicles[id as keyof typeof vehicles];

  if (!vehicle) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-3xl font-bold">Vehicle not found</h1>
      </main>
    );
  }

  const deposit = Math.round(vehicle.price * 0.6);

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="max-w-3xl mx-auto">

        <Link
          href="/vehicles"
          className="text-gray-400 hover:text-white"
        >
          ← Back
        </Link>

        <div className="mt-8 bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl">

          <img
            src={vehicle.image}
            alt={vehicle.name}
            className="w-full h-[400px] object-cover"
          />

          <div className="p-8">

            <h1 className="text-4xl font-bold mb-4">
              {vehicle.name}
            </h1>

            <div className="space-y-3 text-lg">

              <div className="flex justify-between border-b border-zinc-700 pb-2">
                <span>Daily Price</span>
                <span>R{vehicle.price}</span>
              </div>

              <div className="flex justify-between border-b border-zinc-700 pb-2">
                <span>Required Deposit</span>
                <span>R{deposit}</span>
              </div>

              <div className="flex justify-between border-b border-zinc-700 pb-2">
                <span>Status</span>
                <span className="text-green-400">
                  Available
                </span>
              </div>

            </div>

            <button className="w-full mt-8 bg-white text-black py-4 rounded-2xl text-lg font-bold hover:bg-gray-200 transition">
              Continue Booking
            </button>

          </div>
        </div>
      </div>
    </main>
  );
}