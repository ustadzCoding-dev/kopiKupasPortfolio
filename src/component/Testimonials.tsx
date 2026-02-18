import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Dimas A.",
    quote: "Tempatnya nyaman banget buat santai. Kopinya smooth dan baristanya ramah.",
    rating: 5,
  },
  {
    name: "Nisa P.",
    quote: "Pastry-nya enak, cocok buat temen ngopi sore. Suasananya hangat dan estetik.",
    rating: 5,
  },
  {
    name: "Rizky S.",
    quote: "Enak buat WFC, wifi kenceng dan banyak colokan. Signature coffee wajib coba!",
    rating: 5,
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} dari 5 bintang`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "text-gold" : "text-cream/20"}`}
          fill={i < rating ? "currentColor" : "none"}
        />
      ))}
    </div>
  );
}

const Testimonials = () => {
  return (
    <section id="testimoni" className="py-24 bg-coffee-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3 font-semibold">
            Kata Mereka
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-cream">
            Testimoni
          </h2>
          <p className="text-cream/70 max-w-2xl mx-auto mt-4">
            Sedikit cerita dari pelanggan pertama yang mampir ke Kopiku Pas.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Stars rating={5} />
            <span className="text-cream/80 text-sm">5.0 (berdasarkan 3 ulasan)</span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="rounded-xl border border-cream/10 bg-coffee-medium/30 backdrop-blur-sm p-6"
              >
                <Stars rating={t.rating} />
                <blockquote className="text-cream/80 mt-4 leading-relaxed">“{t.quote}”</blockquote>
                <figcaption className="text-cream mt-4 font-semibold">{t.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
