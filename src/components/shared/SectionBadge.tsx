interface SectionBadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "light" | "dark";
}

const SectionBadge = ({ children, className = "", variant = "light" }: SectionBadgeProps) => {
  return (
    <span
      className={`inline-block text-xs sm:text-sm font-bold uppercase tracking-[0.2em] ${
        variant === "dark" ? "text-accent" : "text-accent"
      } ${className}`}
    >
      {children}
    </span>
  );
};

export default SectionBadge;
