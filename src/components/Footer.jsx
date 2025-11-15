function Footer() {
  return (
    <footer className="bg-black text-white py-6 text-center border-t border-red-900">
      <div className="flex justify-center gap-6 mb-2">
        <a href="/about" className="hover:text-red-600">About</a>
        <a href="/gallery" className="hover:text-red-600">Gallery</a>
        <a href="/supplements" className="hover:text-red-600">Supplements</a>
        <a href="/contact" className="hover:text-red-600">Contact</a>
      </div>
      <div className="flex justify-center gap-4 mb-2 text-lg">
        <a href="#" className="hover:text-red-600"><i className="fa fa-instagram"></i></a>
        <a href="#" className="hover:text-red-600"><i className="fa fa-facebook"></i></a>
        <a href="#" className="hover:text-red-600"><i className="fa fa-whatsapp"></i></a>
      </div>
      <span>© {new Date().getFullYear()} GYM NAME. All rights reserved.</span>
    </footer>
  );
}
export default Footer;
