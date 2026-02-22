import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Flower, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[1000px]">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass-nav rounded-full px-4 md:px-6 py-3 flex items-center justify-between shadow-2xl"
      >
        <div className="flex items-center gap-2">
          <div className="text-primary flex items-center">
            <Flower className="w-6 h-6 md:w-8 md:h-8" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-white font-bold tracking-tight text-base md:text-lg">Tulumb</span>
            <span className="text-primary text-[8px] md:text-[10px] font-medium tracking-[0.2em] uppercase">तुलुम्ब</span>
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

        <div className="flex items-center gap-3 md:gap-4">
          <button className="hidden sm:block bg-primary text-[#121212] px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-bold tracking-wide hover:scale-105 transition-transform active:scale-95">
            RESERVE
          </button>
          <button
            className="md:hidden text-white p-2 -mr-2 cursor-pointer transition-transform active:scale-95"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 mt-4 glass-nav rounded-2xl p-6 flex flex-col gap-4 shadow-2xl md:hidden overflow-hidden"
          >
            {["Menu", "Our Story", "Gallery", "Reviews"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-primary text-lg font-medium py-3 border-b border-white/10 transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="w-full bg-primary text-[#121212] px-6 py-4 rounded-xl text-sm font-bold tracking-wide mt-2 hover:bg-white transition-colors">
              RESERVE
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
