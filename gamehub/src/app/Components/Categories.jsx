function Categories(){
  const categories= [
    "Action",
    "RPG",
    "Strategy",
    "Puzzle",
    "Adventure",
    "Simulation",
    "Indie",
  ];
  return(
    <>
      <section className="browse_cat">
        <h1>Browse by Category</h1>
          <div className="grid_continer">
           {categories.map((category)=> (
            <div key={category} className="item">
              {category}
            </div>
           ))}
          </div>
      </section>

       <section className="join_comm">
          <div className="join_cont">
          <h1>Join the Community</h1>
          <p>Connect with millions of gamers, compete in tournaments, and discover<br/> your next favorite game.</p>
          <button>Create Free Account</button>
          </div>
      </section>
    </>
  )
}
export default Categories