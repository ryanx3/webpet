'use client';

import type { LabelHTMLAttributes } from "react";

export type LabelProps = {
  children: React.ReactNode;
} & LabelHTMLAttributes<HTMLLabelElement>

export const Label = ({ children, ...props }: LabelProps) => {
  return (
    <label className="text-primary text-sm block pt-2" {...props}>
      {children}
    </label>
  );
}
