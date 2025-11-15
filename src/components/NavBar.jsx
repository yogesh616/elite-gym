import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import MenuLogo from "../assets/menu.svg"

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/supplements", label: "Supplements" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [blur, setBlur] = useState(false);

  useEffect(() => {
    const onScroll = () => setBlur(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition py-2 ${blur ? "backdrop-blur-lg" : ""} bg-black/80 border-b border-red-800`}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="font-extrabold text-white text-2xl tracking-wider">GYM LOGO</Link>
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({isActive}) =>
                `uppercase font-bold text-white hover:text-red-600 tracking-widest transition${isActive ? " border-b-2 border-red-600" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Open menu"
        >
         
          <img src={MenuLogo} alt="Menu" className="w-8 h-8"/>
        </button>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            className="fixed right-0 top-0 h-screen w-2/3 bg-black/95 p-8 flex flex-col gap-8 shadow-lg"
          >
            <button className="self-end mb-4 text-2xl text-white" onClick={() => setMenuOpen(false)}>
              &times;
            </button>
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className="text-white uppercase text-lg font-bold tracking-wide border-b pb-2"
              >
                {link.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
}
export default Navbar;
