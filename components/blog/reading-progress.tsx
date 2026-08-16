"use client";
import { useEffect, useRef } from "react";

export function ReadingProgress() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!progressRef.current) return;
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? winScroll / height : 0;
      progressRef.current.style.transform = `scaleX(${scrolled})`;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // init
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={progressRef}
      className="fixed top-0 left-0 w-full h-1 bg-tertiary-fixed z-[60] origin-left"
      style={{ transform: "scaleX(0)", transition: "transform 0.1s ease-out" }}
    />
  );
}
