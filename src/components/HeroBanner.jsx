import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";

const heroImages = [
  {
    src: "/assets/gym-hero-1.jpg",
    alt: "High-energy group fitness class at Elite Gym"
  },
  {
    src: "/assets/gym-hero-2.jpg",
    alt: "Elite Gym weight zone with premium equipment"
  },
  {
    src: "/assets/gym-hero-3.jpg",
    alt: "Personal trainer guiding client through intense set"
  }
];

const heroText = {
  heading: "Push Beyond Limits",
  sub: "Every rep, every set, every sweat—transformation is earned."
};

function HeroBanner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIndex((i) => (i + 1) % heroImages.length), 5000);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <header
      className="relative w-full h-[60vh] md:h-[80vh] flex items-stretch overflow-hidden"
      aria-labelledby="hero-heading"
      itemScope
      itemType="http://schema.org/LocalBusiness"
    >
      <Helmet>
        <title>Elite Gym Bharatpur | Push Beyond Limits</title>
        <meta name="description" content="Elite Gym Bharatpur: Modern fitness gym with top trainers and transformation stories. Join now for world-class workouts and community." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://your-vercel-app-url/" />
        {/* OpenGraph for rich sharing */}
        <meta property="og:title" content="Elite Gym Bharatpur | Push Beyond Limits" />
        <meta property="og:description" content="Elite Gym Bharatpur: Modern fitness gym with top trainers and transformation stories. Join now for world-class workouts and community." />
        <meta property="og:image" content={heroImages[0].src} />
        <meta property="og:url" content="https://your-vercel-app-url/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <AnimatePresence initial={false}>
        <motion.img
          key={heroImages[index].src}
          src={heroImages[index].src}
          alt={heroImages[index].alt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ zIndex: 1 }}
          itemProp="image"
        />
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="absolute left-0 top-0 w-full h-full flex flex-col items-center justify-center bg-black/70 z-10"
      >
        <h1
          className="text-white text-4xl xs:text-5xl md:text-7xl font-black mb-3 md:mb-6 tracking-tight leading-tight shadow-xl"
          id="hero-heading"
          itemProp="name"
        >
          {heroText.heading}
        </h1>
        <p className="text-white text-base xs:text-xl md:text-3xl font-bold mb-6 md:mb-10 text-center max-w-2xl drop-shadow" itemProp="description">
          {heroText.sub}
        </p>
        <a
          href="#contact-section"
          className="bg-red-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl shadow-lg text-xl font-bold focus:outline-none focus:ring-2 focus:ring-red-400 hover:scale-105 hover:bg-red-700 active:scale-95 transition transform"
          tabIndex={0}
          aria-label="Contact Elite Gym and join now"
          title="Contact Elite Gym"
          itemProp="email"
        >
          Join Now
        </a>
      </motion.div>
      {/* Accessible carousel controls */}
      <nav className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 z-20" aria-label="Hero image carousel controls">
        {heroImages.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full border border-white duration-200 ${
              index === i ? "bg-red-600 shadow-lg" : "bg-white/40"
            }`}
            onClick={() => setIndex(i)}
            aria-label={`Show slide ${i + 1}: ${heroImages[i].alt}`}
            title={heroImages[i].alt}
          />
        ))}
      </nav>
    </header>
  );
}

export default HeroBanner;
