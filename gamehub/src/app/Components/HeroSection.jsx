function HeroSection() {
  return (
    <>
      <main className="relative w-full overflow-hidden h-[80vh]">
        <div 
          className="absolute top-[40%] left-[40%] w-[200px] h-[200px] rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"
          style={{
            background: 'radial-gradient(circle at center, rgba(138, 38, 196, 0.8))',
            boxShadow: '0px 10px 70px 70px rgba(138, 38, 196, 0.8)'
          }}
        ></div>
        <div 
          className="absolute top-[55%] left-[60%] w-[200px] h-[200px] rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"
          style={{
            background: 'radial-gradient(circle at center, rgba(252, 60, 255, 0.845))',
            boxShadow: '0px 10px 70px 70px rgba(252, 60, 255, 0.845)'
          }}
        ></div>
        
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 flex flex-col justify-center items-center text-center max-w-4xl w-full px-4">
          <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl text-[rgb(231,150,205)] break-words">
            Level Up Your Gaming
          </h1>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed my-4 max-w-2xl">
            Discover thousands of games, compete in tournaments, and connect with millions of gamers worldwide. Your ultimate gaming destination awaits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <button className="px-5 py-2.5 rounded-lg border-2 border-[rgb(134,32,194)] bg-gradient-to-r from-[rgb(134,32,194)] via-[rgb(208,64,194)] to-[rgb(219,10,136)] cursor-pointer transition-all duration-200 text-xl text-white font-bold w-[200px] h-[75px] hover:shadow-[0px_10px_25px_rgb(94,34,114)] hover:scale-105">
              Explore Games
            </button>
            <button className="px-5 py-2.5 rounded-lg border-2 border-[rgb(110,16,164)] backdrop-blur-md bg-transparent text-[rgb(225,159,255)] text-xl font-semibold w-[200px] h-[75px] transition-all duration-200 hover:bg-[rgba(94,34,114,0.2)] cursor-pointer">
              Watch Tournaments
            </button>
          </div>
        </div>
      </main>
    </>
  )
}

export default HeroSection