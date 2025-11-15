function FloatingCTA() {
  return (
    <div className="fixed z-50 bottom-4 right-4 flex flex-col gap-4">
      <a
        href="https://wa.me/+919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white rounded-full p-4 shadow-lg flex items-center gap-2 hover:scale-110 transition transform"
        aria-label="WhatsApp"
      >
        <i className="fa fa-whatsapp"></i> WhatsApp
      </a>
      <a
        href="tel:+919876543210"
        className="bg-red-600 text-white rounded-full p-4 shadow-lg flex items-center gap-2 hover:scale-110 transition transform"
        aria-label="Call"
      >
        <i className="fa fa-phone"></i> Call
      </a>
    </div>
  );
}

export default FloatingCTA;
