import { MapPin, Clock, Phone, Instagram, Mail, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="kontak" className="py-24 bg-coffee-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3 font-semibold">
            Temukan Kami
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-cream">
            Kontak & Lokasi
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <MapPin className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-heading text-lg font-semibold text-cream mb-1">Alamat</h3>
                <p className="text-cream/70 leading-relaxed">
                  Sukoharjo, Solo Raya<br />
                  Jawa Tengah
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Kopiku%20Pas%2C%20Sukoharjo%2C%20Solo%20Raya"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-3 text-sm text-gold hover:text-gold/90 transition-colors"
                >
                  Buka di Google Maps
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-heading text-lg font-semibold text-cream mb-1">Jam Buka</h3>
                <p className="text-cream/70">
                  Senin – Jumat: 07.00 – 22.00<br />
                  Sabtu – Minggu: 08.00 – 23.00
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-heading text-lg font-semibold text-cream mb-1">Telepon</h3>
                <p className="text-cream/70">+62 8xx xxxx xxxx</p>
              </div>
            </div>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-cream/60 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="mailto:hello@kopikupas.id" className="text-cream/60 hover:text-gold transition-colors" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/628xxxxxxxxxx?text=Halo%20Kopiku%20Pas!%20Saya%20mau%20tanya%20lokasi%20dan%20jam%20buka."
                target="_blank"
                rel="noreferrer"
                className="text-cream/60 hover:text-gold transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="rounded-lg overflow-hidden border border-cream/10 h-[350px]">
            <iframe
              title="Lokasi Kopiku Pas"
              src="https://www.google.com/maps?q=Sukoharjo%2C%20Jawa%20Tengah&output=embed"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
