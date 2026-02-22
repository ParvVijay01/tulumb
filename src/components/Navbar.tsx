import { motion } from "motion/react";
import { Flower, Menu, User } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[1000px]">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass-nav rounded-full px-6 py-3 flex items-center justify-between shadow-2xl"
      >
        <div className="flex items-center gap-2">
          <div className="text-primary flex items-center">
            <Flower className="w-8 h-8" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-white font-bold tracking-tight text-lg">Tulumb</span>
            <span className="text-primary text-[10px] font-medium tracking-[0.2em] uppercase">तुलुम्ब</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {["Menu", "Our Story", "Gallery", "Reviews"].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-slate-300 hover:text-primary text-sm font-medium transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-primary text-[#121212] px-6 py-2 rounded-full text-sm font-bold tracking-wide hover:scale-105 transition-transform active:scale-95">
            RESERVE
          </button>
          <div className="md:hidden text-white">
            <Menu className="w-6 h-6" />
          </div>
        </div>
      </motion.div>
    </nav>
  );
}
