"use client";

import { useTheme } from "@/components/ThemeProvider";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 dark:border-white/10 text-gray-700 dark:text-white bg-gray-50/50 dark:bg-white/5 hover:bg-light-green/30 dark:hover:bg-white/10 hover:border-fresh-green/30 dark:hover:border-white/20 transition-all duration-300 shadow-xs cursor-pointer shrink-0"
      aria-label="Toggle Dark Mode"
    >
      {theme === "light" ? (
        <Moon className="w-4 h-4 text-deep-green" />
      ) : (
        <Sun className="w-4 h-4 text-accent-gold" />
      )}
    </button>
  );
}
