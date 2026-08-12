"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Hero" },
  { id: "experience", label: "Experience" },
];

export function Navigation() {
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const midY = window.innerHeight / 2;
      let current = sections[0].id;
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= midY) {
          current = id;
        }
      }
      setActive(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50">
      <ul className="flex flex-col items-end gap-6 list-none">
        {sections.map(({ id, label }) => {
          const isActive = active === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`flex items-center gap-3 group transition-all duration-300 ${
                  isActive ? "text-cmdlet" : "text-foreground hover:text-foreground"
                }`}
              >
                <span
                  className={`font-mono transition-all duration-300 ${
                    isActive
                      ? "opacity-100 text-lg"
                      : "opacity-50 group-hover:opacity-100 text-base"
                  }`}
                >
                  {label}
                </span>
                <span
                  className={`block transition-all duration-300 ${
                    isActive
                      ? "w-8 h-0.5 bg-cmdlet"
                      : "w-4 h-0.5 bg-muted group-hover:w-6 group-hover:bg-foreground"
                  }`}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
