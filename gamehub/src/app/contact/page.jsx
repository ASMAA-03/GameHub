"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/contact-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="absolute inset-0 bg-black/60 z-10" />

        <div className="relative z-20 max-w-3xl text-center px-6">
          <span className="text-white font-bold tracking-wider">
            YOUR ULTIMATE GAMING DESTINATION
          </span>
          <p className="text-fuchsia-200 mt-4 text-lg">
            Discover new games, connect with players, and level up your
            experience.
          </p>
          <p className="text-gray-300 mt-6 leading-relaxed">
            Tell us about your favorite games, gaming interests, or community
            goals. Our team will help you find the right games and opportunities
            to make the most of your gaming journey.
          </p>

          <button
            onClick={() => router.push("/games")}
            className="mt-8 px-6 py-3 bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-semibold rounded-lg transition"
          >
            Start Your Gaming Adventure
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}