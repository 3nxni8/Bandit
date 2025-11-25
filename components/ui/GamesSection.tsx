"use client";

import BoardCard from "./BoardCard";
import { useIntersectionObserver } from "@/lib/useIntersectionObserver";

const games = ["Jenga", "Cards", "Poker", "Ludo", "Uno"];

const GamesSection = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.08, triggerOnce: true });

  return (
    <section
      ref={ref}
      className="w-full bg-background text-foreground py-20 px-6 md:px-12 lg:px-20"
      aria-labelledby="games-heading"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex flex-col items-center gap-4 mb-6">
            <div className="h-12 w-[1px] bg-[var(--color-gold)]" />
            <span className="uppercase tracking-[0.3em] text-xs font-medium text-muted-foreground">Games</span>
          </div>
          <h2 id="games-heading" className="font-serif text-4xl md:text-5xl text-[var(--color-gold)]">House Boardgames</h2>
          <p className="text-sm text-muted-foreground mt-4 max-w-2xl mx-auto">A curated selection of games to keep the table lively — from classics to quick party favourites.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {games.map((g, i) => (
            <BoardCard key={g} name={g} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamesSection;

