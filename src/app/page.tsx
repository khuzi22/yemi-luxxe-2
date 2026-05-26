"use client";

import { useEffect, useState } from "react";

import HeroScene from "../components/home/HeroScene";
import IntroLoader from "../components/home/IntroLoader";

export default function Home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);

  }, []);

  return (
    <>
      <IntroLoader loading={loading} />
      <HeroScene />
    </>
  );
}