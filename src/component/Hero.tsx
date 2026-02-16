import heroImage from "@/assets/hero-coffee.jpg";

const Hero = () => {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Kedai Kopi Kupas interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-coffee-dark/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p
          className="text-gold text-sm md:text-base tracking-[0.3em] uppercase mb-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Selamat Datang di
        </p>
        <h1
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-cream mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          Kedai Kopi Kupas
        </h1>
        <p
          className="text-cream/80 text-lg md:text-xl font-light max-w-xl mx-auto mb-10 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          Nikmati kopi pilihan terbaik dari biji lokal Indonesia, disajikan
          dengan cinta dan kehangatan.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up"
          style={{ animationDelay: "0.8s" }}
        >
          <a
            href="#menu"
            className="inline-block bg-gold text-accent-foreground font-semibold px-8 py-3 rounded-md hover:bg-gold/90 transition-all duration-300 tracking-wide uppercase text-sm"
          >
            Lihat Menu
          </a>
          <a
            href="#kontak"
            className="inline-block border border-cream/40 text-cream font-semibold px-8 py-3 rounded-md hover:bg-cream/10 transition-all duration-300 tracking-wide uppercase text-sm"
          >
            Kunjungi Kami
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1.5s" }}>
        <div className="w-6 h-10 border-2 border-cream/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cream/60 rounded-full mt-2 animate-bounce" />
        </div>
      </div>

      <svg
        className="hero-waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <path
            id="hero-wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          ></path>
        </defs>
        <g className="wave1">
          <use xlinkHref="#hero-wave-path" x="50" y="3"></use>
        </g>
        <g className="wave2">
          <use xlinkHref="#hero-wave-path" x="50" y="0"></use>
        </g>
        <g className="wave3">
          <use xlinkHref="#hero-wave-path" x="50" y="9"></use>
        </g>
      </svg>
    </section>
  );
};

export default Hero;
