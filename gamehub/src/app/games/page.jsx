import GameCard from "../../components/gamecard";
import Navbar from "../../components/Navbar";

const cards = [
  {
    title: "Fantasy",
    rating: "1.8",
    players: "2.4M player",
    before: "/images/img01.webp",
    after: "/images/img04.png",
  },
  {
    title: "Fairy Dwarfs",
    rating: "3.7",
    players: "1.8M player",
    before: "/images/img02.jpg",
    after: "/images/img05.png",
  },
  {
    title: "Vikings",
    rating: "4.5",
    players: "1.5M player",
    before: "/images/img03.jpg",
    after: "/images/img06.png",
  },
];

export default function GamesPage() {
  return (
    <>
    <Navbar/>
    <div className="flex flex-wrap gap-6">
      {cards.map((card, i) => (
        <GameCard key={i} {...card} />
      ))}
    </div>
    </>
    
  );
}