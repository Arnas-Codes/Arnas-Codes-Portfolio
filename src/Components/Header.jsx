import { useState, useEffect } from "react";
import Menu from "../assets/icons/menu.png";
import Close from "../assets/icons/close.png";
import Light from "../assets/DarkMode/Light.png";
import Dark from "../assets/DarkMode/Dark.png";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "GitHub",
    img: "https://github.com/favicon.ico",
    href: "https://github.com",
  },
  {
    name: "LinkedIn",
    img: "https://linkedin.com/favicon.ico",
    href: "https://linkedin.com",
  },
  {
    name: "Twitter",
    img: "https://twitter.com/favicon.ico",
    href: "https://twitter.com",
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      {/* Header */}
      <header className="fixed top-4 left-1/2 z-50 w-[95%] max-w-7xl -translate-x-1/2">
        <nav className="navbar flex h-16 items-center justify-between px-6">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-white">Arnas</h1>

          {/* Desktop Navigation */}
          <div className="hidden gap-8 md:flex items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-(--text-secondary) hover:text-(--primary) transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links & Theme Toggle */}
          <div className="hidden gap-4 md:flex items-center">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110"
              >
                <img src={social.img} alt={social.name} className="h-7 w-7" />
              </a>
            ))}
            <div>
              {theme === "dark" ? (
                <button
                  onClick={() => setTheme("light")}
                  className="cursor-pointer p-2"
                >
                  <img className="h-10 w-10" src={Light} alt="Theme" />
                </button>
              ) : (
                <button
                  onClick={() => setTheme("dark")}
                  className="cursor-pointer p-2"
                >
                  <img className="h-10 w-10" src={Dark} alt="Theme" />
                </button>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            <img
              src={isOpen ? Close : Menu}
              alt="menu"
              className="h-8 w-8 brightness-0 invert"
            />
          </button>
        </nav>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={`bg-(--glass) border-(--glass-border) fixed top-0 right-0 z-40 h-screen w-72 border-l backdrop-blur-xl transition-transform duration-500 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center gap-8 pt-28">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-(--text-secondary) hover:text-(--primary) text-lg transition-colors"
            >
              {link.name}
            </a>
          ))}

          <div className="mt-6 flex gap-5">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={social.img} alt={social.name} className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
