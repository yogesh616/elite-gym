import { motion } from "framer-motion";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

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

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="max-w-5xl mx-auto px-4 py-10"
    >
      <h2 className="text-white text-3xl font-bold mb-8">Our Philosophy</h2>
      <p className="text-lg text-gray-300 mb-8 font-semibold">
        Elite Gym is designed for <span className="text-red-500">serious, goal-focused</span> fitness enthusiasts. Whether you’re starting out or chasing major goals, our team brings science, coaching, and community to ignite your best.
      </p>
      <h3 className="text-xl font-bold text-white mb-4">Trainers</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {trainers.map((t, idx) => (
          <motion.div key={t.name} initial={{ opacity: 0, y: 30 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 + idx * 0.1 }}
            className="bg-black border border-red-600 rounded-lg p-4 flex flex-col items-center shadow"
          >
            <img src={t.photo} alt={t.name} loading="lazy" className="rounded-full w-24 h-24 object-cover mb-3 border-2 border-red-400" />
            <div className="text-white font-bold">{t.name}</div>
            <div className="text-green-400 font-medium">{t.spec}</div>
            <a href={t.social} className="text-blue-400 text-sm mt-2 hover:underline">Social</a>
          </motion.div>
        ))}
      </div>
      <h3 className="text-xl font-bold text-white mb-4">Facilities</h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {facilities.map((fac, idx) => (
          <li key={idx} className="flex items-center gap-3 text-gray-300 font-semibold">
            <span className="inline-block w-2 h-2 bg-red-500 rounded-full"></span>
            {fac}
          </li>
        ))}
      </ul>
    </motion.section>
  );
}

export default About;
