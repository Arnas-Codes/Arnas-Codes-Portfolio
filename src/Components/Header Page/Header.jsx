import Menu from "../../assets/icons/menu.png";
import Close from "../../assets/icons/close.png";
import Light from "../../assets/DarkMode/Light.png";
import Dark from "../../assets/DarkMode/Dark.png";


import { useState, useEffect } from "react";
import { navLinks, socialLinks } from "./HeaderData";

import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";

    const savedTheme = window.localStorage.getItem("theme");
    if (savedTheme) return savedTheme;

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  const [activeWin, setActiveWin] = useState("home");

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Active section tracking
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[id]"));

    const updateActiveSection = () => {
      const triggerPoint = window.scrollY + 140;
      let currentSection = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (triggerPoint >= sectionTop && triggerPoint < sectionBottom) {
          currentSection = section.id;
        }
      });

      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 20;

      if (isAtBottom) {
        currentSection = "contact";
      }

      setActiveWin(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <>
      {/* Header */}
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed left-1/2 top-3 z-50 w-[calc(100%-1rem)] max-w-7xl -translate-x-1/2 sm:top-4 sm:w-[calc(100%-2rem)]"
      >
        <nav className="navbar flex h-14 items-center justify-between px-4 sm:h-16 sm:px-6">
          {/* Logo */}
          <h1 className="text-xl font-bold text-(--text) sm:text-2xl">Arnas</h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const sectionId = link.href.slice(1);
              const isActive = activeWin === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveWin(sectionId)}
                  className={`pb-1 transition-all duration-300 ${
                    isActive
                      ? "border-b-2 border-(--primary) text-(--primary)"
                      : "border-b-2 border-transparent text-(--text-secondary) hover:text-(--primary)"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Social Links + Theme */}
          <div className="hidden md:flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-transform duration-300 hover:scale-110`}
              >
                <img
                  src={social.img}
                  alt={social.name}
                  className={`h-7 w-7 ${social.name === "GitHub" && theme === "dark" ? "dark:invert" : ""}`}
                />
              </a>
            ))}

            <button
              onClick={() =>
                setTheme((prev) => (prev === "dark" ? "light" : "dark"))
              }
              className="p-2 cursor-pointer"
            >
              <img
                className="h-10 w-10"
                src={theme === "dark" ? Light : Dark}
                alt="theme toggle"
              />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full md:hidden"
            aria-label="Toggle navigation menu"
          >
            <img
              src={isOpen ? Close : Menu}
              alt="menu"
              className={`h-8 w-8 ${theme === "dark" && "brightness-0 invert"}`}
            />
          </button>
        </nav>
      </motion.header>

      {isOpen && (
        <button
          type="button"
          aria-label="Close navigation menu"
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 z-40 h-screen w-[min(18rem,85vw)] border-l backdrop-blur-xl transition-transform duration-500 ease-in-out md:hidden overflow-y-auto
        bg-(--glass) border-(--glass-border)
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col items-center gap-8 px-6 pb-10 pt-24">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setIsOpen(false);
                setActiveWin(link.href.slice(1));
              }}
              className={`text-lg transition-colors ${
                activeWin === link.href.slice(1)
                  ? "text-(--primary)"
                  : "text-(--text-secondary)"
              }`}
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

          <button
            onClick={() =>
              setTheme((prev) => (prev === "dark" ? "light" : "dark"))
            }
            className="p-2"
          >
            <img
              className="h-10 w-10"
              src={theme === "dark" ? Light : Dark}
              alt="theme toggle"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
