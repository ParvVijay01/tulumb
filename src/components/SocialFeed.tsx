import { Star, Quote, Clock, ArrowRight } from "lucide-react";
import { REVIEWS } from "../constants";

export default function SocialFeed() {
  return (
    <section id="reviews" className="bg-[#0a0a0a] py-24 px-6 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Live Social Feed</h2>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
          </div>
          <button className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors text-sm font-semibold">
            View All Reviews <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REVIEWS.map((review, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl flex flex-col gap-6 backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-24 h-24 text-primary" />
              </div>
              <div className="flex items-center gap-4">
                <div
                  className="size-14 rounded-full border-2 border-primary/40 bg-cover bg-center"
                  style={{ backgroundImage: `url(${review.image})` }}
                ></div>
                <div>
                  <h4 className="font-bold text-white text-lg">{review.name}</h4>
                  <div className="flex text-primary">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-slate-300 italic text-lg leading-relaxed relative z-10">
                "{review.text}"
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                <Clock className="w-4 h-4" />
                Posted {review.time} via {review.source}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
