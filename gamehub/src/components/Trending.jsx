import Image from "next/image";

function Trending() {
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

  return (
    <section className="flex flex-col gap-[55px] p-[35px] h-[90vh]">
      <div className="text-[rgb(193,187,187)] text-[1.2rem]">
        <div className="inline-block align-middle">
          <svg width="50" height="50" viewBox="0 0 24 24" fill="none">
            <path
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.8202 1.17444L12.7809 2.37532C13.9186 3.7975 14.3379 5.20075 14.299 6.54704C14.2612 7.85605 13.7915 9.02304 13.3225 9.98619C13.1649 10.3098 12.9946 10.6349 12.8386 10.9327C12.7663 11.0708 12.697 11.203 12.6335 11.3265C12.4214 11.739 12.2593 12.0804 12.1563 12.3799C12.0528 12.6806 12.0336 12.8708 12.0468 12.991C12.0567 13.0817 12.0872 13.173 12.2071 13.2929C12.4054 13.4912 12.5517 13.5469 12.6404 13.5639C12.731 13.5814 12.8515 13.5757 13.0239 13.5049C13.4095 13.3463 13.8803 12.9334 14.3743 12.314C14.8488 11.719 15.2631 11.0384 15.5634 10.4938C15.712 10.2242 15.8295 9.99387 15.9091 9.83234C15.9488 9.75168 15.979 9.6885 15.9988 9.64651L16.0205 9.59999L16.0252 9.58959L16.0259 9.58824L16.026 9.5879L16.0261 9.58776L16.0261 9.58771L16.6117 8.29169L17.6332 9.28206C19.946 11.5244 20.6617 14.7623 19.1415 17.7019C17.8195 20.2583 15.1123 22 12 22C7.60499 22 4 18.5172 4 14.1697C4 11.8793 5.26687 10.2404 6.64671 8.62914C6.82673 8.41894 7.0107 8.20711 7.19757 7.99194C8.47882 6.5167 9.89649 4.88437 11.1122 2.5397L11.8202 1.17444Z"
            />
          </svg>
        </div>

        <h2 className="inline-block align-middle text-[2rem] text-white ml-2">
          Trending Now
        </h2>

        <p>The hottest games everyone is playing right now</p>
      </div>

      <div className="flex justify-around">
        {cards.map((card, i) => (
          <div
            key={i}
            className="group flex flex-col items-center border-2 border-[rgb(157,63,221)] rounded-[4px] h-[405px] transition duration-500 hover:-translate-y-[20px] cursor-pointer"
          >
            <div className="flex justify-center items-center h-[240px] w-[420px] transition-[1.1s] overflow-hidden">
              <Image
                src={card.before}
                alt={card.title}
                width={460}
                height={240}
                className="opacity-100 group-hover:scale-0 transition-all duration-500"
              />

              <Image
                src={card.after}
                alt={card.title}
                width={260}
                height={350}
                className="scale-0 group-hover:scale-100 transition-all duration-500 absolute"
              />
            </div>

            <div className="h-[100px] p-[15px] w-full leading-[23px]">
              <div className="flex justify-between">
                <h3 className="text-white text-xl">{card.title}</h3>

                <div className="text-white">
                  <span className="text-[rgb(193,187,187)]">
                    {card.rating}
                  </span>{" "}
                  ⭐
                </div>
              </div>

              <div className="mt-1 flex items-center gap-1">
                <svg
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="text-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1z" />
                </svg>

                <p className="text-[rgb(193,187,187)]">
                  {card.players}
                </p>
              </div>
            </div>

            <button
              className="w-[355px] h-[50px] mb-[15px]
              bg-[linear-gradient(45deg,rgb(134,32,194),rgb(208,64,194),rgb(219,10,136))]
              text-white border-2 border-[rgb(153,70,146)]
              text-[1.2rem] rounded-[4px]
              opacity-0 transition duration-300
              group-hover:opacity-100"
            >
              Play Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Trending;