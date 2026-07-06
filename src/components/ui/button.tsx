import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "group relative inline-flex items-center gap-2 overflow-hidden whitespace-nowrap backdrop-blur-xl transition-all",
  {
    variants: {
      variant: {
        gold: "premium-gold-button font-black text-[#0E1F1E]",
        glass: "premium-glass-button font-bold text-[#FFE8A6]",
      },
      size: {
        topbar: "min-h-10 rounded-[14px] px-4 text-sm 2xl:min-h-12 2xl:px-5 2xl:text-base",
        mobile: "min-h-14 w-full justify-center rounded-[8px] px-5 text-base",
      },
    },
    defaultVariants: {
      variant: "gold",
      size: "topbar",
    },
  }
);

const shineByVariant = {
  gold: "bg-[linear-gradient(120deg,rgba(255,255,255,0.52),transparent_36%,rgba(255,255,255,0.22)_72%,transparent)] opacity-90",
  glass:
    "bg-[linear-gradient(120deg,rgba(255,255,255,0.36),transparent_34%,rgba(255,255,255,0.14)_72%,transparent)] opacity-85",
};

interface LinkButtonProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  href: string;
  children: ReactNode;
}

export function LinkButton({ href, children, variant = "gold", size = "topbar", className, ...props }: LinkButtonProps) {
  return (
    <Link href={href} className={cn(buttonVariants({ variant, size }), className)} {...props}>
      <span
        className={cn(
          "pointer-events-none absolute inset-0 transition-opacity group-hover:opacity-100",
          shineByVariant[variant ?? "gold"]
        )}
      />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </Link>
  );
}
