import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "white" | "glass" | "pink" | "outline";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-teal-400 text-white hover:bg-teal-600",
  white: "bg-white text-muted-3 shadow-pill hover:bg-teal-50",
  glass:
    "bg-white/30 text-white backdrop-blur-[2px] hover:bg-white/45 shadow-pill",
  pink: "bg-pink text-white hover:brightness-110",
  outline:
    "border-2 border-teal-400 bg-transparent text-teal-400 hover:bg-teal-400 hover:text-white",
};

const sizes: Record<Size, string> = {
  sm: "h-[50px] px-7 text-base md:text-lg",
  md: "h-[54px] px-8 text-base md:h-[60px] md:px-10 md:text-[22px]",
  lg: "h-[64px] px-9 text-lg md:h-20 md:px-12 md:text-2xl",
};

const base =
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-pill font-medium transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={cn(base, variants[variant], sizes[size], className)}
    />
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  ...props
}: CommonProps & { href: string } & Omit<
    React.ComponentPropsWithoutRef<typeof Link>,
    "href" | "className"
  >) {
  return (
    <Link
      href={href}
      {...props}
      className={cn(base, variants[variant], sizes[size], className)}
    />
  );
}
