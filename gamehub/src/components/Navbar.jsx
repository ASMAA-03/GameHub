import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-4 py-3 bg-black/20">
      <div className="pl-14 flex items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="56"
          height="36"
          fill="url(#logoGrad)"
          className="inline-block align-middle"
          viewBox="0 0 16 16"
        >
          <defs>
            <linearGradient id="logoGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(134,32,194)" />
              <stop offset="100%" stopColor="whitesmoke" />
            </linearGradient>
          </defs>
          <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434zM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134 2.75 1.571v-3.134L8.5 9.933zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21zM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643 8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z" />
        </svg>
        <h4 className="inline-block align-middle text-3xl font-bold cursor-pointer bg-gradient-to-br from-[rgb(134,32,194)] to-gray-100 bg-clip-text text-transparent">
          GameHub
        </h4>
      </div>

      <ul className="flex items-center gap-9 list-none">
        {["Home","Games", "Tournaments", "Community"].map((label) => (
          <li key={label}>
            <Link
              href={
                label.toLowerCase() === "home"
                  ? "/"
                  : `/${label.toLowerCase()}`
              }
              className="text-[rgb(193,187,187)] text-base px-3 py-2 rounded-lg transition-colors duration-200 hover:text-[rgba(202,108,210,0.76)]"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="pr-4">
        <button className="px-5 py-2.5 mr-4 rounded-lg border-2 border-[rgb(134,32,194)] bg-gradient-to-br from-[rgb(134,32,194)] via-[rgb(208,64,194)] to-[rgb(219,10,136)] text-white font-bold text-lg cursor-pointer transition-all duration-200 hover:shadow-[0_2px_15px_rgb(134,32,194)]">
          Sign In
        </button>
      </div>
    </nav>
  );
}

export default Navbar;