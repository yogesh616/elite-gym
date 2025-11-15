import { useIntersectionObserver } from "../hooks/useIntersectionObserver"; // Not required here, can remove

function OwnerCard() {
  return (
    <section
      className="max-w-xl w-full mx-auto my-10 flex flex-col sm:flex-row items-center gap-5 sm:gap-12 p-6 bg-black/90 rounded-2xl shadow-lg border border-red-600"
      role="region"
      aria-labelledby="owner-card-heading"
      tabIndex={-1}
    >
      <img
        src="/assets/owner.jpg"
        alt="Rajesh Rana, Elite Gym Owner"
        loading="lazy"
        decoding="async"
        className="rounded-full w-32 h-32 sm:w-44 sm:h-44 border-4 border-red-600 object-cover shadow-xl transition-transform duration-200"
      />
      <div className="flex-1 min-w-0 text-left">
        <h3 id="owner-card-heading" className="text-white font-extrabold text-2xl md:text-3xl mb-1 tracking-tight leading-tight">
          Rajesh Rana
        </h3>
        <p className="text-gray-300 font-medium text-lg mb-2">
          Founder, coach, transformation specialist. Built Elite Gym to redefine fitness results in Bharatpur.
        </p>
        <p className="text-gray-400 text-base mb-2">
          Passionate about pushing people beyond plateaus—Rajesh blends science, discipline, and pure motivation.
        </p>
      </div>
    </section>
  );
}

export default OwnerCard;
