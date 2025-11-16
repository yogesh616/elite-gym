function Footer() {
  return (
    <footer
      className="bg-black text-white py-6 text-center border-t border-red-900"
      role="contentinfo"
      aria-label="Gym footer and social links"
      itemScope
      itemType="http://schema.org/Organization"
    >
      <nav className="flex justify-center gap-6 mb-2" aria-label="Footer navigation">
        <a href="/about" className="hover:text-red-600" aria-label="About Elite Gym">About</a>
        <a href="/gallery" className="hover:text-red-600" aria-label="Elite Gym gallery">Gallery</a>
        <a href="/supplements" className="hover:text-red-600" aria-label="Gym supplements">Supplements</a>
        <a href="/contact" className="hover:text-red-600" aria-label="Contact Elite Gym">Contact</a>
      </nav>
      <div className="flex justify-center gap-4 mb-2 text-lg" aria-label="Social media links">
        <a
          href="https://instagram.com/elitegymbharatpur" // Use your real Instagram handle!
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Elite Gym Instagram"
        >
          <i className="fa fa-instagram" aria-hidden="true"></i>
          <span className="sr-only">Instagram</span>
        </a>
        <a
          href="https://facebook.com/elitegymbharatpur" // Use your real Facebook page!
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Elite Gym Facebook"
        >
          <i className="fa fa-facebook" aria-hidden="true"></i>
          <span className="sr-only">Facebook</span>
        </a>
        <a
          href="https://wa.me/+919876543210" // WhatsApp chat link
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Elite Gym"
        >
          <i className="fa fa-whatsapp" aria-hidden="true"></i>
          <span className="sr-only">WhatsApp</span>
        </a>
      </div>
      <span itemProp="name" className="block mb-2 font-semibold">
        © {new Date().getFullYear()} Elite Gym Bharatpur. All rights reserved.
      </span>
      <address className="text-gray-400 text-xs not-italic" itemProp="address">
        NH-21, Bharatpur, Rajasthan | <a href="tel:+919876543210" aria-label="Call Elite Gym" itemProp="telephone">+91-9876543210</a>
      </address>
    </footer>
  );
}

export default Footer;
