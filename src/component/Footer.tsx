import { Coffee } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-coffee-dark border-t border-cream/10 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-cream">
            <Coffee className="h-5 w-5 text-gold" />
            <span className="font-heading text-lg font-bold">Kopi Kupas</span>
          </div>
          <nav className="flex gap-6">
            {["Beranda", "Tentang", "Menu", "Galeri", "Kontak"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-cream/50 hover:text-gold text-sm transition-colors"
              >
                {l}
              </a>
            ))}
          </nav>
          <p className="text-cream/40 text-sm">
            © 2026 Kedai Kopi Kupas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
