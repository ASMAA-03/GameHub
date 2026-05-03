import Image from "next/image";
import img1 from "../../../public/images/img01.webp";
import img2 from "../../../public/images/img02.jpg";
import img3 from "../../../public/images/img03.jpg";
import img4 from "../../../public/images/img04.png";
import img5 from "../../../public/images/img05.png";
import img6 from "../../../public/images/img06.png";

function Trending() {
  return (
    <section className="flex flex-col gap-[55px] p-[35px] h-[90vh]">

      {/* Header */}
      <div className="text-[rgb(193,187,187)] text-[1.2rem]">
        <div className="inline-block align-middle">
          <svg
            className="text-white"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.8202 1.17444L12.7809 2.37532C13.9186 3.7975 14.3379 5.20075 14.299 6.54704C14.2612 7.85605 13.7915 9.02304 13.3225 9.98619C13.1649 10.3098 12.9946 10.6349 12.8386 10.9327C12.7663 11.0708 12.697 11.203 12.6335 11.3265C12.4214 11.739 12.2593 12.0804 12.1563 12.3799C12.0528 12.6806 12.0336 12.8708 12.0468 12.991C12.0567 13.0817 12.0872 13.173 12.2071 13.2929C12.4054 13.4912 12.5517 13.5469 12.6404 13.5639C12.731 13.5814 12.8515 13.5757 13.0239 13.5049C13.4095 13.3463 13.8803 12.9334 14.3743 12.314C14.8488 11.719 15.2631 11.0384 15.5634 10.4938C15.712 10.2242 15.8295 9.99387 15.9091 9.83234C15.9488 9.75168 15.979 9.6885 15.9988 9.64651L16.0205 9.59999L16.0252 9.58959L16.0259 9.58824L16.026 9.5879L16.0261 9.58776L16.0261 9.58771L16.6117 8.29169L17.6332 9.28206C19.946 11.5244 20.6617 14.7623 19.1415 17.7019C17.8195 20.2583 15.1123 22 12 22C7.60499 22 4 18.5172 4 14.1697C4 11.8793 5.26687 10.2404 6.64671 8.62914C6.82673 8.41894 7.0107 8.20711 7.19757 7.99194C8.47882 6.5167 9.89649 4.88437 11.1122 2.5397L11.8202 1.17444ZM17.1269 11.7924C16.8148 12.3321 16.4089 12.9705 15.9379 13.561C15.3851 14.2542 14.6528 14.9975 13.7846 15.3546C13.33 15.5415 12.8109 15.6335 12.2624 15.5279C11.7119 15.4219 11.2196 15.1338 10.7929 14.7071C10.3617 14.2759 10.1196 13.7664 10.0586 13.2082C10.0008 12.6794 10.1126 12.1723 10.2651 11.729C10.4181 11.2846 10.6372 10.8353 10.8549 10.412C10.9327 10.2606 11.0095 10.114 11.0856 9.96886C11.2338 9.68618 11.3792 9.40866 11.5243 9.11064C11.9559 8.22433 12.2745 7.36712 12.2998 6.48929C12.3134 6.01847 12.2432 5.51449 12.0273 4.9728C10.9109 6.77097 9.71215 8.14915 8.69763 9.31555C8.51377 9.52693 8.33596 9.73135 8.16579 9.93006C6.7748 11.5543 6 12.6877 6 14.1697C6 17.3667 8.66302 20 12 20C14.3543 20 16.3818 18.6846 17.365 16.7832C18.2267 15.1169 18.1049 13.3127 17.1269 11.7924Z"
            />
          </svg>
        </div>

        <h2 className="inline-block align-middle text-[2rem] text-white ml-2">
          Trending Now
        </h2>

        <p>The hottest games everyone is playing right now</p>
      </div>

      <div className="flex justify-around">

        {[
          {
            title: "Fantasy",
            rating: "1.8",
            players: "2.4M player",
            before: img1,
            after: img4,
          },
          {
            title: "Fairy Dwarfs",
            rating: "3.7",
            players: "1.8M player",
            before: img2,
            after: img5,
          },
          {
            title: "Vikings",
            rating: "4.5",
            players: "1.5M player",
            before: img3,
            after: img6,
          },
        ].map((card, i) => (
          <div
            key={i}
            className="group flex flex-col items-center border-2 border-[rgb(157,63,221)] rounded-[4px] h-[405px] transition duration-500 hover:-translate-y-[20px] cursor-pointer"
          >

            <div className="flex justify-center items-center h-[240px] w-[420px] transition-[1.1s]">

              <Image
                src={card.before}
                alt=""
                className="h-[240px] w-[460px] opacity-100 group-hover:h-[0px] group-hover:w-[0px]"
              />

              <Image
                src={card.after}
                alt=""
                className="h-[0px] w-[0px] group-hover:opacity-100 group-hover:-translate-y-[40px] group-hover:skew-x-[-2deg] group-hover:mb-[105px] group-hover:h-[350px] group-hover:w-[260px]"
              />

            </div>

            <div className="h-[100px] p-[15px] w-full leading-[23px]">

              <div className="flex justify-between">

                <h3 className="text-white text-xl mr-[196px]">
                  {card.title}
                </h3>

                <div className="text-white">
                  <span className="text-[rgb(193,187,187)]">
                    {card.rating}
                  </span>{" "}
                  ⭐
                </div>

              </div>

              <div className="mt-1">

                <svg
                  width="16"
                  height="16"
                  className="inline-block align-middle text-white"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
                </svg>

                <p className="inline-block align-middle text-[rgb(193,187,187)] ml-1">
                  {card.players}
                </p>

              </div>

            </div>

            <button
              className="w-[355px] h-[50px] mb-[15px]
              bg-[linear-gradient(45deg,rgb(134,32,194),rgb(208,64,194),rgb(219,10,136))]
              text-white border-2 border-[rgb(153,70,146)]
              text-[1.2rem] rounded-[4px]
              opacity-0 transition duration-400
              group-hover:opacity-100
              hover:shadow-[5px_5px_15px_rgb(145,102,194)]"
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