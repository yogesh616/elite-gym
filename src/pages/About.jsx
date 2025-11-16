import { useEffect } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "../hooks/useInterSectionObserver";

// Assume this is a route page; for meta tags you should use React Helmet or Vite plugin-react
// Example with react-helmet for meta/SEO
import { Helmet } from "react-helmet";

const trainers = [
  { name: "Vinay Rao", photo: "/assets/trainer1.jpg", spec: "Strength, Nutrition", social: "#" },
  { name: "Sonal Jain", photo: "/assets/trainer2.jpg", spec: "HIIT, Fat-loss", social: "#" },
  { name: "Mahesh Singh", photo: "/assets/trainer3.jpg", spec: "Functional PT", social: "#" },
];

const facilities = [
  "Full weights zone (dumbbells 2kg–60kg, power racks)",
  "Cardio deck: treadmills, cycles, ellipticals",
  "Functional training floor",
  "Personal training rooms",
  "Locker & shower facilities",
  "In-gym cafe & supplement bar"
];

function About() {
  const [ref, visible] = useIntersectionObserver();

  // Scroll-to-top for SPA navigation (recommended for SEO pages)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main ref={ref} className="max-w-5xl mx-auto px-4 py-10" itemScope itemType="http://schema.org/LocalBusiness">
      {/* SEO meta tags */}
      <Helmet>
        <title>About | Elite Gym Bharatpur - Trainers & Facilities</title>
        <meta name="description" content="Meet the Elite Gym trainers, explore our high-end facilities, and discover the philosophy that delivers transformation for serious fitness seekers in Bharatpur." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://elite-gym-navy.vercel.app/about" />
      </Helmet>

      <section className="mb-10" itemProp="description">
        <h1 className="text-white text-3xl font-bold mb-8">Our Philosophy</h1>
        <p className="text-lg text-gray-300 mb-8 font-semibold">
          Elite Gym is designed for <span className="text-red-500">serious, goal-focused</span> fitness enthusiasts. Whether you’re starting out or chasing major goals, our team brings science, coaching, and community to ignite your best.
        </p>
      </section>

      <section aria-labelledby="trainers-heading" className="mb-12">
        <h2 id="trainers-heading" className="text-xl font-bold text-white mb-4">Meet Our Trainers</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6" itemScope itemType="http://schema.org/Person">
          {trainers.map((t, idx) => (
            <li key={t.name} className="bg-black border border-red-600 rounded-lg p-4 flex flex-col items-center shadow" itemProp="member" itemScope itemType="http://schema.org/Person">
              <figure className="flex flex-col items-center">
                <img src={t.photo} alt={`Trainer: ${t.name} - ${t.spec}`} loading="lazy" className="rounded-full w-24 h-24 object-cover mb-3 border-2 border-red-400" itemProp="image"/>
                <figcaption>
                  <span itemProp="name" className="text-white font-bold">{t.name}</span>
                </figcaption>
              </figure>
              <div className="text-green-400 font-medium" itemProp="jobTitle">{t.spec}</div>
              {/* Replace "#" with real URLs or hide broken links */}
              {t.social !== "#" && (
                <a href={t.social} className="text-blue-400 text-sm mt-2 hover:underline" rel="noopener noreferrer" target="_blank" itemProp="sameAs">
                  Social Profile
                </a>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="facilities-heading" className="mb-12">
        <h2 id="facilities-heading" className="text-xl font-bold text-white mb-4">Facilities</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4" itemScope itemType="http://schema.org/LocalBusiness">
          {facilities.map((fac, idx) => (
            <li key={idx} className="flex items-center gap-3 text-gray-300 font-semibold" itemProp="amenityFeature">
              <span className="inline-block w-2 h-2 bg-red-500 rounded-full"></span>
              {fac}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default About;
