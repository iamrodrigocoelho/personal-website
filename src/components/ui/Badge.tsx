interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "orange" | "pink" | "violet" | "emerald" | "outline";
  className?: string;
  role?: string;
}

const variantClasses = {
  default: "bg-[#f5f5f5] text-[#374151]",
  outline: "bg-transparent border border-[#e5e7eb] text-[#6b7280]",
  orange: "bg-orange-100 text-orange-700",
  pink: "bg-pink-100 text-pink-700",
  violet: "bg-violet-100 text-violet-700",
  emerald: "bg-emerald-100 text-emerald-700",
};

export function Badge({
  children,
  variant = "default",
  className = "",
  role,
}: BadgeProps) {
  return (
    <span
      role={role}
      className={`inline-flex items-center rounded-full px-3 py-0.5 text-[13px] font-medium leading-5 ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
