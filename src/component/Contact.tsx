import { MapPin, Clock, Phone, Instagram, Mail } from "lucide-react";

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
                  Jl. Kopi Nusantara No. 12<br />
                  Kota Bandung, Jawa Barat 40115
                </p>
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
                <p className="text-cream/70">+62 812 3456 7890</p>
              </div>
            </div>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-cream/60 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="mailto:hello@kopikupas.id" className="text-cream/60 hover:text-gold transition-colors" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="rounded-lg overflow-hidden border border-cream/10 h-[350px]">
            <iframe
              title="Lokasi Kedai Kopi Kupas"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.56369587288!2d107.57311839726562!3d-6.903429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a1f93d3e815b2!2sBandung%2C%20Bandung%20City%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
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
