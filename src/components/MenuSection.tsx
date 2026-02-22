import { Star, Leaf, Utensils } from "lucide-react";
import { IMAGES, MENU_ITEMS } from "../constants";

export default function MenuSection() {
  return (
    <div id="menu" className="bg-[#10221a] bg-marble-texture min-h-screen">
      {/* Signature Kebabs Hero */}
      <section className="relative w-full h-[60vh] overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-t from-[#10221a] via-[#10221a]/20 to-transparent z-10"></div>
        <img
          src={IMAGES.signatureKebabs}
          alt="Signature Kebabs"
          className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute bottom-6 md:bottom-12 left-6 md:left-12 right-6 md:right-auto z-20">
          <span className="text-primary-green font-bold tracking-[0.2em] uppercase text-sm mb-2 block">The Art of Fire</span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">Signature Kebabs</h2>
          <p className="text-slate-300 max-w-xl mt-4 text-base md:text-lg">Smoked to perfection in our traditional clay ovens using heritage recipes and modern techniques.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Featured Item */}
        <div className="mb-16">
          <div className="group relative overflow-hidden rounded-xl bg-[#1a2e25]/30 border border-primary-green/20 flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 aspect-video lg:aspect-square overflow-hidden">
              <img
                src={IMAGES.hareBhare}
                alt="Hare Bhare Kebab"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-8 lg:p-12 w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2 bg-primary-green/20 text-primary-green px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                <Star className="w-3 h-3 fill-current" /> Popular Choice
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Hare Bhare Kebab</h3>
              <p className="text-lg md:text-xl text-slate-300 mb-6 leading-relaxed">
                A classic reimagined. Fresh garden spinach, hand-crushed green peas, and toasted aromatic spices blended with artisanal paneer.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Leaf className="w-5 h-5 text-primary-green" />
                  <span className="text-slate-400 text-sm">Spinach, Green Peas, Paneer, Ginger, Green Chili</span>
                </div>
                <div className="flex items-center gap-3">
                  <Utensils className="w-5 h-5 text-primary-green" />
                  <span className="text-slate-400 text-sm">Chef's Signature Spices & Mint Chutney</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-t border-primary-green/10 pt-8 gap-4 sm:gap-0">
                <span className="text-3xl font-extrabold text-white">₹425</span>
                <button className="w-full sm:w-auto bg-primary-green/10 hover:bg-primary-green text-primary-green hover:text-[#10221a] px-8 py-3 rounded-xl font-bold transition-all border border-primary-green/30">
                  Add to Order
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MENU_ITEMS.map((item) => (
            <div key={item.id} className="group relative bg-[#1a2e25]/20 rounded-xl p-6 border border-transparent hover:border-primary-green/30 transition-all hover:bg-[#1a2e25]/40">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-xl font-bold text-white">{item.name}</h4>
                <span className="text-primary-green font-bold">₹{item.price}</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{item.description}</p>
              <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Global Mains Hero */}
      <section className="relative w-full h-[60vh] overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-t from-[#10221a] via-[#10221a]/20 to-transparent z-10"></div>
        <img
          src={IMAGES.globalMains}
          alt="Global Mains"
          className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute bottom-6 md:bottom-12 left-6 md:left-12 right-6 md:right-auto z-20">
          <span className="text-primary-green font-bold tracking-[0.2em] uppercase text-sm mb-2 block">World Flavors</span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">Global Mains</h2>
          <p className="text-slate-300 max-w-xl mt-4 text-base md:text-lg">A curated journey through the finest culinary traditions, from Mediterranean pastas to Northwest frontier curries.</p>
        </div>
      </section>
    </div>
  );
}
