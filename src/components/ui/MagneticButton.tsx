import { useRef, useState, type MouseEvent as ReactMouseEvent } from 'react';

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  variant?: 'primary' | 'secondary';
}

export default function MagneticButton({ children, href, className = '', variant = 'primary' }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: ReactMouseEvent<HTMLAnchorElement>) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    // Magnetic pull effect (maximum 12px)
    const maxDistance = 50;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const pullStrength = Math.min(distance / maxDistance, 1);

    setPosition({
      x: deltaX * pullStrength * 0.3,
      y: deltaY * pullStrength * 0.3,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseClasses = 'inline-block px-6 py-3 font-semibold rounded-lg transition-all duration-300 ease-out';

  const variantClasses = {
    primary: 'bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary text-text-primary hover:glow-md hover:-translate-y-1',
    secondary: 'border border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-text-primary hover:glow-sm',
  };

  return (
    <a
      ref={buttonRef}
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      {children}
    </a>
  );
}
