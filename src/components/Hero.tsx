import { motion } from "motion/react";
import { ArrowRight, Clock, Star, MapPin } from "lucide-react";
import { IMAGES } from "../constants";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="Luxury outdoor lounge"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 flex flex-col items-center"
        >
          <h2 className="text-primary text-2xl font-light tracking-[0.5em] uppercase mb-2">Experience</h2>
          <div className="h-[1px] w-24 bg-primary/40 mb-8"></div>
          <h1 className="text-white text-6xl md:text-8xl font-black leading-none tracking-tighter mb-4">
            MODERN <span className="text-primary">LUXURY</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl font-light max-w-2xl leading-relaxed tracking-wide">
            Kota's premier outdoor lounge and restaurant at Hotel Dhola Maru. Open-air dining redefined under the stars.
          </p>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative flex items-center justify-center bg-primary text-[#121212] px-6 py-4 md:px-10 md:py-5 rounded-full text-sm md:text-lg font-bold tracking-[0.1em] hover:bg-white transition-all shadow-[0_0_30px_rgba(236,164,19,0.3)]"
        >
          BOOK YOUR EVENING
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>

      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 w-full max-w-5xl px-4 md:px-6">
        <div className="flex flex-wrap justify-center gap-2 md:gap-8">
          {[
            { icon: Clock, text: "Open till 1 AM" },
            { icon: Star, text: "4.2 Star Rating" },
            { icon: MapPin, text: "Hotel Dhola Maru" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="flex items-center gap-2 md:gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 md:px-6 md:py-3 rounded-full"
            >
              <stat.icon className="w-4 h-4 text-primary shrink-0" />
              <span className="text-white text-xs md:text-sm font-medium tracking-wide whitespace-nowrap">{stat.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
