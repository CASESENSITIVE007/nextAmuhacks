"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: Card;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "relative text-2xl bg-gray-100 overflow-hidden dark:bg-neutral-900 overflow-hidden w-full transition-all duration-300 ease-out rounded-lg",
        hovered === index ? "h-[750px] md:h-[500px]" : "h-[250px] md:h-[350px]", // Dynamic height
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <Image
        src={card.src}
        alt={card.title}
        fill
        className="object-cover absolute inset-0 transition-all duration-300"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/60 flex flex-col justify-center items-center px-6 transition-all duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <h3 className="text-3xl md:text-4xl font-semibold text-white text-center">
          {card.title}
        </h3>
        <p className="text-lg md:text-xl text-neutral-300 mt-3 text-center leading-relaxed">
          {card.description}
        </p>
      </div>
    </div>
  )
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
  description: string;
};

export function ThemeCard({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 text-2xl md:grid-cols-3 gap-10 max-w-6xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
