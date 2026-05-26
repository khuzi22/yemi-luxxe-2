"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LoadScript,
  Autocomplete,
} from "@react-google-maps/api";

const libraries: ("places")[] = ["places"];

export default function BookingPage() {
  const [tripType, setTripType] = useState("oneway");

  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [returnLocation, setReturnLocation] = useState("");

  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");

  const [returnDate, setReturnDate] = useState("");
  const [returnTime, setReturnTime] = useState("");

  const [hours, setHours] = useState("");

  return (
    <LoadScript
      googleMapsApiKey={
        process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""
      }
      libraries={libraries}
    >
      <main className="min-h-screen bg-[#070b17] text-white overflow-hidden relative">

        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.18),transparent_55%)]" />

        {/* NAVBAR */}
        <nav className="w-full flex items-center justify-between px-8 md:px-16 py-8 relative z-20">
          <Link
            href="/"
            className="text-white tracking-[0.45em] text-sm font-semibold"
          >
            YEMI LUXEE
          </Link>

          <div className="flex items-center gap-8 text-xs tracking-[0.25em] uppercase text-white/80">
            <Link href="/">Home</Link>
            <Link href="/vehicles">Fleet</Link>
            <Link href="/">Experience</Link>
            <Link href="/">Contact</Link>
          </div>
        </nav>

        {/* CONTENT */}
        <section className="w-full flex items-center justify-center px-6 pb-24 relative z-10">

          <div className="w-full max-w-4xl">

            {/* TITLE */}
            <div className="text-center mb-14">
              <h1 className="text-5xl md:text-7xl font-light tracking-[0.12em] text-white">
                WHERE ARE YOU GOING?
              </h1>
            </div>

            {/* BOOKING CARD */}
            <div className="backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-[40px] p-8 md:p-10 shadow-[0_0_80px_rgba(212,175,55,0.08)]">

              {/* TRIP TYPE BUTTONS */}
              <div className="flex gap-4 mb-10 flex-wrap">

                <button
                  onClick={() => setTripType("oneway")}
                  className={`px-6 h-12 rounded-full text-xs tracking-[0.25em] uppercase transition-all duration-300 ${
                    tripType === "oneway"
                      ? "bg-[#d4af37] text-black shadow-[0_0_25px_rgba(212,175,55,0.5)]"
                      : "border border-white/20 text-white/70 hover:border-[#d4af37]"
                  }`}
                >
                  One Way
                </button>

                <button
                  onClick={() => setTripType("return")}
                  className={`px-6 h-12 rounded-full text-xs tracking-[0.25em] uppercase transition-all duration-300 ${
                    tripType === "return"
                      ? "bg-[#d4af37] text-black shadow-[0_0_25px_rgba(212,175,55,0.5)]"
                      : "border border-white/20 text-white/70 hover:border-[#d4af37]"
                  }`}
                >
                  Return
                </button>

                <button
                  onClick={() => setTripType("hourly")}
                  className={`px-6 h-12 rounded-full text-xs tracking-[0.25em] uppercase transition-all duration-300 ${
                    tripType === "hourly"
                      ? "bg-[#d4af37] text-black shadow-[0_0_25px_rgba(212,175,55,0.5)]"
                      : "border border-white/20 text-white/70 hover:border-[#d4af37]"
                  }`}
                >
                  Hourly
                </button>
              </div>

              {/* FORM */}
              <div className="grid md:grid-cols-2 gap-6">

                {/* PICKUP */}
                <div>
                  <label className="block text-[11px] tracking-[0.25em] uppercase text-white/60 mb-3">
                    Pickup Location
                  </label>

                  <Autocomplete>
                    <input
                      type="text"
                      placeholder="Sandton City"
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      className="w-full h-16 px-5 rounded-2xl bg-white/[0.03] border border-white/10 outline-none focus:border-[#d4af37] transition-all"
                    />
                  </Autocomplete>
                </div>

                {/* DESTINATION */}
                {tripType !== "hourly" && (
                  <div>
                    <label className="block text-[11px] tracking-[0.25em] uppercase text-white/60 mb-3">
                      Destination
                    </label>

                    <Autocomplete>
                      <input
                        type="text"
                        placeholder="OR Tambo Airport"
                        value={destination}
                        onChange={(e) =>
                          setDestination(e.target.value)
                        }
                        className="w-full h-16 px-5 rounded-2xl bg-white/[0.03] border border-white/10 outline-none focus:border-[#d4af37] transition-all"
                      />
                    </Autocomplete>
                  </div>
                )}

                {/* PICKUP DATE */}
                <div>
                  <label className="block text-[11px] tracking-[0.25em] uppercase text-white/60 mb-3">
                    Pickup Date
                  </label>

                  <input
                    type="date"
                    value={pickupDate}
                    onChange={(e) =>
                      setPickupDate(e.target.value)
                    }
                    className="w-full h-16 px-5 rounded-2xl bg-white/[0.03] border border-white/10 outline-none focus:border-[#d4af37] transition-all"
                  />
                </div>

                {/* PICKUP TIME */}
                <div>
                  <label className="block text-[11px] tracking-[0.25em] uppercase text-white/60 mb-3">
                    Pickup Time
                  </label>

                  <input
                    type="time"
                    value={pickupTime}
                    onChange={(e) =>
                      setPickupTime(e.target.value)
                    }
                    className="w-full h-16 px-5 rounded-2xl bg-white/[0.03] border border-white/10 outline-none focus:border-[#d4af37] transition-all"
                  />
                </div>

                {/* RETURN SECTION */}
                {tripType === "return" && (
                  <>
                    <div>
                      <label className="block text-[11px] tracking-[0.25em] uppercase text-white/60 mb-3">
                        Return Pickup
                      </label>

                      <Autocomplete>
                        <input
                          type="text"
                          placeholder="Return Location"
                          value={returnLocation}
                          onChange={(e) =>
                            setReturnLocation(
                              e.target.value
                            )
                          }
                          className="w-full h-16 px-5 rounded-2xl bg-white/[0.03] border border-white/10 outline-none focus:border-[#d4af37] transition-all"
                        />
                      </Autocomplete>
                    </div>

                    <div>
                      <label className="block text-[11px] tracking-[0.25em] uppercase text-white/60 mb-3">
                        Return Date
                      </label>

                      <input
                        type="date"
                        value={returnDate}
                        onChange={(e) =>
                          setReturnDate(e.target.value)
                        }
                        className="w-full h-16 px-5 rounded-2xl bg-white/[0.03] border border-white/10 outline-none focus:border-[#d4af37] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] tracking-[0.25em] uppercase text-white/60 mb-3">
                        Return Time
                      </label>

                      <input
                        type="time"
                        value={returnTime}
                        onChange={(e) =>
                          setReturnTime(e.target.value)
                        }
                        className="w-full h-16 px-5 rounded-2xl bg-white/[0.03] border border-white/10 outline-none focus:border-[#d4af37] transition-all"
                      />
                    </div>
                  </>
                )}

                {/* HOURLY */}
                {tripType === "hourly" && (
                  <div>
                    <label className="block text-[11px] tracking-[0.25em] uppercase text-white/60 mb-3">
                      How Many Hours
                    </label>

                    <input
                      type="number"
                      placeholder="4"
                      value={hours}
                      onChange={(e) => setHours(e.target.value)}
                      className="w-full h-16 px-5 rounded-2xl bg-white/[0.03] border border-white/10 outline-none focus:border-[#d4af37] transition-all"
                    />
                  </div>
                )}
              </div>

              {/* BUTTON */}
              <Link href="/vehicles">
                <button className="w-full h-16 rounded-2xl bg-[#d4af37] text-black tracking-[0.35em] text-sm mt-10 hover:scale-[1.01] transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.45)]">
                  CHOOSE VEHICLE
                </button>
              </Link>

            </div>
          </div>
        </section>
      </main>
    </LoadScript>
  );
}