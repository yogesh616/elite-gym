import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import MenuLogo from "../assets/menu.svg";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/supplements", label: "Supplements" },
  { to: "/contact", label: "Contact" }
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [blur, setBlur] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setBlur(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Trap focus inside menu when open, allow ESC to close
  useEffect(() => {
    if (!menuOpen) return;
    const handleKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
      if (menuRef.current && e.key === "Tab") {
        // Minimal: cycle focus between all tab-focusable nodes
        const nodes = menuRef.current.querySelectorAll("a,button");
        const first = nodes[0], last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKey, true);
    return () => document.removeEventListener("keydown", handleKey, true);
  }, [menuOpen]);

  return (
    <header>
      {/* Skip link for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only absolute top-2 left-2 bg-black text-white p-2 z-50">
        Skip to main content
      </a>
      <nav
        className={`fixed w-full top-0 z-50 transition py-2 ${blur ? "backdrop-blur-lg" : ""} bg-black/80 border-b border-red-800`}
        aria-label="Primary navigation"
        role="navigation"
        itemScope
        itemType="http://schema.org/Organization"
      >
        <div className="container mx-auto flex items-center justify-between px-4">
          <Link to="/" className="font-extrabold text-white text-2xl tracking-wider flex items-center gap-2" itemProp="url">
            {/* Replace text with actual logo SVG if available */}
            <span itemProp="name">Elite Gym</span>
          </Link>
          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `uppercase font-bold text-white hover:text-red-600 tracking-widest transition${isActive ? " border-b-2 border-red-600" : ""}`
                }
                aria-label={link.label}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Open menu"
            aria-controls="mobile-menu"
            aria-haspopup="true"
            aria-expanded={menuOpen}
            tabIndex={0}
          >
            <img src={MenuLogo} alt="Menu" className="w-8 h-8" />
          </button>
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                ref={menuRef}
                id="mobile-menu"
                key="mobile-menu"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                className="fixed right-0 top-0 h-screen w-2/3 bg-black/95 p-8 flex flex-col gap-8 shadow-lg"
                aria-modal="true"
                role="dialog"
                tabIndex={-1}
              >
                <button
                  className="self-end mb-4 text-2xl text-white"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  autoFocus
                >
                  &times;
                </button>
                {links.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className="text-white uppercase text-lg font-bold tracking-wide border-b pb-2"
                    aria-label={link.label}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
