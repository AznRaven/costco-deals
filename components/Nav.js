import Link from "next/link";

const Nav = () => {
  const links = [
    { href: "/s1", text: "Nov 1 - 17" },
    { href: "/s2", text: "Nav 18 - Dec 2" },
    { href: "/s3", text: "Nov 28" },
    { href: "/s4", text: "Nav 29 - Dec 2" },
    { href: "/s5", text: "Dec 2" },
  ];
  return (
    <div className="sticky top-0 bg-white shadow-md py-2">
      <div className="text-center text-4xl">Costco Holidy Savings 2024</div>
      <nav className="flex text-center gap-10 justify-center py-2">
        {links.map((link, index) => (
          <Link key={index} href={link.href}>
            {link.text}
          </Link>
        ))}
      </nav>
      <div className="font-bold text-2xl text-center">* Online prices may be higher</div>

    </div>
  );
};

export default Nav;
