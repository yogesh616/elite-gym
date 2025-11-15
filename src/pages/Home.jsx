import React, { useState, useEffect } from "react";
import { Suspense, lazy } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

// Code splitting: lazy load components
const HeroBanner = lazy(() => import("../components/HeroBanner"));
const OwnerCard = lazy(() => import("../components/OwnerCard"));
const TransformationGrid = lazy(() => import("../components/TransformationGrid"));
const CTAButtons = lazy(() => import("../components/CTAButtons"));

// List assets to preload (example – add your images/videos here)
const assetsToLoad = [
  "/assets/gym-hero-1.jpg",
  "/assets/gym-hero-2.jpg",
  "/assets/gym-hero-3.jpg",
  "/assets/owner.jpg",
  "/assets/trans1-before.jpg",
  "/assets/trans1-after.jpg",
  "/assets/trans2-before.jpg",
  "/assets/trans2-after.jpg",
  "/assets/trans3-before.jpg",
  "/assets/trans3-after.jpg",
  "/assets/whey.jpg",
  "/assets/creatine.jpg",
  "/assets/gallery1.jpg",
  "/assets/gallery2.jpg",
  "/assets/gallery3.jpg",
  "/assets/gym-tour.mp4",
  "/assets/fatburner.jpg",
  "/assets/video-poster.jpg",
  // add other image paths as needed
];

function Home() {
  // Track when assets finish loading
  const [loadedCount, setLoadedCount] = useState(0);
  const [allReady, setAllReady] = useState(false);

  // Intersection observer for intro block
  const [introRef, introVisible] = useIntersectionObserver();

  useEffect(() => {
    if (loadedCount >= assetsToLoad.length) setAllReady(true);
  }, [loadedCount]);

  // Preload all images
  useEffect(() => {
    assetsToLoad.forEach((src) => {
      const img = new window.Image();
      img.src = src;
      img.onload = () => setLoadedCount(l => l + 1);
      img.onerror = () => setLoadedCount(l => l + 1); // Count error as loaded so user isn’t stuck
    });
    // If you want video preload, use similar method for poster/preload
  }, []);

  // Animated logo loader (style it however you want)
  const Loader = (
    <div className="fixed inset-0 z-[999] bg-black flex flex-col items-center justify-center">
      <motion.div
        initial={{ scale: 0.7, rotate: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
        className="mb-6"
      >
        {/* Replace with your actual gym logo/component */}
        <span className="font-extrabold text-5xl text-red-600">ELITE GYM</span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0.7, y: 15 }}
        animate={{ opacity: 1, y: -10 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.9 }}
      >
        <span className="text-white text-lg font-semibold animate-pulse">Loading assets…</span>
      </motion.div>
      <span className="mt-8 text-gray-500">{Math.min(loadedCount, assetsToLoad.length)} / {assetsToLoad.length}</span>
    </div>
  );

  return (
    <AnimatePresence>
      {!allReady && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          {Loader}
        </motion.div>
      )}
      {allReady && (
        <motion.section
          key="main"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 32 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="min-h-screen bg-black flex flex-col"
        >
          <Suspense fallback={<div className="w-full h-32 flex items-center justify-center"><span className="text-white font-bold animate-pulse text-lg">Loading…</span></div>}>
            <HeroBanner />
          </Suspense>
          <main className="max-w-6xl mx-auto px-4 w-full">
            <section
              ref={introRef}
              className={`py-8 grid place-items-center ${introVisible ? "animate-fade-in-up" : ""}`}
              aria-label="Gym Welcome Intro"
            >
              <h2 className="text-white text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
                Welcome to Elite Gym
              </h2>
              <p className="text-lg text-gray-200 font-semibold max-w-xl text-center">
                <span className="font-bold text-red-600">*</span>Serious fitness starts here.<span className="font-bold text-red-600">*</span> Elite Gym gives you access to world-class trainers, next-gen equipment, and a transformation-first environment where clients crush their goals daily.
              </p>
            </section>
            <Suspense fallback={<div className="w-full h-32 flex items-center justify-center"><span className="text-white font-bold animate-pulse text-lg">Loading…</span></div>}>
              <OwnerCard />
            </Suspense>
            <Suspense fallback={<div className="w-full h-32 flex items-center justify-center"><span className="text-white font-bold animate-pulse text-lg">Loading…</span></div>}>
              <TransformationGrid />
            </Suspense>
            <Suspense fallback={<div className="w-full h-32 flex items-center justify-center"><span className="text-white font-bold animate-pulse text-lg">Loading…</span></div>}>
              <CTAButtons />
            </Suspense>
          </main>
        </motion.section>
      )}
    </AnimatePresence>
  );
}

export default Home;
