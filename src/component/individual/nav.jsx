import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeItem, setActiveItem] = useState(
    () => localStorage.getItem("activeItem") || "Home",
  );

  const handleActiveItem = (item) => {
    setActiveItem(item);
    localStorage.setItem("activeItem", item);
  };

  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav
      className="fixed top-4 inset-x-0 mx-auto z-50
    flex w-[90%] max-w-5xl
    items-center justify-between
    rounded-full border border-default
    bg-surface px-6 py-3
    shadow-[0_10px_30px_rgba(0,0,0,0.15)]
    backdrop"
    >
      <a
        href="#home"
        onClick={() => handleActiveItem("Home")}
        className="text-2xl font-bold
          text-accent transition-opacity duration-300
          hover:opacity-80 tracking-wider"
      >
        Gaurav<span className="text-primary">.</span>
      </a>

      <ul className="hidden sm:flex items-center gap-4 sm:gap-10">
        {navItems.map(({ label, href }) => {
          const isActive = activeItem === label;

          return (
            <li key={label}>
              <a
                href={href}
                onClick={() => handleActiveItem(label)}
                aria-current={isActive ? "location" : undefined}
                className={`relative block py-2 text-sm font-medium
                  transition-all duration-300 ease-in-out 
                  hover:-translate-y-0.5 hover:text-primary
                  ${isActive ? "text-primary" : "text-main"}`}
              >
                {label}

                <span
                  className={`absolute left-1/2 -translate-x-1 -bottom-0.5 
                    h-0.5  rounded-full
                    bg-primary transition-all duration-300
                    ease-in-out ${
                      isActive ? "w-4 opacity-100" : "w-0 opacity-0"
                    }`}
                />
              </a>
            </li>
          );
        })}
      </ul>

      {/* Mobile menu toggle */}
      <button
        type="button"
        className="sm:hidden flex items-center justify-center
    h-10 w-10 rounded-full
    text-main transition-all duration-300
    hover:bg-primary/10 hover:text-primary
    focus:outline-none focus:ring-2 focus:ring-primary/40"
        onClick={() => setMobileMenu(!mobileMenu)}
      >
        {mobileMenu ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile dropdown */}
      <div
        className={`absolute top-[calc(100%+12px)] left-0 right-0
    sm:hidden overflow-hidden rounded-2xl
    border border-default bg-surface
    shadow-[0_12px_35px_rgba(0,0,0,0.18)]
    transition-all duration-300 ease-in-out
    ${
      mobileMenu
        ? "visible translate-y-0 opacity-100"
        : "invisible -translate-y-2 opacity-0 pointer-events-none"
    }`}
      >
        <ul className="flex flex-col gap-1 p-3">
          {navItems.map(({ label, href }) => {
            const isActive = activeItem === label;

            return (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => {
                    handleActiveItem(label);
                    setMobileMenu(false);
                  }}
                  className={`flex items-center justify-between
              rounded-xl px-4 py-3 text-sm font-medium
              transition-all duration-200
              ${
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-main hover:bg-primary/5 hover:text-primary"
              }`}
                >
                  <span>{label}</span>

                  {isActive && (
                    <span className="h-2 w-2 rounded-full bg-primary" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
