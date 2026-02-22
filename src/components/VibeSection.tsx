import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { VIBE_CARDS } from "../constants";

export default function VibeSection() {
  return (
    <section id="gallery" className="py-24 px-6 md:px-12 bg-[#121212] overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h3 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Atmosphere</h3>
            <h2 className="text-white text-4xl md:text-5xl font-black tracking-tight leading-none">THE VIBE</h2>
            <p className="text-slate-400 mt-6 text-lg leading-relaxed">
              From intimate cabanas to our expansive open-air deck, Tulumb offers a variety of settings for every mood. Witness the glow of our signature lighting as the night unfolds.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="size-12 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-[#121212] transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="size-12 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-[#121212] transition-colors">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="flex gap-8 overflow-x-auto hide-scrollbar pb-12 -mx-6 px-6 snap-x snap-mandatory">
          {VIBE_CARDS.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="min-w-[85vw] md:min-w-[500px] snap-center"
            >
              <div className="relative group overflow-hidden rounded-xl aspect-[16/10] mb-6">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              </div>
              <div>
                <h4 className="text-white text-xl font-bold mb-1">{card.title}</h4>
                <p className="text-primary text-sm font-medium tracking-widest uppercase">{card.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
