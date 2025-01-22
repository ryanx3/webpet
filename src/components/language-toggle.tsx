import { Languages } from 'lucide-react';

export const LanguageToggle = () => {
  return (
    <button
      className="p-4 border border-transparent bg-transparent relative flex items-center justify-center hover:bg-muted rounded-full"
      aria-label="Language theme"
    >
      <Languages className="absolute h-[1.2rem] w-[1.2rem] transition-transform duration-300 rotate-0 scale-100 "/>
    </button>
  );
}
