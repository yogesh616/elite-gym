import React, { useState, useEffect } from "react";
import { Suspense, lazy } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";

// Code splitting: lazy load components
const HeroBanner = lazy(() => import("../components/HeroBanner"));
const OwnerCard = lazy(() => import("../components/OwnerCard"));
const TransformationGrid = lazy(() => import("../components/TransformationGrid"));
const CTAButtons = lazy(() => import("../components/CTAButtons"));

const assetsToLoad = [
  // ... (your asset list)
];

function Home() {
  const [loadedCount, setLoadedCount] = useState(0);
  const [allReady, setAllReady] = useState(false);

  useEffect(() => {
    if (loadedCount >= assetsToLoad.length) setAllReady(true);
  }, [loadedCount]);

  useEffect(() => {
    assetsToLoad.forEach((src) => {
      const img = new window.Image();
      img.src = src;
      img.onload = () => setLoadedCount(l => l + 1);
      img.onerror = () => setLoadedCount(l => l + 1);
    });
  }, []);

  // Animated loader...
  const Loader = (
    <div className="fixed inset-0 z-[999] bg-black flex flex-col items-center justify-center">
      <motion.div
        initial={{ scale: 0.7, rotate: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
        className="mb-6"
      >
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
    <>
      <Helmet>
        <title>Elite Gym Bharatpur | Modern Fitness Training, Transformation, Top Trainers</title>
        <meta name="description" content="Elite Gym Bharatpur: The #1 gym for athletes and transformation. Modern facilities, certified trainers, client stories, supplement counter, and quick contact. Start your fitness journey here." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://elite-gym-navy.vercel.app/" />
        {/* You can add OpenGraph/Twitter meta if you want rich sharing */}
      </Helmet>
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
          <main
            key="main"
            className="min-h-screen bg-black flex flex-col"
            itemScope
            itemType="http://schema.org/LocalBusiness"
            aria-label="Elite Gym Bharatpur Home"
          >
            <Suspense fallback={Loader}>
              <HeroBanner />
            </Suspense>
            <section
              className="max-w-6xl mx-auto px-4 w-full py-8 grid place-items-center"
              aria-label="Gym Welcome Intro"
              itemProp="description"
            >
              <h1 className="text-white text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
                Welcome to Elite Gym
              </h1>
              <p className="text-lg text-gray-200 font-semibold max-w-xl text-center">
                <span className="font-bold text-red-600">*</span>Serious fitness starts here.<span className="font-bold text-red-600">*</span> Elite Gym gives you access to world-class trainers, next-gen equipment, and a transformation-first environment where clients crush their goals daily.
              </p>
            </section>
            <Suspense fallback={Loader}>
              <OwnerCard />
            </Suspense>
            <Suspense fallback={Loader}>
              <TransformationGrid />
            </Suspense>
            <Suspense fallback={Loader}>
              <CTAButtons />
            </Suspense>
          </main>
        )}
      </AnimatePresence>
    </>
  );
}

export default Home;
