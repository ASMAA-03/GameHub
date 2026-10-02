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
    <section className="flex flex-col gap-8 md:gap-12 lg:gap-[55px] p-5 sm:p-6 md:p-8 lg:p-[35px] min-h-screen">
      
      <div className="text-[rgb(193,187,187)]">
        <div className="flex items-center gap-2">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            className="shrink-0 sm:w-[45px] sm:h-[45px]"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.8202 1.17444L12.7809 2.37532C13.9186 3.7975 14.3379 5.20075 14.299 6.54704C14.2612 7.85605 13.7915 9.02304 13.3225 9.98619C13.1649 10.3098 12.9946 10.6349 12.8386 10.9327C12.7663 11.0708 12.697 11.203 12.6335 11.3265C12.4214 11.739 12.2593 12.0804 12.1563 12.3799C12.0528 12.6806 12.0336 12.8708 12.0468 12.991C12.0567 13.0817 12.0872 13.173 12.2071 13.2929C12.4054 13.4912 12.5517 13.5469 12.6404 13.5639C12.731 13.5814 12.8515 13.5757 13.0239 13.5049C13.4095 13.3463 13.8803 12.9334 14.3743 12.314C14.8488 11.719 15.2631 11.0384 15.5634 10.4938C15.712 10.2242 15.829 9.99387 15.9091 9.83234C15.9488 9.75168 15.979 9.6885 15.9988 9.64651L16.0205 9.59999L16.0252 9.58959L16.0259 9.58824L16.026 9.5879L16.0261 9.58776L16.0261 9.58771L16.6117 8.29169L17.6332 9.28206C19.946 11.5244 20.6617 14.7623 19.1415 17.7019C17.8195 20.2583 15.1123 22 12 22C7.60499 22 4 18.5172 4 14.1697C4 11.8793 5.26687 10.2404 6.64671 8.62914C6.82673 8.41894 7.0107 8.20711 7.19757 7.99194C8.47882 6.5167 9.89649 4.88437 11.1122 2.5397L11.8202 1.17444Z"
            />
          </svg>

          <h2 className="text-2xl sm:text-3xl md:text-[2rem] text-white">
            Trending Now
          </h2>
        </div>

        <p className="mt-2 text-sm sm:text-base">
          The hottest games everyone is playing right now
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-[1400px] w-full mx-auto">
        {cards.map((card, i) => (
          <div
            key={i}
            className="
              group relative
              flex flex-col items-center
              w-full
              max-w-[420px]
              mx-auto
              min-h-[405px]
              border-2 border-[rgb(157,63,221)]
              rounded-[4px]
              transition duration-500
              hover:-translate-y-3
              cursor-pointer
            "
          >
            <div
              className="
                relative
                flex justify-center items-center
                w-full
                h-[220px]
                sm:h-[230px]
                md:h-[240px]
              "
            >
              <Image
                src={card.before}
                alt={card.title}
                fill
                className="
                  object-cover
                  opacity-100
                  group-hover:scale-0
                  transition-all
                  duration-500
                "
              />

              <Image
                src={card.after}
                alt={card.title}
                width={260}
                height={350}
                className="
                  absolute
                  bottom-0
                  object-contain
                  scale-0
                  group-hover:scale-100
                  group-hover:-translate-y-0
                  transition-all
                  duration-500
                "
              />
            </div>

            <div className="flex-1 w-full p-4 leading-[23px]">
              <div className="flex justify-between items-center gap-3">
                <h3 className="text-white text-lg sm:text-xl">
                  {card.title}
                </h3>

                <div className="text-white whitespace-nowrap">
                  <span className="text-[rgb(193,187,187)]">
                    {card.rating}
                  </span>{" "}
                  ⭐
                </div>
              </div>

              <div className="mt-2 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white shrink-0"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>

                <p className="text-sm sm:text-base text-[rgb(193,187,187)]">
                  {card.players}
                </p>
              </div>
            </div>

            <button
              className="
                w-[calc(100%-30px)]
                h-[50px]
                mb-[15px]
                bg-[linear-gradient(45deg,rgb(134,32,194),rgb(208,64,194),rgb(219,10,136))]
                text-white
                border-2 border-[rgb(153,70,146)]
                text-base sm:text-[1.2rem]
                rounded-[4px]
                opacity-100
                md:opacity-0
                transition duration-300
                md:group-hover:opacity-100
              "
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
