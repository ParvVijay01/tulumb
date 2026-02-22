import { motion } from "motion/react";
import { Flower, Share2, Globe, ArrowUpRight, Bike, ArrowRight } from "lucide-react";
import { IMAGES } from "../constants";

export default function Footer() {
  return (
    <footer className="bg-[#121212] pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Delivery Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 bg-[#1a2e25]/20 p-8 lg:p-12 rounded-3xl border border-primary/5 mb-16 md:mb-24">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-black text-white mb-2">Can't make it to the lounge?</h2>
            <p className="text-slate-400">Experience Tulumb Gastronomy at the comfort of your home.</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 w-full lg:w-auto">
            <a href="#" className="flex items-center justify-center gap-4 bg-[#E23744] hover:bg-[#E23744]/90 text-white px-6 md:px-8 py-4 rounded-2xl font-bold transition-transform hover:-translate-y-1 w-full sm:w-auto">
              <img src={IMAGES.zomatoLogo} alt="Zomato" className="h-6 brightness-0 invert" referrerPolicy="no-referrer" />
              Order on Zomato
            </a>
            <a href="#" className="flex items-center justify-center gap-4 bg-[#FC8019] hover:bg-[#FC8019]/90 text-white px-6 md:px-8 py-4 rounded-2xl font-bold transition-transform hover:-translate-y-1 w-full sm:w-auto">
              <Bike className="w-6 h-6" />
              Order on Swiggy
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Flower className="w-8 h-8 text-primary" />
              <div className="flex flex-col leading-none">
                <span className="text-white font-bold text-xl tracking-tight">Tulumb</span>
                <span className="text-primary text-[10px] font-medium tracking-[0.2em] uppercase">तुलुम्ब</span>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Elevating Kota's dining scene with modern luxury, impeccable service, and a vibe that lasts until the stars fade.
            </p>
            <div className="flex gap-4">
              <a href="#" className="size-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all">
                <Share2 className="w-5 h-5" />
              </a>
              <a href="#" className="size-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">QUICK LINKS</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              {["Menu Selection", "Private Events", "Our Heritage", "Photo Gallery"].map((link) => (
                <li key={link}><a href="#" className="hover:text-primary transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">LOCATION</h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Hotel Dhola Maru Compound,<br />
              Station Road, Kota,<br />
              Rajasthan - 324002
            </p>
            <a href="https://maps.google.com" target="_blank" className="text-primary text-sm font-bold flex items-center gap-2">
              GET DIRECTIONS
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">RESERVATIONS</h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              T: +91 744 238 1234<br />
              E: hello@tulumb.com
            </p>
            <div className="bg-primary/10 border border-primary/20 p-4 rounded-lg">
              <p className="text-primary text-xs font-bold mb-1">CURRENT STATUS</p>
              <p className="text-white text-sm">Open Tonight: 7 PM - 1 AM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-xs tracking-widest">
            © 2024 TULUMB KOTA. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-slate-600 text-xs tracking-widest">
            <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</a>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[100]">
        <motion.button
          whileHover={{ pr: 32 }}
          className="group relative flex items-center gap-2 md:gap-3 rounded-full bg-primary px-4 py-3 md:px-6 md:py-4 text-[#121212] shadow-2xl transition-all active:scale-95"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#121212] opacity-40"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#121212]"></span>
          </span>
          <span className="font-bold tracking-tight text-sm md:text-base hidden sm:inline-block">Planning a Party? Contact Us</span>
          <span className="font-bold tracking-tight text-sm sm:hidden">Party?</span>
          <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
        </motion.button>
      </div>
    </footer>
  );
}
