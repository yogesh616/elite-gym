import { Link } from "react-router-dom";

function CTAButtons() {
  return (
    <div className="flex justify-center gap-6 mt-8">
      <Link to="/gallery" className="bg-white text-black rounded-lg px-7 py-3 font-bold shadow hover:scale-105 hover:shadow-xl transition">
        View Gallery
      </Link>
      <Link to="/contact" className="bg-red-600 text-white rounded-lg px-7 py-3 font-bold shadow-lg hover:scale-105 hover:bg-red-800 transition">
        Contact Us
      </Link>
    </div>
  );
}

export default CTAButtons;
