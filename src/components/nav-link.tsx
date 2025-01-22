'use client';

import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";

export type NavLinkProps = LinkProps & {
  children: React.ReactNode;
};

export const NavLink = ({ children, href, ...props }: NavLinkProps) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      {...props}
      className={`flex items-center text-sm font-medium transition duration-100 ease-in-out tracking-wide ${isActive ? "text-sky-400" : "text-muted-foreground hover:text-primary"
        }
      `}
    >
      {children}
    </Link>
  );
}
