import { CheckCircle } from "lucide-react";
import { IMAGES } from "../constants";

export default function GastronomySection() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2 relative">
          <div className="absolute -top-6 -left-6 w-full h-full border border-primary/20 rounded-lg"></div>
          <img 
            src={IMAGES.gastronomy} 
            alt="Exquisite dining" 
            className="relative z-10 w-full rounded-lg shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h3 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Gastronomy</h3>
          <h2 className="text-white text-4xl font-black mb-6 leading-tight">CRAFTED FOR THE <br/>DISCERNING PALATE</h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            Our menu is a celebration of local ingredients infused with international techniques. Each dish is a masterpiece designed to complement the vibrant ambiance of Tulumb.
          </p>
          <ul className="space-y-4 mb-10">
            {[
              "Signature Cocktails & Mocktails",
              "Wood-Fired Specialties",
              "Artisanal Indian Fusion"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-slate-200">
                <CheckCircle className="w-5 h-5 text-primary" />
                {item}
              </li>
            ))}
          </ul>
          <button className="border-2 border-primary text-primary px-8 py-3 rounded-full font-bold hover:bg-primary hover:text-[#121212] transition-all">
            EXPLORE FULL MENU
          </button>
        </div>
      </div>
    </section>
  );
}
