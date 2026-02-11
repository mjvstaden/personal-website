import { useEffect, useCallback, useState } from 'react';

interface Section {
  id: string;
  label: string;
}

interface SectionNavProps {
  sections: Section[];
}

export default function SectionNav({ sections }: SectionNavProps) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? '');

  const updateActive = useCallback(() => {
    const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 50;
    if (atBottom) {
      setActiveId(sections[sections.length - 1]?.id ?? '');
      return;
    }

    const offset = window.innerHeight * 0.35;

    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i].id);
      if (el && el.getBoundingClientRect().top <= offset) {
        setActiveId(sections[i].id);
        return;
      }
    }

    setActiveId(sections[0]?.id ?? '');
  }, [sections]);

  useEffect(() => {
    updateActive();
    window.addEventListener('scroll', updateActive, { passive: true });
    return () => window.removeEventListener('scroll', updateActive);
  }, [updateActive]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const headerOffset = 80;
    const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <nav className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-4">
      {sections.map(({ id, label }) => {
        const isActive = activeId === id;

        return (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="group flex items-center gap-3 cursor-pointer"
            aria-label={`Scroll to ${label}`}
          >
            {/* Label */}
            <span
              className={`text-xs font-medium transition-all duration-200 translate-x-2 group-hover:translate-x-0 ${
                isActive
                  ? 'opacity-100 text-accent-primary'
                  : 'opacity-0 group-hover:opacity-100 text-text-secondary'
              }`}
            >
              {label}
            </span>

            {/* Dash */}
            <div
              className={`h-[2px] rounded-full transition-all duration-300 ${
                isActive
                  ? 'w-8 bg-accent-primary shadow-[0_0_8px_rgba(0,230,200,0.5)]'
                  : 'w-3 bg-text-tertiary/40 group-hover:w-5 group-hover:bg-text-secondary'
              }`}
            />
          </button>
        );
      })}
    </nav>
  );
}
