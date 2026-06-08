import type { ReactNode } from "react";

interface Props {
  label: string;
  htmlFor?: string;
  required?: boolean;
  hint?: string;
  children: ReactNode;
}

export const FormField = ({ label, htmlFor, required, hint, children }: Props) => (
  <div className="flex flex-col gap-1.5">
    <label htmlFor={htmlFor} className="text-sm text-neutral-400">
      {label}
      {required && <span className="ml-1 text-cyan-500">*</span>}
    </label>
    {children}
    {hint && <p className="text-xs text-neutral-600">{hint}</p>}
  </div>
);
