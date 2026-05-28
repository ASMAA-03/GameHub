import Image from "next/image";

function GameCard({ title, rating, players, before, after }) {
  if (!before || !after) return null;  

  return (
    <div className="group relative w-[300px] rounded-[16px] overflow-hidden bg-[#120022] shadow-lg mt-[40px] ml-[40px]">

      <div className="relative h-[200px] w-full overflow-hidden">
        <Image
          src={before}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:opacity-50"
        />

        <Image
          src={after}
          alt={title}
          fill
          className="object-contain opacity-0 transition duration-500 group-hover:opacity-100 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      <div className="p-4 text-white">
        <div className="flex justify-between">
          <h3 className="text-lg font-semibold">{title}</h3>
          <span className="text-gray-300">⭐ {rating}</span>
        </div>

        <p className="text-gray-400 text-sm mt-2">
          👥 {players}
        </p>
      </div>

  
    </div>
  );
}

export default GameCard;