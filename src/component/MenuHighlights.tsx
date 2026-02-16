import menuLatte from "@/assets/menu-latte.jpg";
import menuEspresso from "@/assets/menu-espresso.jpg";
import menuIced from "@/assets/menu-iced.jpg";
import menuPastry from "@/assets/menu-pastry.jpg";

const menuItems = [
  {
    name: "Kopi Susu Kupas",
    desc: "Espresso, susu segar, gula aren — signature kami.",
    price: "Rp 25.000",
    image: menuLatte,
  },
  {
    name: "Espresso Single Origin",
    desc: "Biji Gayo, roasting medium, rasa bold & clean.",
    price: "Rp 22.000",
    image: menuEspresso,
  },
  {
    name: "Es Kopi Nusantara",
    desc: "Kopi dingin dengan sentuhan santan & pandan.",
    price: "Rp 28.000",
    image: menuIced,
  },
  {
    name: "Croissant & Pastry",
    desc: "Freshly baked, pendamping sempurna kopimu.",
    price: "Rp 18.000",
    image: menuPastry,
  },
];

const MenuHighlights = () => {
  return (
    <section id="menu" className="py-24 bg-coffee-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3 font-semibold">
            Pilihan Favorit
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-cream">
            Menu Andalan
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="group rounded-lg overflow-hidden bg-coffee-medium/50 backdrop-blur-sm border border-cream/10 hover:border-gold/30 transition-all duration-500"
            >
              <div className="overflow-hidden h-56">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg font-semibold text-cream mb-1">
                  {item.name}
                </h3>
                <p className="text-cream/60 text-sm mb-3 leading-relaxed">
                  {item.desc}
                </p>
                <span className="text-gold font-bold text-lg">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;
