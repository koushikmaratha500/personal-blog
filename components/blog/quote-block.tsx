import React from "react";

export function QuoteBlock({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="pl-6 border-l-4 border-accent italic text-lg text-foreground/90 my-8">
      {children}
    </blockquote>
  );
}
