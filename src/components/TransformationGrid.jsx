const clients = [
  {
    before: "/assets/trans1-before.jpg",
    after: "/assets/trans1-after.jpg",
    name: "Amit Sharma",
    summary: "Lost 22kg & built visible abs in 6 months."
  },
  {
    before: "/assets/trans2-before.jpg",
    after: "/assets/trans2-after.jpg",
    name: "Neha Gupta",
    summary: "Dropped 13kg of fat, now marathon ready."
  },
  {
    before: "/assets/trans3-before.jpg",
    after: "/assets/trans3-after.jpg",
    name: "Rakesh Singh",
    summary: "Bench press doubled, body recomposition."
  }
];

function TransformationGrid() {
  return (
    <section
      className="py-8"
      aria-labelledby="transformations-heading"
      itemScope
      itemType="http://schema.org/CollectionPage"
    >
      <h2 id="transformations-heading" className="text-white text-2xl md:text-4xl font-extrabold mb-8">
        Transformation Stories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {clients.map((c, i) => (
          <article
            key={i}
            tabIndex={0}
            className="bg-black border border-red-600 p-4 rounded-lg shadow-lg flex flex-col items-center transition
              hover:scale-[1.03] hover:shadow-2xl hover:border-green-500 focus:scale-[1.03] focus:shadow-2xl focus:border-green-500 outline-none"
            aria-label={`Transformation story: ${c.name}`}
            itemScope
            itemType="http://schema.org/Person"
          >
            <figure className="flex gap-2 mb-2">
              <img
                src={c.before}
                alt={`${c.name} before transformation: ${c.summary}`}
                loading="lazy"
                decoding="async"
                className="w-24 h-32 object-cover rounded-md brightness-75 transition duration-200 hover:scale-105 hover:brightness-100 focus:scale-105 focus:brightness-100"
                itemProp="image"
                tabIndex={-1}
                draggable={false}
              />
              <img
                src={c.after}
                alt={`${c.name} after transformation: ${c.summary}`}
                loading="lazy"
                decoding="async"
                className="w-24 h-32 object-cover rounded-md brightness-100 shadow-lg transition duration-200 hover:scale-110 hover:shadow-green-500 focus:scale-110 focus:shadow-green-500"
                itemProp="image"
                tabIndex={-1}
                draggable={false}
              />
              <figcaption className="sr-only">
                {c.name} — {c.summary}
              </figcaption>
            </figure>
            <div className="mt-4 text-center">
              <span className="block text-white font-bold" itemProp="name">{c.name}</span>
              <span className="block text-md text-green-400" itemProp="description">{c.summary}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default TransformationGrid;
