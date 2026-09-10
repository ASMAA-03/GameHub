import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Trophy } from "lucide-react";

export default function Tournaments() {
return(
  <>
 <Navbar />

<section className="relative min-h-[75vh] overflow-hidden text-gray-200">

  <div className="absolute inset-0 bg-black/40" />

  <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[120px]" />

  <div className="relative z-10 flex min-h-[75vh] flex-col items-center justify-center px-5 text-center">

    <p className="mb-4 text-sm font-bold uppercase tracking-[6px] text-fuchsia-400 sm:text-base">
      Compete • Win • Earn
    </p>

    <h1 className="text-5xl font-black uppercase italic tracking-[6px] text-white sm:text-7xl sm:tracking-[12px] md:text-8xl md:tracking-[18px]">
      Tournament
    </h1>

    <div className="mt-6 h-[2px] w-24 bg-fuchsia-500 sm:w-32" />

    <p className="mt-6 max-w-xl text-sm leading-6 text-gray-300 sm:text-base">
      Enter the arena, challenge the best players,
      and compete for amazing rewards.
    </p>

    <button className="mt-8 rounded-full border border-fuchsia-500/50 bg-fuchsia-600/80 px-7 py-3 text-sm font-bold uppercase cursor-pointer tracking-widest transition-all duration-300 hover:-translate-y-1 hover:bg-fuchsia-500 hover:shadow-[0_0_30px_rgba(217,70,239,0.4)]">
     Scroll To Explore Tournaments
    </button>

  </div>

  <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black to-transparent" />

</section>
<section className="h-[90vh] flex flex-col items-center text-amber-50 py-9 ">
  <div className="text-fuchsia-400">
    <p className="tracking-[8px] w-80 text-center">⋆ Our Tournament ⋆</p>
  </div>
  <div>
    <h1 className="text-7xl">PLAY TO EARN GAMES</h1>
  </div>
 <div className="flex flex-wrap justify-center gap-8 p-7">

  <div className="group relative w-80 overflow-hidden rounded-3xl border border-purple-500/30 bg-purple-950/20 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-3 hover:border-purple-500/70 hover:shadow-[0_15px_50px_rgba(168,85,247,0.25)]">

    <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-purple-600/20 blur-3xl transition-all duration-300 group-hover:bg-purple-500/40" />

    <div className="relative z-10">

      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-[4px] text-gray-400">
            Tournament
          </span>

          <h2 className="mt-1 text-3xl font-black italic tracking-wider text-purple-400">
            WEEKLY
          </h2>
        </div>

        <div className="rounded-2xl bg-purple-500/10 p-3">
          <Trophy size={28} className="text-yellow-400" />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/5 bg-black/20 px-4 py-3">
        <span className="text-sm text-gray-400">
          Prize Places
        </span>

        <span className="font-bold text-white">
          3
        </span>
      </div>

      <div className="mt-5 space-y-3">

        <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
          <span className="text-sm text-gray-300">
            Black Ninja
          </span>
          <span className="font-semibold text-purple-400">
            $75,000
          </span>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
          <span className="text-sm text-gray-300">
            Foxtie Max
          </span>
          <span className="font-semibold text-purple-400">
            $50,000
          </span>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
          <span className="text-sm text-gray-300">
            Holam Doxe
          </span>
          <span className="font-semibold text-purple-400">
            $25,000
          </span>
        </div>

      </div>

      <button className="mt-6 w-full rounded-xl bg-purple-600 py-3 font-bold uppercase tracking-widest transition-all duration-300 hover:bg-purple-500 hover:shadow-lg hover:shadow-purple-500/30 cursor-pointer ">
        Join Tournament
      </button>

    </div>
  </div>

  <div className="group relative w-80 overflow-hidden rounded-3xl border border-blue-500/30 bg-blue-950/20 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-3 hover:border-blue-500/70 hover:shadow-[0_15px_50px_rgba(59,130,246,0.25)]">

    <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-600/20 blur-3xl transition-all duration-300 group-hover:bg-blue-500/40" />

    <div className="relative z-10">

      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-[4px] text-gray-400">
            Tournament
          </span>

          <h2 className="mt-1 text-3xl font-black italic tracking-wider text-blue-400">
            WEEKLY
          </h2>
        </div>

        <div className="rounded-2xl bg-blue-500/10 p-3">
          <Trophy size={28} className="text-gray-300" />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/5 bg-black/20 px-4 py-3">
        <span className="text-sm text-gray-400">
          Prize Places
        </span>

        <span className="font-bold text-white">
          10
        </span>
      </div>

      <div className="mt-5 space-y-3">

        <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
          <span className="text-sm text-gray-300">
            Black Ninja
          </span>
          <span className="font-semibold text-blue-400">
            $75,000
          </span>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
          <span className="text-sm text-gray-300">
            Foxtie Max
          </span>
          <span className="font-semibold text-blue-400">
            $50,000
          </span>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
          <span className="text-sm text-gray-300">
            Holam Doxe
          </span>
          <span className="font-semibold text-blue-400">
            $25,000
          </span>
        </div>

      </div>

      <button className="mt-6 w-full rounded-xl bg-blue-600 py-3 font-bold uppercase tracking-widest transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30 cursor-pointer ">
        Join Tournament
      </button>

    </div>
  </div>


  <div className="group relative w-80 overflow-hidden rounded-3xl border border-red-500/30 bg-red-950/20 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-3 hover:border-red-500/70 hover:shadow-[0_15px_50px_rgba(239,68,68,0.25)]">

    <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-red-600/20 blur-3xl transition-all duration-300 group-hover:bg-red-500/40" />

    <div className="relative z-10">

      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-[4px] text-gray-400">
            Tournament
          </span>

          <h2 className="mt-1 text-3xl font-black italic tracking-wider text-red-400">
            LUCKY CARD
          </h2>
        </div>

        <div className="rounded-2xl bg-red-500/10 p-3">
          <Trophy size={28} className="text-red-400" />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/5 bg-black/20 px-4 py-3">
        <span className="text-sm text-gray-400">
          Prize Places
        </span>

        <span className="font-bold text-white">
          100
        </span>
      </div>

      <div className="mt-5 space-y-3">

        <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
          <span className="text-sm text-gray-300">
            Black Ninja
          </span>
          <span className="font-semibold text-red-400">
            $75,000
          </span>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
          <span className="text-sm text-gray-300">
            Foxtie Max
          </span>
          <span className="font-semibold text-red-400">
            $50,000
          </span>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
          <span className="text-sm text-gray-300">
            Holam Doxe
          </span>
          <span className="font-semibold text-red-400">
            $25,000
          </span>
        </div>

      </div>

      <button className="mt-6 w-full rounded-xl bg-red-600 py-3 font-bold uppercase tracking-widest transition-all duration-300 hover:bg-red-500 hover:shadow-lg hover:shadow-red-500/30 cursor-pointer">
        Join Tournament
      </button>

    </div>
  </div>

</div>
</section>
  <Footer/>
  </>
);


}