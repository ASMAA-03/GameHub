function Categories() {
  const categories = [
    "Action",
    "RPG",
    "Strategy",
    "Puzzle",
    "Adventure",
    "Simulation",
    "Indie",
  ];

  return (
    <>
      <section className="flex items-center justify-center h-[50vh]">
        <div className="w-full">
          <h1 className="pl-[55px] text-white text-4xl font-bold">Browse by Category</h1>
          <div className="h-[28vh] grid grid-cols-4 grid-rows-2 justify-around items-center mt-[25px] gap-y-5 gap-x-3">
            {categories.map((category) => (
              <div 
                key={category} 
                className="h-20 text-[rgb(208,205,205)] text-[1.3rem] border border-[rgb(101,36,122)] bg-gradient-to-br from-[rgb(52,9,66)] via-[rgb(59,24,72)] to-[rgb(73,0,107)] rounded-lg text-left content-center p-[19px] cursor-pointer relative transition-all duration-300 hover:shadow-[5px_5px_15px_rebeccapurple] hover:-translate-y-1 after:content-['>'] after:absolute after:right-[15px] after:text-white/70"
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="h-[70vh] flex items-center justify-center">
        <div className="w-4/5 h-[380px] bg-gradient-to-br from-[rgb(42,6,54)] via-[rgb(48,16,59)] to-[rgb(48,5,68)] p-[75px] border border-[rgb(134,32,194)] text-center text-[1.5rem] text-[rgb(193,187,187)] rounded-xl flex flex-col justify-center items-center gap-[15px]">
          <h1 className="text-white text-[3.5rem] font-bold">Join the Community</h1>
          <p>Connect with millions of gamers, compete in tournaments, and discover<br /> your next favorite game.</p>
          <button className="px-6 py-6 rounded-lg border-2 border-[rgb(134,32,194)] bg-gradient-to-r from-[rgb(134,32,194)] via-[rgb(208,64,194)] to-[rgb(219,10,136)] cursor-pointer text-[1.2rem] text-white font-bold h-20 transition-all duration-400 hover:shadow-[5px_5px_15px_rgb(110,16,164)]">
            Create Free Account
          </button>
        </div>
      </section>
    </>
  );
}

export default Categories;