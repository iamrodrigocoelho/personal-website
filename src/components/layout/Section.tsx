interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  "aria-labelledby"?: string;
}

export function Section({ id, children, className = "", ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-24 ${className}`}
      {...props}
    >
      <div className="max-w-6xl mx-auto px-6">
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  id?: string;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  align = "left",
  id,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`mb-12 max-w-2xl ${alignClass}`}>
      {label && (
        <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#6b7280] mb-3">
          {label}
        </p>
      )}
      <h2
        id={id}
        className="text-[28px] sm:text-[34px] font-semibold leading-[1.15] tracking-[-0.01em] text-[#111111] mb-4"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-[#374151] leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
