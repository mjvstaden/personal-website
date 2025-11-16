import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background-secondary/80 backdrop-blur-lg border-b border-border-primary">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-gradient hover:opacity-80 transition-opacity">
            &lt;/dev&gt;
          </Link>

          {/* Navigation Links */}
          <ul className="flex gap-8">
            <li>
              <Link
                to="/"
                className={`text-lg transition-colors relative group ${
                  isActive('/') ? 'text-accent-primary' : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                Home
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-accent-primary transition-all ${
                    isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`text-lg transition-colors relative group ${
                  isActive('/about') ? 'text-accent-primary' : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                About
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-accent-primary transition-all ${
                    isActive('/about') ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className={`text-lg transition-colors relative group ${
                  isActive('/projects') ? 'text-accent-primary' : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                Projects
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-accent-primary transition-all ${
                    isActive('/projects') ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`text-lg transition-colors relative group ${
                  isActive('/contact') ? 'text-accent-primary' : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                Contact
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-accent-primary transition-all ${
                    isActive('/contact') ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
