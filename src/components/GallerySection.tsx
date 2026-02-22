import { Play, ArrowRight } from "lucide-react";
import { IMAGES } from "../constants";

export default function GallerySection() {
  return (
    <div className="bg-[#0a0a0a] py-24 px-6 md:px-10">
      <div className="mx-auto max-w-7xl">
        <section className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">Atmosphere</span>
            <h2 className="text-5xl md:text-6xl font-black leading-tight tracking-tight text-white mb-4">
              Architecture <span className="text-primary">&amp;</span> Energy
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Step into Kota's premier outdoor destination. From the warm glow of our globe lights to the electric rhythm of the night, experience a lounge designed for the extraordinary.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 h-auto md:h-[900px]">
          {/* Large Feature */}
          <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-xl bg-slate-800">
            <img 
              src={IMAGES.landmark} 
              alt="Tulumb Landmark" 
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-transparent to-transparent p-8 flex flex-col justify-end">
              <p className="text-primary font-bold text-sm mb-2">ICONIC DESIGN</p>
              <h3 className="text-2xl font-bold text-white">The Tulumb Landmark</h3>
            </div>
          </div>

          {/* Video Tile */}
          <div className="md:col-span-2 md:row-span-1 relative overflow-hidden rounded-xl bg-primary/5 border border-primary/20">
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
              <img 
                src={IMAGES.liveView} 
                alt="Live View" 
                className="absolute h-full w-full object-cover brightness-50"
                referrerPolicy="no-referrer"
              />
              <button className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-[#0a0a0a] shadow-2xl shadow-primary/20">
                <Play className="w-8 h-8 fill-current" />
              </button>
            </div>
            <div className="absolute bottom-4 left-6 z-10">
              <span className="flex items-center gap-2 text-white font-medium text-sm">
                <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
                Live View
              </span>
            </div>
          </div>

          {/* Small Items */}
          <div className="relative group overflow-hidden rounded-xl bg-slate-800">
            <img src={IMAGES.globe} alt="Globe" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
          </div>
          <div className="relative group overflow-hidden rounded-xl bg-slate-800">
            <img src={IMAGES.tableSetup} alt="Table" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
          </div>

          {/* Vertical Tall Item */}
          <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-xl bg-slate-800">
            <img src={IMAGES.cocktailServe} alt="Cocktail" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
          </div>
          <div className="md:col-span-2 md:row-span-1 relative group overflow-hidden rounded-xl bg-slate-800">
            <img src={IMAGES.eventSpace} alt="Events" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent p-6 flex items-end">
              <h3 className="text-xl font-bold text-white">Event Spaces</h3>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-xl bg-slate-800">
            <img src={IMAGES.loungeSofa} alt="Lounge" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
          </div>
        </section>
      </div>
    </div>
  );
}
