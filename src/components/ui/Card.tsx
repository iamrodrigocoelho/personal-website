interface CardProps {
  children: React.ReactNode;
  variant?: "soft" | "outline" | "elevated";
  padding?: "sm" | "md" | "lg";
  className?: string;
}

const variantClasses = {
  soft: "bg-[#f5f5f5] border-transparent",
  outline: "bg-white border border-[#e5e7eb]",
  elevated: "bg-white border border-[#e5e7eb] shadow-sm",
};

const paddingClasses = {
  sm: "p-5",
  md: "p-6",
  lg: "p-8",
};

export function Card({
  children,
  variant = "soft",
  padding = "lg",
  className = "",
}: CardProps) {
  return (
    <div
      className={`rounded-xl ${variantClasses[variant]} ${paddingClasses[padding]} ${className}`}
    >
      {children}
    </div>
  );
}
