import Link from "next/link";

function Footer() {
  const items = [
    { name: "Games", id: 1, href: "/games" },
    { name: "Tournaments", id: 2, href: "/tournaments" },
    { name: "Community", id: 3, href: "/community" },
  ];

  const companyLinks = [
    { name: "About", id: 1, href: "/about" },
    { name: "Contact", id: 3, href: "/contact" },
  ];

  const socialLinks = [
    { name: "X", id: 1, href: "https://x.com" },
    { name: "Discord", id: 2, href: "https://discord.com" },
    { name: "Twitch", id: 3, href: "https://twitch.tv" },
  ];

  return (
    <>
      <footer className="min-h-[180px] border-t border-gray-700 border-b flex justify-around text-left leading-9">

        <div className="mt-4">
          <h2 className="text-white text-2xl">🎮GAME HUB</h2>
          <p className="text-gray-300 text-sm">
            The ultimate gaming platform for everyone
          </p>
        </div>

        <div className="mt-4">
          <h2 className="text-white text-lg">Platform</h2>

          <ul>
            {items.map((item) => (
              <li key={item.id} className="mt-1">
                <Link
                  href={item.href}
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <h2 className="text-white text-lg">Company</h2>
          <ul>
            {companyLinks.map((item) => (
              <li key={item.id} className="mt-1">
                <Link
                  href={item.href}
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <h2 className="text-white text-lg">Follow Us</h2>

          {socialLinks.map((item) => (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-400 text-sm hover:text-white transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
      </footer>
      <div className="text-gray-400 m-2 text-center">
        ©{new Date().getFullYear()} GAME HUB. All rights reserved.
      </div>
    </>
  );
}

export default Footer;