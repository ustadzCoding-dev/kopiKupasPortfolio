import { useState, useEffect } from "react";
import { Coffee, Menu, X, MessageCircle } from "lucide-react";

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Menu", href: "#menu" },
  { label: "Galeri", href: "#galeri" },
  { label: "Kontak", href: "#kontak" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-coffee-dark/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="#beranda" className="flex items-center gap-2 text-cream">
          <Coffee className="h-7 w-7 text-gold" />
          <span className="font-heading text-xl font-bold tracking-wide">
            Kopiku Pas
          </span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-cream/80 hover:text-gold transition-colors duration-300 text-sm font-medium tracking-wider uppercase"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/628xxxxxxxxxx?text=Halo%20Kopiku%20Pas!%20Saya%20mau%20tanya%20lokasi%20di%20Sukoharjo%20(Solo%20Raya)%20dan%20jam%20buka."
          target="_blank"
          rel="noreferrer"
          aria-label="Chat WhatsApp"
          className={`ml-4 hidden md:inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/40 ${
            mobileOpen ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
        >
          <MessageCircle className="h-5 w-5" />
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-cream"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-coffee-dark/98 backdrop-blur-md border-t border-gold/20 animate-fade-in">
          <ul className="flex flex-col items-center gap-6 py-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-cream/90 hover:text-gold transition-colors text-lg font-medium tracking-wider uppercase"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
