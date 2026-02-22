import { ArrowRight } from "lucide-react";
import { MOCKTAILS } from "../constants";

export default function ElixirsSection() {
  return (
    <div className="bg-[#10221a] py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <h3 className="text-4xl font-extrabold text-white mb-4">Crafted Elixirs</h3>
          <p className="text-slate-400 text-sm mb-6">Our mocktails are designed to complement the smoky profiles of our tandoors.</p>
          <button className="text-primary-green font-bold flex items-center gap-2 group">
            View Drink Menu <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-6">
          {MOCKTAILS.map((drink, i) => (
            <div key={i} className="aspect-[3/4] rounded-xl overflow-hidden relative group">
              <img 
                src={drink.image} 
                alt={drink.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 to-transparent flex flex-col justify-end p-4">
                <span className="text-white font-bold">{drink.name}</span>
                <span className="text-primary-green text-xs">{drink.flavor}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
