import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
// Remove Framer Motion for contact entry—it’s not needed for SEO.

function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  // Open status calculation (for badge)
  const now = new Date();
  const hours = now.getHours();
  const open = hours >= 5 && hours < 22;

  // Scroll to top on mount (good SPA hygiene)
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main
      id="contact-section"
      className="max-w-4xl mx-auto px-4 py-10"
      itemScope
      itemType="http://schema.org/LocalBusiness"
      aria-labelledby="contact-heading"
    >
      {/* SEO meta tags */}
      <Helmet>
        <title>Contact | Elite Gym Bharatpur — Hours, Map, Phone, WhatsApp</title>
        <meta name="description" content="Contact Elite Gym Bharatpur. View timings, address, WhatsApp/call links and location map. Copy directions and reach out via our simple inquiry form." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://elite-gym-navy.vercel.app/contact" />
      </Helmet>

      <h1 className="text-white text-3xl font-bold mb-8" id="contact-heading">Contact & Timings</h1>
      <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Info block */}
        <section
          className="bg-black rounded-lg p-6 shadow-lg"
          aria-labelledby="contact-info-heading"
        >
          <h2 className="sr-only" id="contact-info-heading">Gym Contact Info and Location</h2>
          <div className="flex items-center gap-2 mb-2">
            <span
              className={`inline-block px-3 py-1 rounded-full font-bold text-xs ${open ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}
              itemProp="openingHoursSpecification"
            >
              {open ? "Open Now" : "Closed"}
            </span>
            <span className="text-white font-bold" itemProp="openingHours">
              5am – 10pm (Everyday)
            </span>
          </div>
          <address className="mb-2 not-italic text-white">
            <div className="mb-2 font-bold">Phone:
              <a href="tel:+919876543210" className="text-blue-400 font-bold hover:underline ml-2" itemProp="telephone" aria-label="Call Elite Gym">
                +91-9876543210
              </a>
              {" | "}
              <a href="https://wa.me/+919876543210" target="_blank" rel="noopener noreferrer" className="text-green-400 font-bold hover:underline ml-2" aria-label="WhatsApp Elite Gym" itemProp="contactOption">
                WhatsApp
              </a>
            </div>
            <div className="mb-2 font-bold">
              Address:
              <span className="text-white ml-2" itemProp="streetAddress">NH-21, Bharatpur, Rajasthan</span>
              <button
                type="button"
                className="ml-2 px-2 py-1 bg-gray-800 text-white font-bold rounded text-xs hover:bg-gray-700"
                aria-label="Copy gym address to clipboard"
                onClick={() => navigator.clipboard.writeText("NH-21, Bharatpur, Rajasthan")}
              >
                Copy
              </button>
            </div>
          </address>
          {/* Map, SEO-optimized as <figure>/<figcaption> */}
          <figure className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.204714944919!2d77.49267571504418!3d27.217906782992353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3973d995d411e06d%3A0x173e7b202688728c!2sBharatpur!5e0!3m2!1sen!2sin!4v1636646449660!5m2!1sen!2sin"
              className="rounded-lg w-full h-40 border-0"
              loading="lazy"
              allowFullScreen=""
              aria-label="Map: Elite Gym, Bharatpur, Rajasthan"
              title="Elite Gym Location on Google Maps"
            ></iframe>
            <figcaption className="sr-only">
              Find Elite Gym Bharatpur on Google Maps
            </figcaption>
          </figure>
        </section>

        {/* Right: Contact Form */}
        <section aria-labelledby="contact-form-heading">
          <h2 id="contact-form-heading" className="sr-only">Contact Form</h2>
          <form
            className="bg-black rounded-lg p-6 shadow-lg flex flex-col gap-3"
            autoComplete="off"
            itemScope
            itemType="http://schema.org/ContactPoint"
            // Note: Needs backend or Netlify Form / EmailJS for actual submission, this is just the UI
            aria-label="Send us a message"
          >
            <label htmlFor="cf-name" className="text-white font-semibold">Name</label>
            <input
              id="cf-name"
              type="text"
              name="name"
              value={form.name}
              placeholder="Your Name"
              onChange={e => setForm({ ...form, name: e.target.value })}
              className="bg-gray-800 text-white rounded px-4 py-2 border border-gray-700 focus:outline-none"
              required
              itemProp="name"
            />
            <label htmlFor="cf-phone" className="text-white font-semibold">Phone</label>
            <input
              id="cf-phone"
              type="tel"
              name="phone"
              value={form.phone}
              placeholder="Phone"
              onChange={e => setForm({ ...form, phone: e.target.value })}
              className="bg-gray-800 text-white rounded px-4 py-2 border border-gray-700 focus:outline-none"
              required
              itemProp="telephone"
            />
            <label htmlFor="cf-message" className="text-white font-semibold">Message</label>
            <textarea
              id="cf-message"
              name="message"
              value={form.message}
              placeholder="Message"
              onChange={e => setForm({ ...form, message: e.target.value })}
              className="bg-gray-800 text-white rounded px-4 py-2 border border-gray-700 focus:outline-none"
              required
              itemProp="description"
            />
            <button type="submit" className="bg-red-600 text-white font-bold rounded px-6 py-2 hover:bg-red-700 transition">
              Submit
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}

export default Contact;
