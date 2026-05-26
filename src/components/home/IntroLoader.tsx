"use client";

import { motion, AnimatePresence } from "framer-motion";

interface IntroLoaderProps {
  loading: boolean;
}

export default function IntroLoader({
  loading,
}: IntroLoaderProps) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 1.2,
            },
          }}
          className="
            fixed
            inset-0
            z-[999]
            bg-[#050816]
            flex
            items-center
            justify-center
            overflow-hidden
          "
        >

          {/* Gold Glow */}
          <div
            className="
              absolute
              w-[500px]
              h-[500px]
              rounded-full
              bg-[#d4af37]/20
              blur-[120px]
            "
          />

          {/* Logo Text */}
          <motion.h1
            initial={{
              opacity: 0,
              letterSpacing: "0.6em",
              y: 40,
            }}
            animate={{
              opacity: 1,
              letterSpacing: "0.3em",
              y: 0,
            }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
            }}
            className="
              relative
              text-white
              text-4xl
              md:text-6xl
              font-light
              tracking-[0.3em]
            "
          >
            YEMI LUXEE
          </motion.h1>

        </motion.div>
      )}
    </AnimatePresence>
  );
}