
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Trophy, ArrowUpRight } from "lucide-react";

const tournaments = [
  {
    title: "WEEKLY",
    places: "3",
    accent: "purple",
  },
  {
    title: "WEEKLY",
    places: "10",
    accent: "pink",
  },
  {
    title: "LUCKY CARD",
    places: "100",
    accent: "purple",
  },
];

const players = [
  {
    name: "Black Ninja",
    prize: "$75,000",
  },
  {
    name: "Foxtie Max",
    prize: "$50,000",
  },
  {
    name: "Holam Doxe",
    prize: "$25,000",
  },
];

export default function Tournaments() {
  return (
    <>
      <Navbar />

      {/* ================= HERO ================= */}
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

          <button
            className="
              mt-8 rounded-lg
              border border-fuchsia-500/50
              bg-fuchsia-600/80
              px-7 py-3
              text-sm font-bold uppercase
              tracking-widest
              transition-all duration-300
              hover:-translate-y-1
              hover:bg-fuchsia-500
              hover:shadow-[0_0_30px_rgba(217,70,239,0.4)]
              cursor-pointer
            "
          >
            Scroll To Explore Tournaments
          </button>
        </div>

        <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black to-transparent" />
      </section>


      {/* ================= TOURNAMENTS ================= */}
      <section className="min-h-[90vh] bg-black px-5 py-14 text-amber-50">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center">

          <p className="w-80 tracking-[8px] text-fuchsia-400">
            ⋆ OUR TOURNAMENT ⋆
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-wide text-white sm:text-5xl md:text-6xl">
            PLAY TO EARN GAMES
          </h1>

        </div>


        {/* ================= CARDS ================= */}
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-6 pt-12">

          {tournaments.map((tournament, index) => (

            <div
              key={index}
              className="
                group relative
                w-full max-w-[350px]
                overflow-hidden
                border border-white/10
                bg-[#09090d]
                transition-all duration-300
                hover:-translate-y-2
                hover:border-fuchsia-500/50
              "
            >

              {/* Top accent */}
              <div
                className={`
                  h-[3px] w-full
                  ${
                    tournament.accent === "pink"
                      ? "bg-fuchsia-500"
                      : "bg-purple-500"
                  }
                `}
              />

              <div className="p-6">

                {/* Card Header */}
                <div className="flex items-start justify-between">

                  <div>

                    <p className="text-[11px] font-semibold uppercase tracking-[4px] text-gray-500">
                      Tournament
                    </p>

                    <h2
                      className={`
                        mt-2 text-3xl font-black italic tracking-wider
                        ${
                          tournament.accent === "pink"
                            ? "text-fuchsia-400"
                            : "text-purple-400"
                        }
                      `}
                    >
                      {tournament.title}
                    </h2>

                  </div>

                  <div
                    className={`
                      flex h-11 w-11 items-center justify-center
                      border
                      ${
                        tournament.accent === "pink"
                          ? "border-fuchsia-500/30 bg-fuchsia-500/5"
                          : "border-purple-500/30 bg-purple-500/5"
                      }
                    `}
                  >
                    <Trophy
                      size={21}
                      className={
                        tournament.accent === "pink"
                          ? "text-fuchsia-400"
                          : "text-purple-400"
                      }
                    />
                  </div>

                </div>


                {/* Prize information */}
                <div className="mt-7 flex items-center justify-between border-y border-white/10 py-4">

                  <div>
                    <p className="text-[10px] uppercase tracking-[3px] text-gray-500">
                      Prize Places
                    </p>

                    <p className="mt-1 text-xl font-bold text-white">
                      {tournament.places}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-[10px] uppercase tracking-[3px] text-gray-500">
                      Total Prize
                    </p>

                    <p
                      className={`
                        mt-1 font-bold
                        ${
                          tournament.accent === "pink"
                            ? "text-fuchsia-400"
                            : "text-purple-400"
                        }
                      `}
                    >
                      $150,000
                    </p>
                  </div>

                </div>


                {/* Players */}
                <div className="mt-5">

                  <p className="mb-3 text-[10px] uppercase tracking-[3px] text-gray-500">
                    Top Players
                  </p>

                  <div className="divide-y divide-white/5 border border-white/5">

                    {players.map((player, playerIndex) => (

                      <div
                        key={playerIndex}
                        className="
                          flex items-center justify-between
                          px-4 py-3
                          transition-colors duration-200
                          hover:bg-white/[0.03]
                        "
                      >

                        <div className="flex items-center gap-3">

                          <span className="text-xs text-gray-600">
                            0{playerIndex + 1}
                          </span>

                          <span className="text-sm text-gray-300">
                            {player.name}
                          </span>

                        </div>

                        <span
                          className={`
                            text-sm font-semibold
                            ${
                              tournament.accent === "pink"
                                ? "text-fuchsia-400"
                                : "text-purple-400"
                            }
                          `}
                        >
                          {player.prize}
                        </span>

                      </div>

                    ))}

                  </div>

                </div>


                {/* Join button */}
                <button
                  className="
                    mt-6 flex w-full
                    items-center justify-center gap-2
                    border border-white/15
                    bg-white/[0.04]
                    py-3
                    text-xs font-bold uppercase
                    tracking-[3px]
                    text-white
                    transition-all duration-300
                    hover:border-fuchsia-500/50
                    hover:bg-fuchsia-500
                    cursor-pointer
                  "
                >
                  Join Tournament

                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </button>

              </div>
            </div>

          ))}

        </div>

      </section>

      <Footer />
    </>
  );
}
