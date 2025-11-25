"use client";

import { useIntersectionObserver } from "@/lib/useIntersectionObserver";

interface BoardCardProps {
  name: string;
  index?: number;
}

const emojiMap: Record<string, string> = {
  Jenga: "🧱",
  Cards: "🃏",
  Poker: "♠️",
  Ludo: "🎲",
  Uno: "🟦",
};

const BoardCard = ({ name, index = 0 }: BoardCardProps) => {
  const { ref, isIntersecting } = useIntersectionObserver<HTMLDivElement>({ threshold: 0.12, triggerOnce: true });
  const delay = index * 80;
  const emoji = emojiMap[name] ?? "🎲";

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        opacity: isIntersecting ? 1 : 0,
        transform: isIntersecting ? "translateY(0)" : "translateY(18px)",
      }}
      className="flex flex-col items-center gap-4 p-6 border border-border rounded-lg bg-background/30"
    >
      <div className="text-5xl">{emoji}</div>
      <h3 className="font-serif text-2xl text-[var(--color-gold)]">{name}</h3>
      <p className="text-sm text-muted-foreground text-center">Perfect for groups — bring friends, food, and fierce competition.</p>
    </div>
  );
};

export default BoardCard;
