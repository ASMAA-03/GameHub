import Link from "next/link";

function Footer() {
  const items = [
    { name: "Games", id: 1, href: "/games" },
    { name: "Tournaments", id: 2, href: "/tournaments" },
  ];

  const companyLinks = [
    { name: "Home", id: 1, href: "/" },
    { name: "Contact", id: 3, href: "/contact" },
  ];

  const socialLinks = [
    { name: "X", id: 1, href: "https://x.com" },
    { name: "Discord", id: 2, href: "https://discord.com" },
    { name: "Twitch", id: 3, href: "https://twitch.tv" },
  ];

  return (
    <footer className="border-t border-white/10 bg-black px-5 pt-10 text-gray-300 sm:px-8">

      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 pb-10 sm:gap-10 lg:grid-cols-4">

        <div className="col-span-2 lg:col-span-1">
          <h2 className="text-xl font-black tracking-widest text-white sm:text-2xl">
            GAME<span className="text-purple-500">HUB</span>
          </h2>

          <p className="mt-3 max-w-xs text-xs leading-5 text-gray-500 sm:text-sm sm:leading-6">
            The ultimate gaming platform for everyone.
            Discover games, join tournaments and compete with others.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-white sm:text-sm">
            Platform
          </h3>

          <ul className="space-y-2">
            {items.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="text-xs text-gray-500 transition-colors duration-200 hover:text-purple-400 sm:text-sm"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-white sm:text-sm">
            Company
          </h3>

          <ul className="space-y-2">
            {companyLinks.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="text-xs text-gray-500 transition-colors duration-200 hover:text-purple-400 sm:text-sm"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-white sm:text-sm">
            Follow Us
          </h3>

          <div className="space-y-2">
            {socialLinks.map((item) => (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs text-gray-500 transition-colors duration-200 hover:text-purple-400 sm:text-sm"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

      </div>

      <div className="border-t border-white/10 py-4 text-center text-[10px] text-gray-600 sm:text-xs">
        © {new Date().getFullYear()} GAMEHUB. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;
