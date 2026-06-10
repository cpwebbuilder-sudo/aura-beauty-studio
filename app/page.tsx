"use client";

import { useEffect, useState } from "react";

import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Transformations from "@/components/Transformations";
import Marquee from "@/components/Marquee";
import ReelsWall from "@/components/ReelsWall";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FadeUp from "@/components/FadeUp";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import BookingForm from "@/components/BookingForm";
export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <main className="bg-black">
      <Navbar />
      <Hero />

      <FadeUp>
        <About />
      </FadeUp>

      <Marquee />

      <FadeUp>
        <Services />
      </FadeUp>

      <FadeUp>
        <Transformations />
      </FadeUp>
       <FadeUp>
        <Testimonials />
      </FadeUp>
  <FadeUp>
        <Stats />
      </FadeUp>
<FadeUp>
        <BookingForm />
      </FadeUp>
      <FadeUp>
        <ReelsWall />
      </FadeUp>

      <FadeUp>
        <CTA />
      </FadeUp>
<FadeUp>
        <Contact />
      </FadeUp>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}