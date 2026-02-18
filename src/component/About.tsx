import aboutImage from "@/assets/about-coffee.jpg";
import { useEffect, useRef, useState } from "react";
import { useCountUp } from "@/hooks/use-count-up";

const About = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [runCount, setRunCount] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const scrolledRef = { current: window.scrollY > 0 };
    const onScroll = () => {
      scrolledRef.current = window.scrollY > 0;
      window.removeEventListener("scroll", onScroll);
    };

    if (!scrolledRef.current) {
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting && scrolledRef.current) {
          setRunCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const experience = useCountUp({ end: 5, durationMs: 1100, run: runCount });
  const menuVariants = useCountUp({ end: 20, durationMs: 1200, run: runCount });
  const loyalCustomers = useCountUp({ end: 10, durationMs: 1300, run: runCount });

  return (
    <section ref={sectionRef} id="tentang" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img
                src={aboutImage}
                alt="Aneka kopi dan pastry"
                className="w-full h-[400px] md:h-[500px] object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-gold/40 rounded-lg -z-10" />
          </div>

          {/* Text */}
          <div>
            <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3 font-semibold">
              Cerita Kami
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Dari Biji Pilihan,{" "}
              <span className="text-gold">Untuk Anda</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Kopiku Pas lahir dari kecintaan kami terhadap kopi lokal
              Indonesia. Kami percaya bahwa secangkir kopi yang baik dimulai dari
              biji yang dipilih dengan teliti, dipanggang dengan penuh perhatian,
              dan disajikan dengan sepenuh hati.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Setiap cangkir yang kami sajikan adalah hasil kerja sama dengan
              petani kopi lokal, memastikan kualitas terbaik sekaligus mendukung
              komunitas perkebunan di Nusantara.
            </p>
            <div className="flex gap-8">
              <div className="text-center">
                <div className="font-heading text-2xl md:text-3xl font-bold text-gold">
                  {Math.round(experience)}+
                </div>
                <div className="text-muted-foreground text-xs mt-1 tracking-wide">
                  Tahun Pengalaman
                </div>
              </div>
              <div className="text-center">
                <div className="font-heading text-2xl md:text-3xl font-bold text-gold">
                  {Math.round(menuVariants)}+
                </div>
                <div className="text-muted-foreground text-xs mt-1 tracking-wide">
                  Varian Menu
                </div>
              </div>
              <div className="text-center">
                <div className="font-heading text-2xl md:text-3xl font-bold text-gold">
                  {Math.round(loyalCustomers)}K+
                </div>
                <div className="text-muted-foreground text-xs mt-1 tracking-wide">
                  Pelanggan Setia
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
