'use client';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="border border-transparent bg-transparent relative flex items-center p-4 justify-center hover:bg-muted rounded-full transition duration-300 ease-in-out"
      aria-label="Toggle theme"
    >
      <Sun className="absolute h-[1.2rem] w-[1.2rem] transition-transform duration-300 rotate-0 scale-100 dark:rotate-90 dark:scale-0"/>
      <Moon className="absolute h-[1.2rem] w-[1.2rem] transition-transform duration-300 rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
    </button>
  );
}
