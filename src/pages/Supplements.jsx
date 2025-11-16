import { useEffect } from "react";
import { Helmet } from "react-helmet";

const products = [
  {
    img: "/assets/whey.jpg",
    brand: "ON Gold Standard",
    category: "Muscle Gain",
    price: "₹4,200",
    usp: "100% Whey Protein Isolate, high absorption",
    badge: "Available at Gym"
  },
  {
    img: "/assets/creatine.jpg",
    brand: "MuscleBlaze",
    category: "Strength",
    price: "₹1,299",
    usp: "100% Creatine, strength & endurance",
    badge: "Available at Gym"
  },
  {
    img: "/assets/fatburner.jpg",
    brand: "GNC Ripped",
    category: "Fat Burner",
    price: "₹2,499",
    usp: "Thermogenic blend for fat loss",
    badge: "Available at Gym"
  },
];

function Supplements() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main
      className="max-w-5xl mx-auto px-4 py-10"
      aria-labelledby="supplements-heading"
      itemScope
      itemType="http://schema.org/LocalBusiness"
    >
      <Helmet>
        <title>Supplements | Elite Gym Bharatpur — Buy Original Protein & Fat Burner</title>
        <meta name="description" content="Shop certified supplements at Elite Gym Bharatpur. ON Whey, MuscleBlaze Creatine, GNC Fat Burners are available direct at the gym. All products are authentic and sourced directly." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://elite-gym-navy.vercel.app/supplements" />
      </Helmet>

      <h1 className="text-white text-3xl font-bold mb-8 text-center tracking-tight" id="supplements-heading">
        Supplements For Gym Members
      </h1>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8" aria-label="Gym Supplement Products">
        {products.map((p, i) => (
          <article
            key={i}
            tabIndex={0}
            itemScope
            itemType="http://schema.org/Product"
            className="group bg-gradient-to-b from-black via-gray-900 to-black border-2 border-red-600 rounded-2xl shadow-xl flex flex-col items-center p-7 transition
              hover:scale-[1.03] focus:scale-[1.03] hover:shadow-2xl hover:border-green-500 focus:border-green-500 outline-none"
            aria-label={`${p.brand} supplement product`}
          >
            <figure>
              <img
                src={p.img}
                alt={`${p.brand} ${p.category} - ${p.usp}`}
                loading="lazy"
                decoding="async"
                className="w-28 h-28 mb-3 object-contain rounded-xl shadow-lg
                  transition duration-200 group-hover:scale-110 focus:scale-110 group-hover:brightness-110 focus:brightness-110 group-hover:shadow-green-400 focus:shadow-green-400"
                itemProp="image"
              />
              <figcaption className="sr-only">
                {`${p.brand} for ${p.category} — ${p.usp}`}
              </figcaption>
            </figure>
            <span className="font-bold text-white text-lg mb-1 text-center" itemProp="name">{p.brand}</span>
            <span className="text-green-400 font-semibold mb-1" itemProp="category">{p.category}</span>
            <span className="text-white font-medium mb-2" itemProp="description">{p.usp}</span>
            <span className="text-lg font-bold text-red-500 mb-2" itemProp="offers" itemScope itemType="http://schema.org/Offer">
              <meta itemProp="priceCurrency" content="INR" />
              <span itemProp="price">{p.price.replace(/[^\d]/g, "")}</span> <span className="ml-1 text-xs text-white">INR</span>
            </span>
            <span className="flex items-center gap-1 bg-green-500/90 text-white rounded-full px-3 py-1 text-xs font-bold shadow
              transition group-hover:scale-110 group-hover:shadow-green-400 group-focus:scale-110 group-focus:shadow-green-400"
              itemProp="availability"
              content="https://schema.org/InStock"
            >
              <svg className="w-3 h-3 mr-1 fill-white" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"/><path d="M5 10l3 3 7-7" stroke="white" strokeWidth="2" fill="none"/></svg>
              {p.badge}
            </span>
          </article>
        ))}
      </section>

      <footer className="mt-10 text-center text-white font-bold text-lg" itemProp="description">
        <span className="block mb-2">All products sourced directly &amp; are original. NO fake supplements, gym authenticity assured.</span>
        <span className="block text-sm text-gray-300">Available brands: ON, MuscleBlaze, GNC, Universal.</span>
      </footer>
    </main>
  );
}

export default Supplements;
