import { BadgeCheck, Car, CreditCard, PlugZap, Wifi } from "lucide-react";

const faqs = [
  {
    q: "Apakah bisa untuk WFC (work from cafe)?",
    a: "Bisa. Kami sediakan tempat nyaman untuk kerja dengan suasana tenang dan colokan di beberapa area.",
  },
  {
    q: "Apakah tersedia Wi‑Fi?",
    a: "Ada. Silakan tanya password ke barista saat berkunjung.",
  },
  {
    q: "Pembayarannya bisa apa saja?",
    a: "Bisa cash dan non‑cash. QRIS tersedia.",
  },
  {
    q: "Apakah bisa reservasi?",
    a: "Untuk saat ini reservasi via WhatsApp. Kirim tanggal, jam, dan jumlah orang.",
  },
  {
    q: "Jam bukanya bagaimana?",
    a: "Senin–Jumat 07.00–22.00, Sabtu–Minggu 08.00–23.00. (Bisa berubah saat event tertentu)",
  },
];

const facilities = [
  {
    icon: Wifi,
    title: "Wi‑Fi",
    desc: "Siap untuk WFC & online meeting.",
  },
  {
    icon: PlugZap,
    title: "Colokan",
    desc: "Tersedia di beberapa spot.",
  },
  {
    icon: CreditCard,
    title: "QRIS",
    desc: "Pembayaran cepat & praktis.",
  },
  {
    icon: Car,
    title: "Parkir",
    desc: "Area parkir tersedia.",
  },
];

const FaqFacilities = () => {
  return (
    <section id="info" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3 font-semibold">
            Info Penting
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Fasilitas & FAQ
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Biar kamu nggak perlu tanya‑tanya dulu, ini beberapa info yang paling sering dicari.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-6">Fasilitas</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {facilities.map((f) => (
                <div key={f.title} className="rounded-xl border border-border bg-card p-6">
                  <div className="flex items-center gap-3">
                    <f.icon className="h-6 w-6 text-gold" />
                    <div className="font-semibold text-foreground">{f.title}</div>
                  </div>
                  <div className="text-muted-foreground text-sm mt-2">{f.desc}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-xl border border-border bg-card p-6">
              <div className="flex items-start gap-3">
                <BadgeCheck className="h-6 w-6 text-gold mt-0.5" />
                <div>
                  <div className="font-semibold text-foreground">Tips cepat</div>
                  <div className="text-muted-foreground text-sm mt-1">
                    Untuk WFC lebih nyaman, datang di jam pagi atau sore (lebih low‑noise).
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-6">FAQ</h3>
            <div className="space-y-4">
              {faqs.map((item) => (
                <details key={item.q} className="group rounded-xl border border-border bg-card p-6">
                  <summary className="cursor-pointer list-none font-semibold text-foreground flex items-center justify-between">
                    <span>{item.q}</span>
                    <span className="text-muted-foreground transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <div className="text-muted-foreground text-sm mt-3 leading-relaxed">{item.a}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqFacilities;
