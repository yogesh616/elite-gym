import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const products = [
  { img: "/assets/whey.jpg", brand: "ON Gold Standard", category: "Muscle Gain", price: "₹4,200", usp: "100% Whey", badge: "Available at Gym" },
  { img: "/assets/creatine.jpg", brand: "MuscleBlaze", category: "Strength", price: "₹1,299", usp: "100% Creatine", badge: "Available at Gym" },
  { img: "/assets/fatburner.jpg", brand: "GNC Ripped", category: "Fat Burner", price: "₹2,499", usp: "Thermogenic", badge: "Available at Gym" },
];

function Supplements() {
  const [ref] = useIntersectionObserver();

  return (
    <section
      ref={ref}
      className="max-w-5xl mx-auto px-4 py-10"
      aria-label="Supplements available"
    >
      <h2 className="text-white text-3xl font-bold mb-8 text-center tracking-tight">Supplements</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((p, i) => (
          <div
            key={i}
            tabIndex={0}
            className="group bg-gradient-to-b from-black via-gray-900 to-black border-2 border-red-600 rounded-2xl shadow-xl flex flex-col items-center p-7 transition
              hover:scale-[1.03] focus:scale-[1.03] hover:shadow-2xl hover:border-green-500 focus:border-green-500 outline-none"
            aria-label={`${p.brand} supplement product`}
          >
            <img
              src={p.img}
              alt={`${p.brand} - ${p.category}`}
              loading="lazy"
              decoding="async"
              className="w-28 h-28 mb-3 object-contain rounded-xl shadow-lg
                transition duration-200 group-hover:scale-110 focus:scale-110 group-hover:brightness-110 focus:brightness-110 group-hover:shadow-green-400 focus:shadow-green-400"
            />
            <div className="font-bold text-white text-lg mb-1 text-center">{p.brand}</div>
            <div className="text-green-400 font-semibold mb-1">{p.category}</div>
            <div className="text-white font-medium mb-2">{p.usp}</div>
            <div className="text-lg font-bold text-red-500 mb-2">{p.price}</div>
            <span className="flex items-center gap-1 bg-green-500/90 text-white rounded-full px-3 py-1 text-xs font-bold shadow
              transition group-hover:scale-110 group-hover:shadow-green-400 group-focus:scale-110 group-focus:shadow-green-400">
              <svg className="w-3 h-3 mr-1 fill-white" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"/><path d="M5 10l3 3 7-7" stroke="white" strokeWidth="2" fill="none"/></svg>
              {p.badge}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center text-white font-bold text-lg">
        <span className="block mb-2">All products sourced directly & are original.</span>
        <span className="block text-sm text-gray-300">Authenticity assured: ON, MB, GNC, Universal.</span>
      </div>
    </section>
  );
}

export default Supplements;
