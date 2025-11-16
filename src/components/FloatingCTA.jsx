function FloatingCTA() {
  return (
    <nav
      className="fixed z-50 bottom-4 right-4 flex flex-col gap-4"
      aria-label="Quick contact options"
    >
      <a
        href="https://wa.me/+919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white rounded-full p-4 shadow-lg flex items-center gap-2 hover:scale-110 transition transform focus:outline-none"
        aria-label="Chat with Elite Gym on WhatsApp"
        title="Chat on WhatsApp"
      >
        <i className="fa fa-whatsapp" aria-hidden="true"></i>
        <span className="sr-only">WhatsApp: </span>
        WhatsApp
      </a>
      <a
        href="tel:+919876543210"
        className="bg-red-600 text-white rounded-full p-4 shadow-lg flex items-center gap-2 hover:scale-110 transition transform focus:outline-none"
        aria-label="Call Elite Gym now"
        title="Call now"
      >
        <i className="fa fa-phone" aria-hidden="true"></i>
        <span className="sr-only">Phone: </span>
        Call
      </a>
    </nav>
  );
}

export default FloatingCTA;
