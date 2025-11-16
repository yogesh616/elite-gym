import { Link } from "react-router-dom";

function CTAButtons() {
  return (
    <nav
      className="flex justify-center gap-6 mt-8"
      aria-label="Gym landing page navigation"
    >
      <Link
        to="/gallery"
        role="button"
        tabIndex={0}
        title="View gym gallery with photos and transformation stories"
        className="bg-white text-black rounded-lg px-7 py-3 font-bold shadow hover:scale-105 hover:shadow-xl transition focus:outline-none"
        aria-label="View gym gallery"
      >
        View Gallery
      </Link>
      <Link
        to="/contact"
        role="button"
        tabIndex={0}
        title="Contact Elite Gym for times, location, directions, WhatsApp, and inquiry"
        className="bg-red-600 text-white rounded-lg px-7 py-3 font-bold shadow-lg hover:scale-105 hover:bg-red-800 transition focus:outline-none"
        aria-label="Contact Elite Gym"
      >
        Contact Us
      </Link>
    </nav>
  );
}

export default CTAButtons;
