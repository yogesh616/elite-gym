import { useIntersectionObserver } from "../hooks/useInterSectionObserver";

const galleryImgs = [
  "/assets/gallery1.jpg",
  "/assets/gallery2.jpg",
  "/assets/gallery3.jpg",
  // Add up to 12+
];
const videos = [{ src: "/assets/gym-tour.mp4", alt: "Gym Tour" }];

function Gallery() {
  const [ref, visible] = useIntersectionObserver(); // (OPTIONAL: you could drop this too)

  return (
    <section
      ref={ref}
      className="max-w-5xl mx-auto px-4 py-8"
      aria-label="Elite Gym Gallery"
    >
      <h2 className="text-white text-3xl font-bold mb-10">Gallery</h2>
      <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImgs.map((img, i) => (
          <div key={i} className="w-full">
            <img
              src={img}
              alt={`Elite Gym Gallery ${i + 1}`}
              loading="lazy"
              decoding="async"
              className="w-full aspect-[4/3] object-cover rounded-lg shadow-md border border-gray-700 mb-4"
            />
          </div>
        ))}
      </div>
      <div className="my-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {videos.map((video, i) => (
          <div key={i} className="relative">
            <video
              src={video.src}
              className="rounded-xl w-full aspect-video shadow-xl border border-gray-700"
              autoPlay
              muted
              loop
              playsInline
              loading="lazy"
              aria-label={video.alt}
              poster="/assets/video-poster.jpg"
            >
              <track kind="captions" />
            </video>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
