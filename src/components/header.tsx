import { ChevronLeft, ChevronRight } from "lucide-react";
import { NavLink } from "./nav-link";
import { ThemeToggle } from "./theme-toggle";
import { MyLogo } from "./my-logo";
import { LanguageToggle } from "./language-toggle";

export const Header = () => {
  return (
    <div className="py-4 bg-opacity-80 backdrop-blur-md fixed w-full shadow-lg border-b border-b-border ">
      <div className="flex items-center justify-between max-w-7xl m-auto">
        <div className="flex gap-10">
          <MyLogo />
          <div className="flex items-center gap-6">
            <NavLink href="/">Inicio</NavLink>
            <NavLink href="/about">Sobre mim</NavLink>
            <NavLink href="/contact">Contatos</NavLink>
          </div>
        </div>
        <div className="flex gap-2">
        <LanguageToggle />
        <ThemeToggle />
        </div>
      </div>
    </div>
  );
};
