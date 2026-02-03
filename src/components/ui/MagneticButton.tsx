interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  variant?: 'primary' | 'secondary';
}

export default function MagneticButton({ children, href, className = '', variant = 'primary' }: ButtonProps) {
  const baseClasses = 'inline-block px-6 py-3 font-semibold rounded-lg transition-all duration-200 ease-out';

  const variantClasses = {
    primary: 'bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary text-background-primary hover:glow-md',
    secondary: 'border border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-background-primary',
  };

  return (
    <a
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
