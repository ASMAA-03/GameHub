import Link from "next/link";

export default function HeroSection() {
  return (
    <main className="relative w-full overflow-hidden min-h-[80vh] ">

      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/gaming-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="absolute inset-0 z-10 bg-black/65" />

      <div
        className="absolute top-[40%] left-[40%] w-[200px] h-[200px]
                   rounded-full opacity-20 -translate-x-1/2
                   -translate-y-1/2 z-20"
        style={{
          background:
            "radial-gradient(circle at center, rgba(138, 38, 196, 0.8))",
          boxShadow:
            "0px 10px 70px 70px rgba(138, 38, 196, 0.8)",
        }}
      />

      <div
        className="absolute top-[55%] left-[60%] w-[200px] h-[200px]
                   rounded-full opacity-20 -translate-x-1/2
                   -translate-y-1/2 z-20"
        style={{
          background:
            "radial-gradient(circle at center, rgba(252, 60, 255, 0.845))",
          boxShadow:
            "0px 10px 70px 70px rgba(252, 60, 255, 0.845)",
        }}
      />

      <div
        className="top-[20%] absolute md:top-[30%] left-1/2
                   -translate-x-1/2
                   flex flex-col justify-center items-center
                   text-center max-w-4xl w-full px-4 z-30"
      >
        <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl text-white">
          Level Up Your Gaming
        </h1>

        <p className="text-lg mb-0 md:text-xl text-white/70 leading-relaxed my-4 max-w-2xl">
          Discover thousands of games, compete in tournaments, and connect
          with millions of gamers worldwide. Your ultimate gaming destination
          awaits.
        </p>

        
<div className="flex flex-col md:flex-row gap-4 justify-center mt-6">

  <Link href="/games">
    <button
      className="
        w-[180px] h-[48px]
        rounded-md
        bg-black/80
        border border-white/25
        text-white text-base font-semibold
        transition-all duration-300
        hover:bg-purple-400/50
        hover:border-white
        hover:-translate-y-1
        hover:shadow-lg hover:shadow-black/40
      "
    >
      Explore Games
    </button>
  </Link>

  <Link href="/tournaments">
    <button
      className="
        w-[180px] h-[48px]
        rounded-md
        bg-white/5
        backdrop-blur-sm
        border border-white/30
        text-white text-base font-semibold
        transition-all duration-300
        hover:bg-black/80
        hover:border-white
        hover:-translate-y-1
        hover:shadow-lg hover:shadow-black/40
      "
    >
      Watch Tournaments
    </button>
  </Link>

</div>

      </div>
    </main>
  );
}