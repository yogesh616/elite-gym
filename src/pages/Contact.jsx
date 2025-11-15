import { motion } from "framer-motion";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useState } from "react";

function Contact() {
  const [ref, visible] = useIntersectionObserver();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  // Dummy open status
  const now = new Date();
  const hours = now.getHours();
  const open = hours >= 5 && hours < 22;

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="max-w-4xl mx-auto px-4 py-10"
      id="contact-section"
    >
      <h2 className="text-white text-3xl font-bold mb-8">Contact & Timings</h2>
      <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-black rounded-lg p-6 shadow-lg">
          <div className="flex items-center gap-2 mb-2">
            <span className={`inline-block px-3 py-1 rounded-full font-bold text-xs ${open ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
              {open ? "Open Now" : "Closed"}
            </span>
            <span className="text-white font-bold">5am – 10pm (Everyday)</span>
          </div>
          <div className="mb-2">
            <a href="tel:+919876543210" className="text-blue-400 font-bold hover:underline">
              +91-9876543210
            </a>
            {" | "}
            <a href="https://wa.me/+919876543210" className="text-green-400 font-bold hover:underline">
              WhatsApp
            </a>
          </div>
          <div className="mb-2">
            Address:
            <span className="text-white ml-2">NH-21, Bharatpur, Rajasthan</span>
            <button className="ml-2 px-2 py-1 bg-gray-800 text-white font-bold rounded text-xs hover:bg-gray-700"
              onClick={() => navigator.clipboard.writeText("NH-21, Bharatpur, Rajasthan")}
            >Copy</button>
          </div>
          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.204714944919!2d77.49267571504418!3d27.217906782992353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3973d995d411e06d%3A0x173e7b202688728c!2sBharatpur!5e0!3m2!1sen!2sin!4v1636646449660!5m2!1sen!2sin"
              className="rounded-lg w-full h-40 border-0"
              loading="lazy"
              allowFullScreen=""
              aria-label="Map"
            ></iframe>
          </div>
        </div>
        <form className="bg-black rounded-lg p-6 shadow-lg flex flex-col gap-3"
          autoComplete="off"
        >
          <input type="text" name="name" placeholder="Your Name" value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            className="bg-gray-800 text-white rounded px-4 py-2 border border-gray-700 focus:outline-none"
            required
          />
          <input type="tel" name="phone" placeholder="Phone" value={form.phone}
            onChange={e => setForm({ ...form, phone: e.target.value })}
            className="bg-gray-800 text-white rounded px-4 py-2 border border-gray-700 focus:outline-none"
            required
          />
          <textarea name="message" placeholder="Message" value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
            className="bg-gray-800 text-white rounded px-4 py-2 border border-gray-700 focus:outline-none"
            required
          />
          <button type="submit" className="bg-red-600 text-white font-bold rounded px-6 py-2 hover:bg-red-700 transition">
            Submit
          </button>
        </form>
      </div>
    </motion.section>
  );
}

export default Contact;
