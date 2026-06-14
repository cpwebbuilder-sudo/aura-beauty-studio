"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Transformations from "@/components/Transformations";
import Marquee from "@/components/Marquee";
import ReelsWall from "@/components/ReelsWall";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FadeUp from "@/components/FadeUp";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import BookingForm from "@/components/BookingForm";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />

      <Hero />

      
        <About />
     

      <Marquee />

      
        <Services />
     

      
        <Transformations />
     

      <Testimonials />

      <Stats />

      <BookingForm />

      
        <ReelsWall />
     

      <Contact />

      <Footer />

      <WhatsAppButton />
    </main>
  );
}